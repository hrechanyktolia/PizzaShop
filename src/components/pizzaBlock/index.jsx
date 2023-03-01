import React, {useState} from 'react';
import {typeNames} from "../../constants";

const Index = ({imageUrl, title, span, body, types, price}) => {
    const [countPizza, setCountPizza] = useState(0)
    const [activeType, setActiveType] = useState(0)

    const plus = () => {
        setCountPizza(prev => prev + 1)

    }

    const minus = () => {
        if (countPizza > 0) {
            setCountPizza(prev => prev - 1)
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
                    {activeType === 0
                        ? <h2>{price[0]}<span>грн</span></h2>
                        : <h2>{price[1]}<span>грн</span></h2>
                    }
                    {countPizza === 0
                        ? <button onClick={plus} className="add">Замовити</button>
                        : <ul>
                            <li>
                                <button onClick={minus}>-</button>
                            </li>
                            <li>{countPizza}</li>
                            <li>
                                <button onClick={plus}>+</button>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        </div>

    );
};

export default Index;