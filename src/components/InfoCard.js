/* eslint-disable */

import React, { useState } from 'react'
import '../InfoCard.css';

function InfoCard(props) {

    const looks = {
        삼색이 : "look_three", //bg color : skin, color : white
        카오스 : "look_chaos", //bg color : skin, color : black
        턱시도 : "look_tuxedo",//bg color : black, color : white
        얼룩이 : "look_cow",   //bg color : white, color : black
        치즈 : "look_cheese", //bg color : white, color : yellow
        고등어 : "look_gofish",//bg color : grey, color : black
    }
    const nameOfClassLook = "infocard__look " + looks[props.catList.look]

    return (
        <a href="" className="infocard">
            <div className="infocard__img">
                <img src={props.catList.src}/>
            </div>
            <div className="infocard__textBox">
                <h2 className="infocard__name">{props.catList.name}</h2>
                <div className="infocard__tags">
                    <span className="infocard__loc">{props.catList.loc}</span>
                    <span className={nameOfClassLook}>{props.catList.look}</span>
                </div>
            </div>
        </a>
    )
}


export default InfoCard;