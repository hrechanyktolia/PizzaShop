import React from 'react';
import logo from "../assets/image/pizza logo.png"
import {numbers, socials} from "../constants";

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__block">
                    <div className="description">
                        <img width={70} src={logo} alt="pizza logo"/>
                        <span>Різноманітний вибір піци - у Піца Home є все, що тобі потрібно!</span>
                    </div>
                    <div className="social">
                        <span>Ми в соц. мережах:</span>
                        <ul>
                            {socials.map(social =>
                                <li key={social.title}>
                                    <a target="_blank" href={social.link}>
                                        {social.img}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="footer__call">
                    <span>Оформити замовлення:</span>
                    <ul>
                        {numbers.map(number =>
                            <li key={number.phone}>
                                {number.phone}
                            </li>
                        )}
                    </ul>
                </div>
                <div className="footer__work">
                    <span>Працюємо:</span>
                    <p>з 10:00 по 21:00</p>
                    <div className="footer__payment">
                        <img width={165} src="https://ninjapizza.com.ua/assets/images/payments.png" alt="payment method"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;