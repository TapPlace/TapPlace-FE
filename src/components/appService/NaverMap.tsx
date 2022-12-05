import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  SET_DETAIL_FLAG,
  SET_DETAIL_INFO,
  SET_LAST_LOCATION,
  SET_MY_ADDRESS,
  SET_MOBILE_SHOW_SEARCH_FLAG,
  SET_SEARCH_CRITERIA_FLAG,
} from '../../redux/slices/PlayApp';
import '../../style/pages/NaverMap.scss';

import restaruant from '../../img/PlayApp/Marker/restaurant.webp';
import restaruant_big from '../../img/PlayApp/Marker/restaurant_big.webp';
import accommodation from '../../img/PlayApp/Marker/accommodation.webp';
import accommodation_big from '../../img/PlayApp/Marker/accommodation_big.webp';
import cafe from '../../img/PlayApp/Marker/cafe.webp';
import cafe_big from '../../img/PlayApp/Marker/cafe_big.webp';
import drutstore from '../../img/PlayApp/Marker/drugstore.webp';
import drutstore_big from '../../img/PlayApp/Marker/drugstore_big.webp';
import etc from '../../img/PlayApp/Marker/etc.webp';
import etc_big from '../../img/PlayApp/Marker/etc_big.webp';
import institutions from '../../img/PlayApp/Marker/institutions.webp';
import institutions_big from '../../img/PlayApp/Marker/institutions_big.webp';
import parking from '../../img/PlayApp/Marker/parking.webp';
import parking_big from '../../img/PlayApp/Marker/parking_big.webp';
import shop from '../../img/PlayApp/Marker/shop.webp';
import shop_big from '../../img/PlayApp/Marker/shop_big.webp';
import store from '../../img/PlayApp/Marker/store.webp';
import store_big from '../../img/PlayApp/Marker/store_big.webp';
import hospital from '../../img/PlayApp/Marker/hospital.webp';
import hospital_big from '../../img/PlayApp/Marker/hospital_big.webp';
import gasStation from '../../img/PlayApp/Marker/gasStation.webp';
import gasStation_big from '../../img/PlayApp/Marker/gasStation_big.webp';

import location_pin from '../../img/PlayApp/ShowScreen/location_pin.webp';
import list_reset from '../../img/PlayApp/ShowScreen/list_reset.webp';

const { naver }: any = window;

