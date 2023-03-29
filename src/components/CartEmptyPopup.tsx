import React from 'react';
import cartEmpty from "../assets/image/cartEmpty.svg"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {toggleCartBtn} from "../redux/cartSlice";

const CartEmptyPopup: React.FC = () => {
    const dispatch = useDispatch()

    return (
        <div className="cartEmpty">
            <h2>Ваш кошик порожній</h2>
            <p>Це потрібно виправити. Переходьте в меню і вибирайте смачну піцу!</p>
            <img width={150} src={cartEmpty}  alt="cartEmpty"/>
            <Link to="/">
                <button onClick={() => dispatch(toggleCartBtn(false))}>Повернутися в меню</button>
            </Link>

        </div>

    );
};

export default CartEmptyPopup;