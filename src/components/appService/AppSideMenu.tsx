import React, { useState } from 'react';

import SearchStore from './SearchStore';
import StoreArticle from '../introService/StoreArticle';

import '../../style/components/appService/AppSideMenu.scss';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { SET_FILTER_SHOW_FLAG } from '../../redux/slices/PlayApp';

function AppSideMenu(map: any) {
  const dispatch = useAppDispatch();
  const { storeInDistance, myAddress, filterShowFlag, filterStore } =
    useAppSelector(state => state.playApp);

  return (
    <div id="appSideMenu" className={filterShowFlag ? 'noShowSide' : undefined}>
      <SearchStore />
      <div id="aroundMyLocation">{myAddress} 주변 1km</div>
      <ul id="filterTypeContainer">
        <li
          className="filterType"
          onClick={() => {
            dispatch(SET_FILTER_SHOW_FLAG(true));
          }}
        >
          <div>
            매장선택
            <img
              className="vButtonFilter"
              src="img/AppPage/Vbutton.png"
              alt="vButton"
            />
          </div>
        </li>
        <li
          className="filterType"
          onClick={() => {
            dispatch(SET_FILTER_SHOW_FLAG(true));
          }}
        >
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
        {filterStore.length === 0
          ? storeInDistance.map(m => {
              return <StoreArticle key={m.store_id} option={m} map={map} />;
            })
          : filterStore.map(m => {
              return <StoreArticle key={m.store_id} option={m} map={map} />;
            })}
      </section>
    </div>
  );
}

export default AppSideMenu;
