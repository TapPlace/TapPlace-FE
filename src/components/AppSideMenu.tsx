import React from 'react';
import SearchStore from './SearchStore';

import '../style/components/AppSideMenu.scss';
import SearchCategory from './SearchCategory';
import { isBrowser } from 'react-device-detect';

function AppSideMenu() {
  return (
    <div id="appSideMenu">
      <SearchStore />
      <ul id="searchCategoryContainer">
        <SearchCategory category="음식점" />
        <SearchCategory category="카페" />
        <SearchCategory category="편의점" />
        <SearchCategory category="마트" />
        <SearchCategory category="주유소" />
        {isBrowser && (
          <img
            id="seeMoreImg"
            src={require('../img/AppPage/seeMore.png')}
            alt="seeMore"
          />
        )}
      </ul>
      <div id="aroundMyLocation">강서구 등촌3동 주변 1km</div>
      <ul id="filterContainer">
        <li className="filter">
          <button></button>
        </li>
        <li className="filter">
          <button></button>
        </li>
        <li className="filter">
          <button></button>
        </li>
        <li className="filter">
          <button></button>
        </li>
        <li className="filter">
          <button></button>
        </li>
        <li className="filter">
          <button></button>
        </li>
        <li className="filter">
          <button></button>
        </li>
        <li className="filter">
          <button></button>
        </li>
      </ul>
    </div>
  );
}

export default AppSideMenu;
