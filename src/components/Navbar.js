/* eslint-disable */

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../Navbar.css';

function Navbar(props) {

    const [isMenuActive, setIsMenuActive] = useState(false);


    function menuToggle() {
        setIsMenuActive(!isMenuActive);
    }

    return (
        <nav className="navbar">
            <div className="navbar__title">
                <FontAwesomeIcon icon={faPaw} className="navbar__logo"/>
                <a className="navbar__name" href="">카냥도감 </a>
            </div>
            <ul className={isMenuActive ? "navbar__menu active" 
                : "navbar__menu"}>
                <li><a href="">검색</a></li>
                <li><a href="">지도</a></li>
                <li><a href="">굿즈</a></li>
                <li><a href="">소개</a></li>
                {props.isLoggedIn
                ? <li><a href="">My</a></li>
                : false }
            </ul>
            {props.isLoggedIn
            ? <ul className={isMenuActive ? "navbar__profile active" 
                : "navbar__profile"}>
                <li><a href="">로그아웃</a></li>
              </ul>
            : <ul className={isMenuActive ? "navbar__profile active" 
                : "navbar__profile"}>
                <li><a href="">로그인</a></li><li><a href="">회원가입</a></li>
              </ul>
            }
            <ul className={isMenuActive ? "navbar__sns active" 
                : "navbar__sns"}>
                <li><a href=""><FontAwesomeIcon icon={faFacebook}/></a></li>
                <li><a href=""><FontAwesomeIcon icon={faInstagram}/></a></li>
            </ul>
            <a href="#" className={isMenuActive ? "navbar__toggleBtn collapse" 
            : "navbar__toggleBtn"} onClick={menuToggle}>
                <FontAwesomeIcon icon={faCaretDown}/>
            </a>
            <button className={isMenuActive ? "navbar__collapsBtn collapse" 
            : "navbar__collapsBtn expand"} onClick={menuToggle}>
                <FontAwesomeIcon icon={faCaretDown}/>
            </button>
        </nav>
    )
}


export default Navbar;