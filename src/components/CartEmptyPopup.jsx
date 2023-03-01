import React from 'react';
import cartEmpty from "../assets/image/cartEmpty.svg"
import {Link} from "react-router-dom";

const CartEmptyPopup = ({closeCart}) => {
    return (
        <div className="cartEmpty">
            <h2>Ваш кошик порожній</h2>
            <p>Це потрібно виправити. Переходьте в меню і вибирайте смачну піцу!</p>
            <img width={150} src={cartEmpty}  alt="cartEmpty"/>
            <Link to="/">
                <button onClick={closeCart}>Повернутися в меню</button>
            </Link>

        </div>

    );
};

export default CartEmptyPopup;