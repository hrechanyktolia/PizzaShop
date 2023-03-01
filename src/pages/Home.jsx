import React from 'react';
import {useEffect, useState} from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/pizzaBlock/Skeleton";
import Index from "../components/pizzaBlock";


const Home = () => {

    const [pizzaItem, setPizzaItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://63a4bd1f2a73744b007f13dd.mockapi.io/pizzaItems')
            .then(response => response.json())
            .then(arr => {
                    setPizzaItem(arr)
                    setIsLoading(false)
            })
    }, [])

    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Піци</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, i) => <Skeleton key={i}/>)
                    : pizzaItem.map(pizza => <Index key={pizza.id} {...pizza}/>)
                }
            </div>
        </>
    );
};

export default Home;