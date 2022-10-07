/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AppSideMenu from '../components/appService/AppSideMenu';
import Feedback from '../components/appService/Feedback';
import NaverMap from '../components/appService/NaverMap';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  SET_DETAIL_FLAG,
  SET_MY_LOCATION,
  SET_STORE_IN_DISTANCE,
} from '../redux/slices/PlayApp';

import '../style/pages/AppMain.scss';

function AppMain() {
  const dispatch = useAppDispatch();
  let distance: number = 1;
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
  const { myLocation, storeDetailFlag, storeDetailInfo } = useAppSelector(
    state => state.playApp,
  );
  // 네이버 Map 객체 저장
  const [map, setMap] = useState();
  const setMapFunction = (maps: any) => {
    setMap(maps);
  };

  function bringMyLocation() {
    // 내 위치 가져오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        dispatch(
          SET_MY_LOCATION({
            longitude: 127.014383829718,
            latitude: 37.4938999991414,
            // latitude: position.coords.latitude,
            // longitude: position.coords.longitude,
          }),
        );
      });
    } else {
      window.alert('현재위치를 알수 없습니다.');
    }
    // 내 위치에서 distance 반경 가맹점 가져오기
    axios
      .post('https://api.tapplace.cloud/store/around', {
        x1: '127.014383829781',
        y1: '37.4938999991414',
        distance: distance,
        pays: pays,
        user_id: '',
      })
      .then(res => {
        const stores = res.data.stores;
        dispatch(SET_STORE_IN_DISTANCE(stores));
      })
      .catch(err => console.error(err));
  }

  // 내 위치 가져오기
  useEffect(() => {
    bringMyLocation();
  }, [myLocation]);

  // storeDetailInfo 피드백 변수
  const [feedback, setFeedback]: any = useState();
  // 가맹점 상세보기가 띄워졌을 때 피드백 정보를 가져옴
  useEffect(() => {
    axios
      .post('https://api.tapplace.cloud//pay/list/more', {
        store_id: storeDetailInfo.store_id,
        pays: storeDetailInfo.pays,
      })
      .then(res => {
        const data = res.data.feedback;
        setFeedback(data);
      });
  }, [storeDetailInfo.store_id]);

  return (
    <>
      <main id="mobileMain">
        <NaverMap propFunction={setMapFunction} />
      </main>
      <AppSideMenu map={map} />
      {storeDetailFlag && (
        <>
          <div id="detailContainer">
            <article id="detailInfo">
              <div id="nameCategoryClose">
                <div id="nameCategory">
                  <h1 id="detailStoreName">{storeDetailInfo.place_name}</h1>
                  <p id="detailStoreCategory">
                    {storeDetailInfo.category_group_name}
                  </p>
                </div>
                <img
                  src="img/close.png"
                  alt="closeDetail"
                  onClick={() => {
                    dispatch(SET_DETAIL_FLAG(false));
                  }}
                />
              </div>
              <ul id="detailBtnContainer">
                <li>
                  <img
                    id="naviImg"
                    src="img/AppPage/navigation.png"
                    alt="navi"
                  />
                  <p>길찾기</p>
                </li>
                <li>
                  <img id="shareImg" src="img/AppPage/share.png" alt="share" />
                  <p>공유하기</p>
                </li>
              </ul>
              <div id="distanceAddress">
                <img src="img/AppPage/location_black.png" alt="location" />
                {storeDetailInfo.road_address_name
                  ? storeDetailInfo.road_address_name
                  : storeDetailInfo.address_name}
              </div>
              <div id="phoneNumber">
                <img src="img/AppPage/call.png" alt="call" />
                {storeDetailInfo.phone
                  ? storeDetailInfo.phone
                  : '가맹점의 번호가 등록되어있지 않습니다'}
              </div>
              <hr />
              <div id="infoModified">
                <img src="img/AppPage/pencil.png" alt="pencil" />
                정보 수정 요청
              </div>
            </article>
            <article id="paymentMethod">
              <h4>결제수단</h4>
              {feedback !== undefined &&
                feedback.map((e: any) => {
                  return <Feedback key={e.num} options={e} />;
                })}
            </article>
            <button id="goApp">앱에서 사용 여부 피드백하기 &gt;</button>
          </div>
        </>
      )}
    </>
  );
}

export default AppMain;
