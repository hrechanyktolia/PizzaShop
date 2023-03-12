import React, {useState} from 'react';
import {typeNames} from "../../constants";
import {useDispatch, useSelector} from "react-redux";
import {addProduct, plusProduct,  minusProduct, removeProduct} from "../../redux/cartSlice"

const Index = ({id, imageUrl, title, span, body, types, price}) => {

    const [activeType, setActiveType] = useState(0)

    const dispatch = useDispatch()
    const cartProduct = useSelector((state) => state.cart.products.find(obj => obj.id === id))
    const count = cartProduct ? cartProduct.count : 0


    const totalPrice = price[activeType]

    // const onClickAdd = () => {
    //     const product = {id, imageUrl, title, span, price: totalPrice, type: typeNames[activeType]}
    //     dispatch(addProduct(product))
    // }

    const onClickAdd = () => {
        const product = { id, imageUrl, title, span, type: typeNames[activeType], count: 1 };
        product.price = price[activeType];

        dispatch(addProduct(product));
    };

    const onClickPlus = () => {
        dispatch(plusProduct(id))
    }

    const onClickMinus = () => {
        if (count === 1) {
            dispatch(removeProduct(id))
        } else {
            dispatch(minusProduct(id))
        }
    }

    return (
        <div className="pizza-block-wrapper">
            <div className="pizza-block">
                <div className="img">
                    <img src={imageUrl} alt="pizza"/>
                </div>
                <div className="pizza-block__title">{title}</div>
                <div className="pizza-block__body">
                    <b>{span} - </b>
                    <span>{body}</span>
                </div>

                <div className="pizza-block__selector">
                    <div className="selector-block">
                        <ul>
                            {types.map((type, index) =>
                                <li key={type} onClick={() => setActiveType(index)}
                                    className={activeType === index ? 'active' : ''}
                                >
                                    {typeNames[type]}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="pizza-block__bot">
                    <h2>{totalPrice}<span>грн</span></h2>
                    {count === 0
                        ? <button onClick={onClickAdd} className="add">Замовити</button>
                        : <ul>
                            <li>
                                <button onClick={onClickMinus}>-</button>
                            </li>
                            <li>{count}</li>
                            <li>
                                <button onClick={onClickPlus}>+</button>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        </div>

    );
};

export default Index;