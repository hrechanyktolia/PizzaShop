import React, {useState} from 'react';
import {sortList} from "../constants";

const Sort = () => {
    const [popup, setPopup] = useState(false)
    const [selectedName, setSelectedName] = useState(0)

    const selectedSort = (index) => {
        setSelectedName(index)
        setPopup(false)
    }
    return (
        <div className="sort">
            <div className="sort__label">
                <b>Сортування за:</b>
                <span onClick={() => setPopup(prev => !prev)}>{sortList[selectedName]}</span>
            </div>
            {popup && (
                <div className="sort__popup">
                    <ul>
                        {sortList.map((name, index) =>
                            <li key={index}
                                onClick={() => selectedSort(index)}
                                className={selectedName === index ? 'active' : ''}
                            >
                                {name}
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sort;