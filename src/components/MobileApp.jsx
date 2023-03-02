import React from 'react';

import appStore from "../assets/image/appStore.png";
import googlePlay from "../assets/image/googlePlay.png"
import mobile from "../assets/image/mobile.png";

const MobileApp = () => {
    return (
        <div className="mobile-app">
            <div className="mobile-app__container">
                <div className="mobile-app__text">
                    <div className="mobile-app__title">
                        <h2>Завантажуйте додаток і робіть замовлення ще швидше</h2>
                    </div>
                    <div className="mobile-app__links">
                        <a target="_blank" href="https://www.apple.com/ua/app-store/">
                            <img width={150} src={appStore} alt="app store"/>
                        </a>
                        <a target="_blank" href="https://play.google.com/store/apps?hl=ru&gl=US&pli=1">
                            <img width={150} src={googlePlay} alt="play market"/>
                        </a>
                    </div>
                </div>
                <div className="mobile-app__image">
                    <img src={mobile} alt="mobile phone"/>
                </div>
            </div>
        </div>
    );
};

export default MobileApp;