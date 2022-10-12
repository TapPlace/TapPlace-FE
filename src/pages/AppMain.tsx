/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AppSideMenu from '../components/appService/AppSideMenu';
import Feedback from '../components/appService/Feedback';
import Filter from '../components/appService/Filter';
import NaverMap from '../components/appService/NaverMap';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  SET_DETAIL_FLAG,
  SET_FILTER_STORE,
  SET_MY_LOCATION,
  SET_SHOW_SEARCH_FLAG,
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
  const {
    myLocation,
    storeInDistance,
    storeDetailFlag,
    storeDetailInfo,
    choiceCnt,
    filterApplyFlag,
  } = useAppSelector(state => state.playApp);
  // 네이버 Map 객체 저장
  const [map, setMap]: any = useState();
  const setMapFunction = (maps: any) => {
    setMap(maps);
  };

  function bringMyLocation() {
    // 내 위치 가져오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        dispatch(
          SET_MY_LOCATION({
            latitude: 37.4938999991414,
            longitude: 127.014383829718,
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

  // 필터가 클릭되있을 경우
  useEffect(() => {
    if (filterApplyFlag === true) {
      const filterList = document.querySelectorAll('.filter.active');
      // 필터링 조건
      let filStore: any = [];
      let filPay: any = [];
      // 카테고리만 필터링한 가맹점들
      let filteringStore: any = [];
      // 전부 필터링 한 가맹점들
      let filteringPay: any = [];

      filterList.forEach(filter => {
        switch (filter.id) {
          case 'store0':
            filStore.push('음식점');
            break;
          case 'store1':
            filStore.push('카페');
            break;
          case 'store2':
            filStore.push('편의점');
            break;
          case 'store3':
            filStore.push('마트');
            break;
          case 'store4':
            filStore.push('주유소');
            break;
          case 'store5':
            filStore.push('주차장');
            break;
          case 'store6':
            filStore.push('병원');
            break;
          case 'store7':
            filStore.push('약국');
            break;
          case 'store8':
            filStore.push('숙박');
            break;
          case 'store9':
            filStore.push('공공기관');
            break;
          case 'pay0':
            filPay.push('kakaopay');
            break;
          case 'pay1':
            filPay.push('naverpay');
            break;
          case 'pay2':
            filPay.push('zeropay');
            break;
          case 'pay3':
            filPay.push('payco');
            break;
          case 'apple0':
            filPay.push('apple_visa');
            break;
          case 'apple1':
            filPay.push('apple_master');
            break;
          case 'apple2':
            filPay.push('apple_jcb');
            break;
        }
      });

      // 둘다 없는 경우
      if (filStore.length === 0 && filPay.length === 0) {
        dispatch(SET_FILTER_STORE(storeInDistance));
      }
      // 카테고리만 있는 경우
      if (filStore.length !== 0 && filPay.length === 0) {
        storeInDistance.forEach(store => {
          filStore.forEach((filter: any) => {
            if (store.category_group_name === filter) filteringPay.push(store);
          });
        });
        dispatch(SET_FILTER_STORE(filteringPay));
        filStore = [];
      }
      // 페이만 있는 경우
      if (filStore.length === 0 && filPay.length !== 0) {
        storeInDistance.forEach((store: any) => {
          for (let i = 0; i < filPay.length; i++) {
            if (store.pays.includes(filPay[i]) === false) {
              i -= 1;
              break;
            }
            if (i === filPay.length - 1) {
              filteringPay.push(store);
            }
          }
        });
        dispatch(SET_FILTER_STORE(filteringPay));
        filPay = [];
      }
      // 카테고리, 페이가 있는 경우
      if (filStore.lenght !== 0 && filPay.length !== 0) {
        storeInDistance.forEach(store => {
          if (filStore.indexOf(store.category_group_name) !== -1)
            filteringStore.push(store);
        });
        filteringStore.forEach((store: any) => {
          for (let i = 0; i < filPay.length; i++) {
            if (store.pays.includes(filPay[i]) === false) {
              i -= 1;
              break;
            }
            if (i === filPay.length - 1) {
              filteringPay.push(store);
            }
          }
        });
        dispatch(SET_FILTER_STORE(filteringPay));
        filStore = [];
        filPay = [];
      }
    }
  }, [choiceCnt]);

  // storeDetailInfo 피드백 변수
  const [feedback, setFeedback]: any = useState();
  // 가맹점 상세보기가 띄워졌을 때 피드백 정보를 가져옴
  useEffect(() => {
    axios
      .post('https://api.tapplace.cloud/pay/list/more', {
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
      <Filter />
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
                    dispatch(SET_SHOW_SEARCH_FLAG(true));
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
