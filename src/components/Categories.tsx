import React, { ChangeEvent } from 'react';
import {categories} from "../constants";

type CategoriesProps = {
    selectedCategory: number,
    onChangeCategory: (index: number | number[]) => void,
}

const Categories: React.FC<CategoriesProps> = ({selectedCategory,onChangeCategory}) => {

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, index: number): void => {
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