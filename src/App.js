/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import SS from './IMG_8098.JPG';
import './App.css';
import Navbar from './components/Navbar.js';
import InfoCard from './components/InfoCard.js';
import Search from './components/Search.js';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [catList, setCatList] = 
    useState(
      [
        {src:SS, name:"한쪽이", loc:"아름관", look:"삼색이"},
        {src:SS, name:"깜쪽이", loc:"아름관", look:"카오스"},
        {src:SS, name:"까까", loc:"아름관", look:"턱시도"},
        {src:SS, name:"퐁듀", loc:"서측회관", look:"턱시도"},
        {src:SS, name:"다미", loc:"서측회관", look:"삼색이"},
        {src:SS, name:"건강", loc:"서측회관", look:"치즈"},
      ]);

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn}></Navbar>
      <Search></Search>
      <ul className="infolist">
        {catList.map((el) => (
          <li>
            <InfoCard className="infocard" catList={el}></InfoCard>
          </li>
        ))}
      </ul>
      <footer>
        <p>Copyright © 2021 <span style = {{color: "rgb(94, 94, 94)"}}>HSPark</span> All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
