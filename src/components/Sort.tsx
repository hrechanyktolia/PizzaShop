import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {sortList, SortList} from "../constants";
import {setSort} from "../redux/filterSlice";



const Sort: React.FC = () => {
    const [popup, setPopup] = useState(false)
    const sortRef = useRef(null)

    const sort = useSelector((state) => state.filter.sort)
    const dispatch = useDispatch()


    const selectedSort = (obj: SortList) => {
        dispatch(setSort(obj))
        setPopup(false)
    }

    const clickOutside = (event: Event): void => {
        if (!sortRef.current.contains(event.target as Node)) {
            setPopup(false);
        }
    };

    useEffect(() => {
        document.body.addEventListener("click", clickOutside);
        return () => {
            document.body.removeEventListener("click", clickOutside);
        };
    }, []);


    return (
        <div className="sort" ref={sortRef}>
            <div className="sort__label">
                <b>Сортування за:</b>
                <span onClick={() => setPopup(!popup)}>{sort.name}</span>
            </div>
            {popup && (
                <div className="sort__popup">
                    <ul>
                        {sortList.map(obj =>
                            <li key={obj.name}
                                onClick={() => selectedSort(obj)}
                                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}
                            >
                                {obj.name}
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sort;