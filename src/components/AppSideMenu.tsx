import React from 'react';
import SearchStore from './SearchStore';

import SearchCategory from './SearchCategory';
import { isBrowser } from 'react-device-detect';
import '../style/components/AppSideMenu.scss';
import StoreArticle from './StoreArticle';

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
      <div id="aroundMyLocation">
        강서구 등촌3동 주변 1km
        <img
          id="vButtonLocation"
          src={require('../img/AppPage/Vbutton.png')}
          alt="vButton"
        />
      </div>
      <ul id="filterContainer">
        <li className="filter">
          <div>
            매장선택
            <img
              className="vButtonFilter"
              src={require('../img/AppPage/Vbutton.png')}
              alt="vButton"
            />
          </div>
        </li>
        <li className="filter">
          <div>
            결제수단
            <img
              className="vButtonFilter"
              src={require('../img/AppPage/Vbutton.png')}
              alt="vButton"
            />
          </div>
        </li>
        <li className="filter">
          <div>음식점</div>
        </li>
        <li className="filter">
          <div>카페</div>
        </li>
        <li className="filter">
          <div>카카오페이</div>
        </li>
        <li className="filter">
          <div>네이버페이</div>
        </li>
        <li className="filter">
          <div>애플페이 - VISA</div>
        </li>
        <li className="filter">
          <div>
            <img
              id="filterSeeMore"
              src={require('../img/AppPage/seeMore.png')}
              alt="seeMore"
            />
          </div>
        </li>
      </ul>
      <section id="storeContainer">
        <StoreArticle />
      </section>
    </div>
  );
}

export default AppSideMenu;
