import React from 'react';
import {Link} from "react-router-dom";
import {TfiClose} from "react-icons/tfi";
import {useDispatch, useSelector} from "react-redux";
import {addProduct,  minusProduct, removeProduct, toggleCartBtn} from "../redux/cartSlice";

import CartEmptyPopup from "./CartEmptyPopup";


const CartPopup: React.FC = () => {

    const {products, totalSum} = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const closeCart = (): void => dispatch(toggleCartBtn(false))

    const handleAddProduct = (product: any): void => {
        dispatch(addProduct(product));
    };

    return (
    <div className="overlay" onClick={closeCart}>
        <div className="drawer" onClick={e => e.stopPropagation()}>

            {products.length > 0
                ? <>
                    <div className="top">
                        <h3 className="title">Ваше замовлення</h3>
                        <TfiClose onClick={closeCart} size={15} style={{cursor: "pointer"}}/>
                    </div>
                    {products.map(product =>
                        <div className="cartItem" key={`${product.id}_${product.type}`}>
                            <div className="cartItem__product">
                                <button className="remove" onClick={() => dispatch(removeProduct(product.id))}>x</button>
                                <img width={75} height={75}
                                     src={product.imageUrl} alt="pizza"/>
                                <div className="description">
                                    <p>{product.title}</p>
                                    <span>{product.type} - {product.span}</span>
                                    <div className="bot">
                                        <p>{product.price} грн</p>
                                        <ul>
                                            <li>
                                                <button className="minusItem"
                                                        onClick={() => dispatch(minusProduct(product.id))}
                                                        disabled={product.count === 1}
                                                >-</button>
                                            </li>
                                            <li>{product.count}</li>
                                            <li>
                                                <button className="plusItem" onClick={() => handleAddProduct(product)} >+</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="footerBlock">
                        <div className="total">
                            <div className="total__sum">
                                <h4>Сума замовлення:</h4>
                                <p>{totalSum}<span>грн</span></p>
                            </div>
                            <Link to="/cart">
                                <button onClick={closeCart}>Оформити</button>
                            </Link>

                        </div>
                    </div>
                </>
               : <>
                    <CartEmptyPopup/>
                </>
            }
        </div>
    </div>
    );
};

export default CartPopup;