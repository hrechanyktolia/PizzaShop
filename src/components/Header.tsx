import React, {ChangeEvent, useRef, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setSearch} from "../redux/filterSlice";
import {toggleCartBtn} from "../redux/cartSlice";

import pizzaLogo from "../assets/image/pizza logo.png";
import {numbers} from "../constants";

import {CiSearch} from "react-icons/ci";
import {TfiClose} from "react-icons/tfi";
import {FiPhoneCall} from "react-icons/fi";
import {AiOutlineShopping} from "react-icons/ai";



const Header: React.FC = () => {

    const [openPhone, setOpenPhone] = useState(false)
    const location = useLocation()

    const inputRef = useRef(null)

    const search = useSelector((state) => state.filter.search)
    const dispatch = useDispatch()

    const open = (): void => {
        setOpenPhone(!openPhone)
    }

    const clearInput = (): void => {
        dispatch(setSearch(''))
        inputRef.current.focus()
    }
    const changeInput = (event: ChangeEvent<HTMLInputElement>): void => {
        console.log(event)
        dispatch(setSearch(event.target.value))
    }

    return (
        <div className="header">
                <div className="header__logo">
                    <Link to="/">
                        <img width={100} src={pizzaLogo} alt='pizza logo'/>
                    </Link>
                    <div>
                        <h1>Піца Home</h1>
                        <p>Доставка по всій країні</p>
                    </div>
                </div>
            {location.pathname !== '/cart' &&
                <div className="header__input">
                    <CiSearch size={17}/>
                    {search &&
                        <div className="clearBtn">
                            <TfiClose size={15} onClick={clearInput}/>
                        </div>}
                    <input
                        ref={inputRef}
                        value={search}
                        onChange={changeInput}
                        type="text"
                        placeholder='Пошук піци...'/>
                </div>
            }
            <div className="header__right">
                <div onMouseEnter={open}
                     onMouseLeave={open}
                     className="call">
                    <FiPhoneCall size={22}/>
                    <span>+38 (066) 151 62 98</span>
                    {openPhone && (
                        <div className="popup">
                            <div className="popup__content">
                                <ul>
                                    {numbers.map(number =>
                                        <li key={number.phone}>
                                            <img src={number.img} alt={number.phone}/>
                                            <span>{number.phone}</span>
                                        </li>
                                    )}
                                </ul>
                            </div>

                        </div>
                    )}
                </div>
                <div className="cart" onClick={() => dispatch(toggleCartBtn(true))}>
                    <AiOutlineShopping size={30} style={{position:"absolute", top: 12, right: 15,}}/>
                </div>
            </div>

        </div>
    );
};

export default Header;