import React from 'react';
import {categories} from "../constants";


const Categories = ({selectedCategory,onChangeCategory}) => {

    const handleCheckboxChange = (event, index) => {
        if (event.target.checked) {
            onChangeCategory(index)
        } else {
            onChangeCategory([])
        }
    };

    return (
        <div className="categories">
            {categories.map((category, index) =>
                <label key={index} className="checkbox">
                    <input type="checkbox"
                           onChange={event => handleCheckboxChange(event, index) }
                           checked={selectedCategory === index}
                    />
                    <span>{category.title}</span>
                    <img width={24} src={category.img} alt={category.title}/>
                </label>
            )}
        </div>
    );
};


export default Categories;