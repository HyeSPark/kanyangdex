/* eslint-disable */

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import '../Search.css';
import SearchTags from './SearchTags.js';

function Search(props) {
    const [isDetailActive, setIsDetailActive] = useState(false);
    const [locList, setLocList] = useState(
        [
            {id: 0, category: "북측", locs: ["아름관", "북측", "인사동"]},
            {id: 1, category: "동측", locs: ["동측"]},
            {id: 2, category: "서측", locs: ["서측회관", "여울나들", "다솜희망", "원내", "나래미르"]}
        ])
    const [lookList, setLookList] = useState([])
    const constDownIcon =  <FontAwesomeIcon icon= {faCaretDown} />

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
            ? "searchbox__more active"
            : "searchbox__more"
            }>
            <ul className="searchbox__detailList">
                <li className="searchbox__details loc">
                    <b>서식지</b>
                    <hr style={{border:"solid 1px rgb(209, 152, 106)"}}></hr>
                    <SearchTags locList={locList} ></SearchTags>
                </li>
                <li className="searchbox__details look">
                    <b>무늬</b>
                    <hr style={{border:"solid 1px rgb(209, 152, 106)"}}></hr>
                    <div href="" className="searchbox__detail">
                    </div>
                 </li>
            </ul>
            </div>
            <div className="searchbox__expanded" onClick={menuToggle}>
                <a className="searchbox__expandBtn" href="#">
                    {isDetailActive
                    ? "닫기"
                    : "상세검색 "
                    } 
                    <FontAwesomeIcon className= {isDetailActive
                    ? "searchbox__expandIcon active"
                    : "searchbox__expandIcon"
                    } icon= {faCaretDown} />
                </a>
            </div>
        </div>
    )
}


export default Search;