import React from 'react';

import '../style/components/MobileApp.scss';
import NaverMap from './NaverMap';
import SearchStore from './SearchStore';

function MobileApp() {
  return (
    <div id="mobileContainer">
      <NaverMap />
      <div id="kakaoUpperContainer">
        <header id="mobileUpperBar" />
        <SearchStore />
      </div>
      <div id="bottomContainer">
        <ul>
          <li>
            <img
              id="location"
              src={require('../img/AppPage/Location.png')}
              alt="location"
            />
            <p>주변</p>
          </li>
          <li>
            <img
              id="seeMore"
              src={require('../img/AppPage/seeMore.png')}
              alt="SeeMore"
            />
            <p>더보기</p>
          </li>
        </ul>
      </div>
      <div id="nobottom" />
    </div>
  );
}

export default MobileApp;
