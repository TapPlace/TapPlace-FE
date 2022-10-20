import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AppSideMenu from '../components/appService/AppSideMenu';
import AppVisitAlert from '../components/appService/AppVisitAlert';
import Filter from '../components/appService/Filter';
import NaverMap from '../components/appService/NaverMap';
import StoreDetail from '../components/appService/StoreDetail';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  SET_FILTER_STORE,
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
    choiceCnt,
    filterApplyFlag,
    appVisitAlertFlag,
  } = useAppSelector(state => state.playApp);
  // 네이버 Map 객체 저장
  const [map, setMap]: any = useState();
  const [markers, setMarkers]: any = useState([]);

  const setMapFunction = (maps: any) => {
    setMap(maps);
  };

  const setMarkersFunction = (otherMarkers: any) => {
    setMarkers(otherMarkers);
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

  return (
    <>
      <main id="mobileMain">
        <NaverMap
          propFunction={setMapFunction}
          markersFunction={setMarkersFunction}
        />
      </main>
      <AppSideMenu map={map} markers={markers} />
      <Filter />
      {storeDetailFlag && <StoreDetail />}
      {appVisitAlertFlag && <AppVisitAlert />}
    </>
  );
}

export default AppMain;
