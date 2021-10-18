/* eslint-disable */

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import '../Search.css';

function Search(props) {
    const [isDetailActive, setIsDetailActive] = useState(false);


    function menuToggle() {
        setIsDetailActive(!isDetailActive);
    }

    return (
        <div style={{position:"relative", marginBottom:"40px"}}>
            <div className="searchBox">
                <div className="searchbox__label">
                    찾기
                </div>
                <input className="searchbox__word" placeholder="이름 또는 서식지, 무늬 키워드를 입력해주세요" type="text"/>
                <button className="searchbox__btn" type="button">
                    <FontAwesomeIcon icon={faSearch} className="searchbox__icon" />
                </button>
            </div>
            <div className={isDetailActive
            ? "detailed_search active"
            : "detailed_search"
            }>
                <ul className="searchbox__detailList">
                    <li>서식지<a href="" className="dropdown">전체 <FontAwesomeIcon icon={faCaretDown} /></a></li>
                    <li>무늬<a href="" className="dropdown">전체 <FontAwesomeIcon icon={faCaretDown} /></a></li>
                </ul>
            </div>
            <div className="expanded_searchBox" onClick={menuToggle}>
                <a className="searchbox__expand" href="#">
                    {isDetailActive
                    ? "닫기"
                    : "상세검색" } <FontAwesomeIcon icon={faCaretDown} />
                </a>
            </div>
        </div>
    )
}


export default Search;