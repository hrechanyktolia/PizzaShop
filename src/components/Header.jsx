import {useState} from "react";
import {Link} from "react-router-dom";

import pizzaLogo from "../assets/image/pizza logo.png";
import {numbers} from "../constants";

import {CiSearch} from "react-icons/ci";
import {TfiClose} from "react-icons/tfi";
import {FiPhoneCall} from "react-icons/fi";
import {AiOutlineShopping} from "react-icons/ai";



const Header = ({onClickCart}) => {

    const [openNumbers, setOpenNumbers] = useState(false)

    const open = () => {
        setOpenNumbers(!openNumbers)
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
                <div className="header__input">
                    <CiSearch size={17}/>
                    <div className="clearBtn">
                        <TfiClose size={15}/>
                    </div>
                    <input type="text" placeholder='Пошук піци...'/>
                </div>
                <div onMouseEnter={open}
                    onMouseLeave={open}
                     className="header__call">
                    <FiPhoneCall size={22}/>
                    <span>+38 (066) 151 62 98</span>
                    {openNumbers && (
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
                <div className="header__cart" onClick={onClickCart}>
                    <AiOutlineShopping size={30} style={{position:"absolute", top: 12, right: 15,}}/>
                </div>
        </div>
    );
};

export default Header;