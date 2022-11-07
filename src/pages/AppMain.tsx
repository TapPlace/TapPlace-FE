import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AppSideMenu from '../components/appService/AppSideMenu';
import AppVisitAlert from '../components/appService/AppVisitAlert';
import Filter from '../components/appService/Filter';
import NaverMap from '../components/appService/NaverMap';
import StoreSideMenu from '../components/appService/StoreSideMenu';
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
    lastLocation,
    storeDetailFlag,
    choiceCategory,
    searchFlag,
    filterApplyFlag,
    appVisitAlertFlag,
    searchStore,
  } = useAppSelector(state => state.playApp);
  // 네이버 Map 객체 저장
  const [map, setMap]: any = useState();
  const [markers, setMarkers]: any = useState([]);
  let locFlag = true;
  // 네이버 맵 객체 저장
  const setMapFunction = (maps: any) => {
    setMap(maps);
  };
  // 네이버 마커 객체 저장
  const setMarkersFunction = (otherMarkers: any) => {
    setMarkers(otherMarkers);
  };

  // 처음 내 위치 가져오기
  const bringMyLocation = () => {
    // 내 위치 가져오기
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        // console.log(position);
        dispatch(
          SET_MY_LOCATION({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        );
        bringStores();
        if (locFlag) locFlag = false;
      });
    } else {
      window.alert('현재위치를 알수 없습니다.');
      dispatch(
        SET_MY_LOCATION({
          latitude: 37.3586704,
          longitude: 127.105499,
        }),
      );
      bringStores();
      if (locFlag) locFlag = false;
    }
  };
  // 첫 내 위치 반경 가맹점 가져오기
  const bringStores = () => {
    // console.log('store');
    // 내 위치에서 distance 반경 가맹점 가져오기
    if (lastLocation.latitude === undefined) {
      axios
        .post('https://api.tapplace.co.kr/store/around', {
          x1: String(myLocation.longitude),
          y1: String(myLocation.latitude),
          distance: distance,
          pays: pays,
          user_id: '',
        })
        .then(res => {
          const stores = res.data.stores;
          // console.log(stores);
          dispatch(SET_STORE_IN_DISTANCE(stores));
          filteringStores(stores);
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      axios
        .post('https://api.tapplace.co.kr/store/around', {
          x1: String(lastLocation.longitude),
          y1: String(lastLocation.latitude),
          distance: distance,
          pays: pays,
          user_id: '',
        })
        .then(res => {
          const stores = res.data.stores;
          // console.log(stores);
          dispatch(SET_STORE_IN_DISTANCE(stores));
          filteringStores(stores);
        })
        .catch(err => {
          console.error(err);
        });
    }
  };
  // 필터링
  const filteringStores = (_store: any) => {
    // console.log(_store);
    const filterList = document.querySelectorAll('.filter.active');
    // 필터링 조건
    let filStore: any = [];
    let filPay: any = [];
    // 카테고리만 필터링한 가맹점들
    let filteringStore: any = [];
    // 전부 필터링 한 가맹점들
    let filteringPay: any = [];

    // 검색과 필터 둘 다 적용될 경우
    if (filterApplyFlag && searchFlag) {
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
      // 카테고리, 페이 둘 다 없는 경우
      if (filStore.length === 0 && filPay.length === 0) {
        dispatch(SET_FILTER_STORE(searchStore));
      }
      // 카테고리만 있는 경우
      else if (filStore.length !== 0 && filPay.length === 0) {
        searchStore.forEach((store: any) => {
          filStore.forEach((filter: any) => {
            if (store.category_group_name === filter) filteringPay.push(store);
          });
        });
        dispatch(SET_FILTER_STORE(filteringPay));
        filStore = [];
      }
      // 페이만 있는 경우
      else if (filStore.length === 0 && filPay.length !== 0) {
        searchStore.forEach((store: any) => {
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
      else if (filStore.length !== 0 && filPay.length !== 0) {
        searchStore.forEach((store: any) => {
          if (filStore.indexOf(store.category_group_name) !== -1)
            filteringStore.push(store);
        });
        // 필터링 된 배열이 있으면 페이로 한 번 더 필터링
        if (filteringStore !== undefined) {
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
        }
        dispatch(SET_FILTER_STORE(filteringPay));
        filStore = [];
        filPay = [];
      }
    }
    // 필터만 적용될 경우
    else if (filterApplyFlag && searchFlag === false) {
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
        dispatch(SET_FILTER_STORE(_store));
      }
      // 카테고리만 있는 경우
      else if (filStore.length !== 0 && filPay.length === 0) {
        _store.forEach((store: any) => {
          filStore.forEach((filter: any) => {
            if (store.category_group_name === filter) filteringPay.push(store);
          });
        });
        dispatch(SET_FILTER_STORE(filteringPay));
        filStore = [];
      }
      // 페이만 있는 경우
      else if (filStore.length === 0 && filPay.length !== 0) {
        _store.forEach((store: any) => {
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
      else if (filStore.length !== 0 && filPay.length !== 0) {
        _store.forEach((store: any) => {
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
    // 검색만 적용될 경우
    else if (searchFlag && filterApplyFlag === false) {
      dispatch(SET_FILTER_STORE(searchStore));
    }
    // 검색과 필터 둘 다 적용되지 않을 경우
    else {
      dispatch(SET_FILTER_STORE(_store));
    }
  };

  // 처음 위치 가져오고 가맹점 가져오기
  useEffect(() => {
    if (locFlag) {
      bringMyLocation();
    }
  }, [myLocation]);
  // 필터가 클릭되있을 경우
  useEffect(() => {
    bringStores();
  }, [choiceCategory]);
  // 검색 시
  useEffect(() => {
    bringStores();
  }, [searchFlag]);

  return (
    <>
      <main id='mobileMain'>
        <NaverMap
          propFunction={setMapFunction}
          markersFunction={setMarkersFunction}
          pays={pays}
          bringStores={bringStores}
          filteringStores={filteringStores}
        />
      </main>
      <AppSideMenu map={map} markers={markers} />
      <Filter />
      {storeDetailFlag && <StoreSideMenu markers={markers} />}
      {appVisitAlertFlag && <AppVisitAlert />}
    </>
  );
}

export default AppMain;
