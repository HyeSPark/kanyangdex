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

    const locs = {
        아름관 : "loc_n-ar",
        북측 : "loc_n-north",
        인사동 : "loc_n-4",
        동측 : "loc_e-east",
        서측회관 : "loc_w-2",
        여울나들 : "loc_w-yn",
        다솜희망 : "loc_w-dh",
        원내 : "loc_w-5",
        나래미르 : "loc_w-6",
    }
    const nameOfClassLook = "infocard__tag " + looks[props.catList.look];
    const nameOfClassLoc = "infocard__tag " + locs[props.catList.loc];

    return (
        <a href="" className="infocard">
            <div className="infocard__img">
                <img src={props.catList.src}/>
            </div>
            <div className="infocard__textBox">
                <h2 className="infocard__name">{props.catList.name}</h2>
                <div className="infocard__tags">
                    <span className={nameOfClassLoc}>{props.catList.loc}</span>
                    <span className={nameOfClassLook}>{props.catList.look}</span>
                </div>
            </div>
        </a>
    )
}


export default InfoCard;