import React from 'react';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedCategory} from "../redux/filterSlice"
import {fetchPizza, setPizzaItems} from "../redux/pizzaSlice";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/pizzaBlock/Skeleton";
import Index from "../components/pizzaBlock";



const Home = () => {

    const {sort, selectedCategory, search} = useSelector((state) => state.filter)
    const {products, loading} = useSelector((state) => state.pizza)

    const dispatch = useDispatch()

    const onChangeCategory = (index: number): void => {
        dispatch(setSelectedCategory(index))
    }

    const getPizza = async () => {

        const order = sort.sortProperty.includes('-') ? 'desc' : 'asc'
        const sortBy = sort.sortProperty.replace('-', '')

        dispatch(fetchPizza({ order, sortBy, selectedCategory }))
    }

    useEffect(() => {
       getPizza()
    }, [selectedCategory, sort.sortProperty])


    const skeleton = [...new Array(6)].map((_, i) => <Skeleton key={i}/>)
    const pizza = products.filter(obj => {
        if (obj.title.toLowerCase().includes(search.toLowerCase())) {
            return true
        }
        return false
    }).map(obj => <Index key={obj.id} {...obj}/>)

    return (
        <>
            <div className="content__top">
                <Categories  selectedCategory={selectedCategory} onChangeCategory={onChangeCategory} />
                <Sort/>
            </div>
            <h2 className="content__title">Піци</h2>
            {loading === 'failed' ?
                <div style={{fontSize: '30px'}}>Виникла помилка на сервері! Повторіть запит)</div> :
                <div className="content__items">
                    {loading === 'pending'
                        ? skeleton
                        : pizza
                    }
                </div>
            }
        </>
    );
};

export default Home;





