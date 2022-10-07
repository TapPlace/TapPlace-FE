import React from 'react';

import SearchStore from './SearchStore';
import StoreArticle from '../introService/StoreArticle';
import SearchCategory from './SearchCategory';

import '../../style/components/appService/AppSideMenu.scss';

import { isBrowser } from 'react-device-detect';
import { useAppSelector } from '../../redux/hooks';

function AppSideMenu(map: any) {
  const { storeInDistance } = useAppSelector(state => state.playApp);

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
          <img id="seeMoreImg" src="img/AppPage/seeMore.png" alt="seeMore" />
        )}
      </ul>
      <div id="aroundMyLocation">강서구 등촌3동 주변 1km</div>
      <ul id="filterContainer">
        <li className="filter">
          <div>
            매장선택
            <img
              className="vButtonFilter"
              src="img/AppPage/Vbutton.png"
              alt="vButton"
            />
          </div>
        </li>
        <li className="filter">
          <div>
            결제수단
            <img
              className="vButtonFilter"
              src="img/AppPage/Vbutton.png"
              alt="vButton"
            />
          </div>
        </li>
      </ul>
      <section id="storeContainer">
        {storeInDistance.map(m => {
          return <StoreArticle key={m.store_id} option={m} map={map} />;
        })}
      </section>
    </div>
  );
}

export default AppSideMenu;
