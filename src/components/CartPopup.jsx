import React from 'react';
import {Link} from "react-router-dom";
import {TfiClose} from "react-icons/tfi";

import CartEmptyPopup from "./CartEmptyPopup";


const CartPopup = ({closeCart}) => {
    return (

    <div className="overlay">
        <div className="drawer">
            {
                <>
                    <div className="top">
                        <h3 className="title">Ваше замовлення</h3>
                        <TfiClose onClick={closeCart} size={15} style={{cursor: "pointer"}}/>
                    </div>
                    <div className="cartItem">
                        <div className="cartItem__product">
                            <button className="remove">x</button>
                            <img width={75} height={75}
                                 src="https://php.ninjapizza.com.ua/images/20/l2x.webp?ver=v1.0.7" alt="pizza"/>
                            <div className="description">
                                <p>Піца з пряним суджуком і рікотою</p>
                                <span>30 см / 560 г</span>
                                <div className="bot">
                                    <p>350 грн</p>
                                    <ul>
                                        <li>
                                            <button className="plusItem">-</button>
                                        </li>
                                        <li>1</li>
                                        <li>
                                            <button className="minusItem">+</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footerBlock">
                        <div className="total">
                            <div className="total__sum">
                                <h4>Сума замовлення:</h4>
                                <p>350<span>грн</span></p>
                            </div>
                            <Link to="/cart">
                                <button onClick={closeCart} >Оформити</button>
                            </Link>

                        </div>
                    </div>
                </> ||

                <>
                    <CartEmptyPopup closeCart={closeCart}/>
                </>
            }
        </div>
    </div>



    );
};

export default CartPopup;