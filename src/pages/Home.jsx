import React from 'react';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedCategory} from "../redux/filterSlice";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/pizzaBlock/Skeleton";
import Index from "../components/pizzaBlock";



const Home = () => {

    const [pizzaItem, setPizzaItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const {sort, selectedCategory, search} = useSelector((state) => state.filter)
    const dispatch = useDispatch()

    const onChangeCategory = (id) => {
        dispatch(setSelectedCategory(id))
    }

    useEffect(() => {
        setIsLoading(true)
        const order = sort.sortProperty.includes('-') ? 'desc' : 'asc'
        const sortBy = sort.sortProperty.replace('-', '')

        fetch(`https://63a4bd1f2a73744b007f13dd.mockapi.io/pizzaItems?category=${selectedCategory}&sortBy=${sortBy}&order=${order}`)
            .then(response => response.json())
            .then(arr => {
                    setPizzaItem(arr)
                    setIsLoading(false)
            })
    }, [selectedCategory, sort.sortProperty])

    const skeleton = [...new Array(6)].map((_, i) => <Skeleton key={i}/>)
    const pizza = pizzaItem.filter(obj => {
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
            <div className="content__items">
                {isLoading
                    ? skeleton
                    : pizza
                }
            </div>
        </>
    );
};

export default Home;