const NaverMap = (props: any) => {
  const dispatch = useAppDispatch();

  const {
    myLocation,
    lastLocation,
    storeInDistance,
    storeDetailFlag,
    filterStore,
    searchFlag,
    choiceCategory,
    choiceCnt,
    filterApplyFlag,
    windowSize,
    searchStore,
    searchWord,
    searchCriteriaFlag,
  } = useAppSelector(state => state.playApp);
  const [naverMap, setNaverMap]: any = useState();
  const [zoom, setZoom] = useState(18);
  const otherMarkers: Array<any> = [];
  const [markers, setMarkers]: any = useState();
  const [_circle, _setCircle]: any = useState();

  // 네이버 지도 띄우기
  const renderMap = async () => {
    let latitude, longitude: number;
    if (lastLocation.latitude !== undefined) {
      latitude = lastLocation.latitude;
      longitude = lastLocation.longitude;
    } else {
      latitude = myLocation.latitude;
      longitude = myLocation.longitude;
    }

    const map = await new naver.maps.Map('map', {
      center: new naver.maps.LatLng(latitude, longitude),
      zoom: zoom,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.RIGHT_BOTTOM,
        style: naver.maps.ZoomControlStyle.SMALL,
      },
      logoControlOptions: {
        position: naver.maps.Position.RIGHT_BOTTOM,
      },
      mapDataControl: false,
      scaleControl: false,
    });

    // 맵 저장
    setNaverMap(map);
    // map 객체 저장해서 상위 컴포넌트로 보내기
    const lowComponent = (map: any) => {
      return props.propFunction(map);
    };
    lowComponent(map);

    // 마지막 지도 화면의 중앙 좌표, 줌 단계 구하기
    naver.maps.Event.addListener(map, 'idle', () => {
      dispatch(
        SET_LAST_LOCATION({
          latitude: map.getCenter()._lat,
          longitude: map.getCenter()._lng,
        }),
      );
      dispatch(SET_SEARCH_CRITERIA_FLAG(true));
    });
    naver.maps.Event.addListener(map, 'zoom_changed', () => {
      setZoom(map.getZoom());
    });
    naver.maps.Event.addListener(map, 'scroll', () => {}, { passive: true });
  };
  // 지도 띄우기 제외한 기능
  const naverFunction = async () => {
    if (typeof myLocation !== 'string') {
      // 마커 찍기
      // 검색과 필터 둘 다 적용될 경우
      if (searchFlag && filterApplyFlag) {
        if (filterStore.length !== 0) await displayMarkers(naverMap);
      }
      // 검색만 적용될 경우
      else if (searchFlag && filterApplyFlag === false) {
        await displayMarkers(naverMap);
      }
      // 필터만 적용될 경우
      else if (filterApplyFlag && searchFlag === false) {
        if (filterStore.length !== 0) await displayMarkers(naverMap);
      }
      // 검색과 필터 둘 다 적용되지 않을 경우
      else {
        await displayMarkers(naverMap);
      }

      // 주소 검색
      const searchAddress = (latlng: any) => {
        naver.maps.Service.reverseGeocode(
          {
            coords: latlng,
            orders: [
              naver.maps.Service.OrderType.ADDR,
              naver.maps.Service.OrderType.ROAD_ADDR,
            ].join(','),
          },
          function (status: any, response: any) {
            if (status === naver.maps.Service.Status.ERROR) {
              return console.log('something wrong');
            }
            let myAddress = response.v2.address.jibunAddress;
            const firstSpace = myAddress.indexOf(' ') + 1;
            const secondSpace = myAddress.indexOf(' ', firstSpace);
            myAddress = myAddress.substr(firstSpace, secondSpace);
            dispatch(SET_MY_ADDRESS(myAddress));
          },
        );
      };
      searchAddress(naverMap.center);

      // distance 반경 원 그리기
      if (lastLocation.latitude !== undefined) {
        const circle = new naver.maps.Circle({
          map: naverMap,
          center: new naver.maps.LatLng(
            lastLocation.latitude,
            lastLocation.longitude,
          ),
          radius: 1000,
          fillColor: 'rgba(78, 119, 251, 0.03)',
          strokeColor: 'rgba(78, 119, 251, 0.5)',
          strokeWeight: 1,
        });
        _setCircle(circle);
      } else {
        const circle = new naver.maps.Circle({
          map: naverMap,
          center: new naver.maps.LatLng(
            myLocation.latitude,
            myLocation.longitude,
          ),
          radius: 1000,
          fillColor: 'rgba(78, 119, 251, 0.03)',
          strokeColor: 'rgba(78, 119, 251, 0.5)',
          strokeWeight: 1,
        });
        _setCircle(circle);
      }
    }
  };
  // distance 마커 표시
  function displayMarkers(map: any) {
    const category = (item: any, i: any, key: any) => {
      if (item[i].category_group_name === '음식점') {
        const markerInfo = item[i];
        const imgSrc = restaruant;
        const bigImgSrc = restaruant_big;
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(item[i].y, item[i].x),
          title: key,
          map,
          icon: {
            url: imgSrc,
          },
        });
        otherMarkers.push(marker);
        markerClickEvent({ map, marker, i, imgSrc, bigImgSrc, markerInfo });
      } else if (item[i].category_group_name === '카페') {
        const markerInfo = item[i];
        const imgSrc = cafe;
        const bigImgSrc = cafe_big;
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(item[i].y, item[i].x),
          title: key,
          map,
          icon: {
            url: imgSrc,
          },
        });
        otherMarkers.push(marker);
        markerClickEvent({ map, marker, i, imgSrc, bigImgSrc, markerInfo });
      } else if (item[i].category_group_name === '편의점') {
        const markerInfo = item[i];
        const imgSrc = store;
        const bigImgSrc = store_big;
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(item[i].y, item[i].x),
          title: key,
          map,
          icon: {
            url: imgSrc,
          },
        });
        otherMarkers.push(marker);
        markerClickEvent({ map, marker, i, imgSrc, bigImgSrc, markerInfo });
      } else if (item[i].category_group_name === '마트') {
        const markerInfo = item[i];
        const imgSrc = shop;
        const bigImgSrc = shop_big;
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(item[i].y, item[i].x),
          map,
          icon: {
            url: imgSrc,
          },
        });
        otherMarkers.push(marker);
        markerClickEvent({ map, marker, i, imgSrc, bigImgSrc, markerInfo });
      } else if (item[i].category_group_name === '주유소') {
        const markerInfo = item[i];
        const imgSrc = gasStation;
        const bigImgSrc = gasStation_big;
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(item[i].y, item[i].x),
          map,
          icon: {
            url: imgSrc,
          },
        });
        otherMarkers.push(marker);
        markerClickEvent({ map, marker, i, imgSrc, bigImgSrc, markerInfo });
      } else if (item[i].category_group_name === '주차장') {
        const markerInfo = item[i];
        const imgSrc = parking;
        const bigImgSrc = parking_big;
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(item[i].y, item[i].x),
          map,
          icon: {
            url: imgSrc,
          },
        });
        otherMarkers.push(marker);
        markerClickEvent({ map, marker, i, imgSrc, bigImgSrc, markerInfo });
      } else if (item[i].category_group_name === '병원') {
        const markerInfo = item[i];
        const imgSrc = hospital;
        const bigImgSrc = hospital_big;
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(item[i].y, item[i].x),
          map,
          icon: {
            url: imgSrc,
          },
        });
        otherMarkers.push(marker);
        markerClickEvent({ map, marker, i, imgSrc, bigImgSrc, markerInfo });
      } else if (item[i].category_group_name === '약국') {
        const markerInfo = item[i];
        const imgSrc = drutstore;
        const bigImgSrc = drutstore_big;
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(item[i].y, item[i].x),
          map,
          icon: {
            url: imgSrc,
          },
        });
        otherMarkers.push(marker);
        markerClickEvent({ map, marker, i, imgSrc, bigImgSrc, markerInfo });
      } else if (item[i].category_group_name === '숙박') {
        const markerInfo = item[i];
        const imgSrc = accommodation;
        const bigImgSrc = accommodation_big;
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(item[i].y, item[i].x),
          map,
          icon: {
            url: imgSrc,
          },
        });
        otherMarkers.push(marker);
        markerClickEvent({ map, marker, i, imgSrc, bigImgSrc, markerInfo });
      } else if (item[i].category_group_name === '공공기관') {
        const markerInfo = item[i];
        const imgSrc = institutions;
        const bigImgSrc = institutions_big;
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(item[i].y, item[i].x),
          map,
          icon: {
            url: imgSrc,
          },
        });
        otherMarkers.push(marker);
        markerClickEvent({ map, marker, i, imgSrc, bigImgSrc, markerInfo });
      } else if (item[i].category_group_name === '기타') {
        const markerInfo = item[i];
        const imgSrc = etc;
        const bigImgSrc = etc_big;
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(item[i].y, item[i].x),
          map,
          icon: {
            url: imgSrc,
          },
        });
        otherMarkers.push(marker);
        markerClickEvent({ map, marker, i, imgSrc, bigImgSrc, markerInfo });
      }
    };
    // 마커 상위 컴포넌트로 전달
    const lowMarkerComponent = (otherMarkers: any) => {
      return props.markersFunction(otherMarkers);
    };
    // 반경 내에 가맹점 마커 표시
    // 검색과 필터가 둘 다 적용 될 경우
    if (searchFlag && filterApplyFlag) {
      for (let i = 0; i < filterStore.length; i++) {
        let key: string = String(filterStore[i].num);
        category(filterStore, i, key);
        lowMarkerComponent(otherMarkers);
      }
      // 필터만 적용 될 경우
    } else if (filterApplyFlag && searchFlag === false) {
      for (let i = 0; i < filterStore.length; i++) {
        let key: string = String(filterStore[i].num);
        category(filterStore, i, key);
        lowMarkerComponent(otherMarkers);
      }
      // 검색만 적용 될 경우
    } else if (searchFlag && filterApplyFlag === false) {
      for (let i = 0; i < filterStore.length; i++) {
        let key: string = String(filterStore[i].num);
        category(filterStore, i, key);
        lowMarkerComponent(otherMarkers);
      }
      // 검색과 필터 둘 다 적용되지 않을 경우
    } else {
      for (let i = 0; i < storeInDistance.length; i++) {
        let key: string = String(storeInDistance[i].num);
        category(storeInDistance, i, key);
        lowMarkerComponent(otherMarkers);
      }
    }
    setMarkers(otherMarkers);
  }
  // 마커 클릭 이벤트
  function markerClickEvent({
    map,
    marker,
    imgSrc,
    bigImgSrc,
    markerInfo,
  }: any) {
    naver.maps.Event.addListener(marker, 'click', function () {
      // 브라우저 크기에 맞는 이벤트 핸들러(마커가 맵 중앙에 가게)
      if (window.innerWidth < 1024) {
        let lat;
        if (windowSize.height < 600) {
          lat = marker.position._lat - windowSize.height / 676670;
        } else if (windowSize.height < 700) {
          lat = marker.position._lat - windowSize.height / 676668;
        } else {
          lat = marker.position._lat - windowSize.height / 676666;
        }
        const lng = marker.position._lng;
        const latlng = new naver.maps.LatLng(lat, lng);
        map.setOptions('zoom', 18);
        map.setCenter(latlng);
        dispatch(SET_SEARCH_CRITERIA_FLAG(false));
      } else {
        map.setOptions('zoom', 18);
        map.setCenter(marker.position);
        dispatch(SET_SEARCH_CRITERIA_FLAG(false));
      }
      // 클릭 시 모든 마커 기본 이미지로 변경
      otherMarkers.forEach((marker: any) => {
        if (marker.icon.url.includes('_big')) {
          // let src =
          //   marker.icon.url.substring(0, marker.icon.url.indexOf('_')) +
          //   '.webp';
          marker.setIcon({
            url: imgSrc,
          });
        }
      });
      // 클릭한 마커 큰 이미지로 변경
      marker.setIcon({
        url: bigImgSrc,
      });
      if (!storeDetailFlag) {
        dispatch(SET_DETAIL_FLAG(true));
      }
      dispatch(SET_DETAIL_INFO(markerInfo));
      dispatch(SET_MOBILE_SHOW_SEARCH_FLAG(false));
    });
  }

  // 위치 받아오면 지도 렌더링
  useEffect(() => {
    renderMap();
  }, [myLocation]);

  // 맵, 마커를 표시 (필터링 된, 되지 않은 가맹점 전부 filterStore에 담김)
  useEffect(() => {
    if (_circle !== undefined) {
      _circle.setMap(null);
      markers.forEach((item: any) => {
        item.setMap(null);
      });
    }
    naverFunction();
  }, [filterStore]);

  // 필터 고르면 원,마커 삭제
  useEffect(() => {
    if (_circle !== undefined) {
      _circle.setMap(null);
      markers.forEach((item: any) => {
        item.setMap(null);
      });
    }
  }, [choiceCategory]);

  return (
    <>
      <div
        id='map'
        style={{
          width: '100%',
          height: '100%',
          position: 'fixed',
        }}
      />
      {searchCriteriaFlag && (
        <>
          <button
            id='searchCriteriaBtn'
            onClick={() => {
              if (_circle !== undefined) {
                _circle.setMap(null);
                markers.forEach((item: any) => {
                  item.setMap(null);
                });
              }
              props.bringStores();
              dispatch(SET_SEARCH_CRITERIA_FLAG(false));
            }}
          >
            <img src={list_reset} alt='reset' />
            <p>
              {window.innerWidth > 1023
                ? '현 위치에서 가맹점 재탐색'
                : '위치에서 탐색'}
            </p>
          </button>
          <img id='locationPin' src={location_pin} alt='locationPin' />
        </>
      )}
    </>
  );
};
export default NaverMap;
