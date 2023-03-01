import React, {useState} from 'react';
import {categories} from "../constants";


const Categories = () => {

    const [activeIndex, setActiveIndex] = useState()

    const selectCategory = (event, index) => {
        setActiveIndex(index)
    }
    return (
        <div className="categories">
            {categories.map((category, index) =>
                <label key={index} className="checkbox">
                    <input type="checkbox"
                           onChange={(event) => selectCategory(event, index)}
                           checked={activeIndex === index}
                    />
                    <span>{category.title}</span>
                    <img width={24} src={category.img} alt={category.title}/>
                </label>
            )}
        </div>
    );
};

export default Categories;