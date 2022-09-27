import React, { useEffect } from 'react';
import AppSideMenu from '../components/appService/AppSideMenu';
import NaverMap from '../components/appService/NaverMap';
import { useAppSelector } from '../redux/hooks';

import '../style/pages/AppMain.scss';

function AppMain() {
  const { detail } = useAppSelector(state => state.naver);

  return (
    <>
      <main id="mobileMain">
        <NaverMap />
      </main>
      <AppSideMenu />
      {detail ? (
        <>
          <div id="detailContainer">
            <div id="nameCategoryClose">
              <div id="nameCategory">
                <h1 id="detailStoreName">제목</h1>
                <p id="detailStoreCategory">카테고리</p>
              </div>
              <img src="img/close.png" alt="" />
            </div>
            <ul id="detailBtnContainer">
              <li>길찾기</li>
              <li>공유하기</li>
            </ul>
            <div id="distanceAddress"></div>
            <div id="phoneNumber"></div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default AppMain;
