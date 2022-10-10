import React, { useEffect } from 'react';

import SearchStore from './SearchStore';
import StoreArticle from '../introService/StoreArticle';

import '../../style/components/appService/AppSideMenu.scss';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  SET_CHOICE_CNT,
  SET_FILTER_SHOW_FLAG,
} from '../../redux/slices/PlayApp';

function AppSideMenu(map: any) {
  const dispatch = useAppDispatch();
  const { storeInDistance, myAddress, choiceCnt, filterShowFlag, filterStore } =
    useAppSelector(state => state.playApp);

  const filterList = document.querySelectorAll('.filter.active');

  return (
    <div id="appSideMenu" className={filterShowFlag ? 'noShowSide' : undefined}>
      <SearchStore />
      <div id="aroundMyLocation">{myAddress} 주변 1km</div>
      <ul id="filterTypeContainer">
        <li className="filterType">
          {choiceCnt.storeCnt === 0 ? (
            <div>
              <p
                onClick={() => {
                  dispatch(SET_FILTER_SHOW_FLAG(true));
                }}
              >
                매장선택
              </p>
              <img
                className="vButtonFilter"
                src="img/AppPage/Vbutton.png"
                alt="vButton"
              />
            </div>
          ) : (
            <div className="choiceFilter">
              <p
                onClick={() => {
                  dispatch(SET_FILTER_SHOW_FLAG(true));
                }}
              >
                {'매장선택 ' + choiceCnt.storeCnt}
              </p>
              <img
                className="resetFilter"
                src="img/closeBlue.png"
                alt="close"
                onClick={() => {
                  filterList.forEach(list => {
                    if (list.id.includes('store')) {
                      list.className = 'filter';
                    }
                  });
                  dispatch(
                    SET_CHOICE_CNT({ storeCnt: 0, payCnt: choiceCnt.payCnt }),
                  );
                }}
              />
            </div>
          )}
        </li>
        <li className="filterType">
          {choiceCnt.payCnt === 0 ? (
            <div>
              <p
                onClick={() => {
                  dispatch(SET_FILTER_SHOW_FLAG(true));
                }}
              >
                결제수단
              </p>
              <img
                className="vButtonFilter"
                src="img/AppPage/Vbutton.png"
                alt="vButton"
              />
            </div>
          ) : (
            <div className="choiceFilter">
              <p
                onClick={() => {
                  dispatch(SET_FILTER_SHOW_FLAG(true));
                }}
              >
                {'결제수단 ' + choiceCnt.payCnt}
              </p>
              <img
                className="resetFilter"
                src="img/closeBlue.png"
                alt="close"
                onClick={() => {
                  filterList.forEach(list => {
                    if (!list.id.includes('store')) {
                      list.className = 'filter';
                    }
                  });
                  dispatch(
                    SET_CHOICE_CNT({ storeCnt: choiceCnt.storeCnt, payCnt: 0 }),
                  );
                }}
              />
            </div>
          )}
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
