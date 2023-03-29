import React from 'react';
import courier from "../assets/image/courier.png"
import {MdFileDownloadDone} from "react-icons/md"

const CartOrder: React.FC = () => {
    return (
        <div className="cartOrder">
            <div className="background">
                <h3>Ваше замовлення прийнято
                    <MdFileDownloadDone size={45} style={{color: "green", marginLeft: 5}}/>
                </h3>
                <p>Очікуйте дзвінка курьєра!</p>
                <img width={225} src={courier}  alt="курьєр"/>
            </div>
        </div>
    );
};

export default CartOrder;