import axios from 'axios';
import React, { useEffect } from 'react';
import AppSideMenu from '../components/appService/AppSideMenu';
import NaverMap from '../components/appService/NaverMap';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setMyLocation, setNearbyStore } from '../redux/slices/naverMap';

import '../style/pages/AppMain.scss';

function AppMain() {
  const dispatch = useAppDispatch();
  let distance: number = 1.5;
  const pays = [
    'kakaopay',
    'naverpay',
    'payco',
    'zeropay',
    'apple_visa',
    'apple_master',
    'apple_master',
    'apple_jcb',
    'conless_visa',
    'conless_master',
    'conless_amex',
    'conless_union',
    'conless_jcb',
    'google_visa',
    'google_master',
    'google_maestro',
    'toss',
  ];
  const { detail, myLocation } = useAppSelector(state => state.naver);

  async function bringMyLocation() {
    // 내 위치 가져오기
    if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition(position => {
        dispatch(
          setMyLocation({
            longitude: '127.014383829718',
            latitude: '37.4938999991414',
            // latitude: position.coords.latitude,
            // longitude: position.coords.longitude,
          }),
        );
      });
    } else {
      window.alert('현재위치를 알수 없습니다.');
    }
    // 내 위치에서 distance 반경 가맹점 가져오기
    await axios
      .post('/store/around', {
        x1: '127.014383829781',
        y1: '37.4938999991414',
        distance: distance,
        pays: pays,
        user_id: '',
        // distance: 1,
        // x1: x1,
        // y1: y1,
        // pays: pays,
      })
      .then(res => {
        const stores = res.data.stores;
        dispatch(setNearbyStore(stores));
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    bringMyLocation();
  }, [myLocation]);

  return (
    <>
      <main id="mobileMain">
        <NaverMap />
      </main>
      <AppSideMenu />
      {detail ? (
        <>
          <div id="detailContainer">
            <article id="detailInfo">
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
              <div id="distanceAddress">
                <img src="img/AppPage/location_black.png" alt="location" />
                거리 · 도로명 주소
              </div>
              <div id="phoneNumber">
                <img src="img/AppPage/call.png" alt="call" />
                핸드폰-번호
              </div>
              <hr />
              <div id="infoModified">
                <img src="img/AppPage/pencil.png" alt="pencil" />
                정보 수정 요청
              </div>
            </article>
            <article id="paymentMethod">
              <h4>결제수단</h4>
            </article>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default AppMain;
