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
  const [catList, setCatList] = useState([{src:SS, name:"한쪽이", loc:"북측", look:"삼색이"},{src:SS, name:"깜쪽이", loc:"북측", look:"카오스"},]);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn}></Navbar>
      <Search></Search>
      <ul className="infolist">
        <li>
          <InfoCard className="infocard" catList={catList[0]}></InfoCard>
        </li>
        <li>
          <InfoCard className="infocard" catList={catList[1]}></InfoCard>
        </li>
      </ul>
      <footer>
        <p>Copyright © 2021 <span style = {{color: "rgb(94, 94, 94)"}}>HSPark</span> All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
