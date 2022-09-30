import axios from 'axios';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setDetail } from '../../redux/slices/naverMap';

import '../../style/pages/NaverMap.scss';

const { naver } = window;

function NaverMap() {
  const dispatch = useAppDispatch();
  const { myLocation, markers } = useAppSelector(state => state.naver);

  // 마커 클릭 이벤트
  function markerClickEvent({ map, otherMarkers, i, imgSrc, category }: any) {
    const markerContent = [
      `<div style="display: flex; align-items: ${
        category === '음식점' ? 'center' : category === '편의점' && 'baseline'
      }; padding: 10px 20px;">`,
      ` <img style="padding-right: 8px; height: ${
        category === '음식점' ? '15px' : category === '편의점' && '14px'
      };" src=${imgSrc} alt="markerImg" />`,
      ` <p style="font-size: 16px;">${markers[i].place_name}</p>`,
      '</div>',
    ].join('');
    const infoWindow = new naver.maps.InfoWindow({
      content: markerContent,
    });
    naver.maps.Event.addListener(otherMarkers, 'click', function (e) {
      if (infoWindow.getMap()) {
        infoWindow.close();
        dispatch(setDetail(false));
      } else {
        infoWindow.open(map, otherMarkers);
        dispatch(setDetail(true));
      }
    });
  }

  async function naverFunction() {
    // 네이버 지도 띄우기
    if (typeof myLocation !== 'string') {
      const map = await new naver.maps.Map('map', {
        center: new naver.maps.LatLng(
          // myLocation.latitude,
          // myLocation.longitude,
          37.4938999991414,
          127.014383829718,
        ),
        zoom: 16,
        zoomControl: false,
      });

      // 반경 내에 가맹점 마커 표시
      for (let i = 0; i < markers.length; i++) {
        if (markers[i].category_group_name === '음식점') {
          const imgSrc = '/img/AppPage/restaurant.png';
          const category = '음식점';
          const otherMarkers = new naver.maps.Marker({
            position: new naver.maps.LatLng(markers[i].y, markers[i].x),
            map,
            icon: {
              content:
                '<div style="text-align: center;"><img src="/img/AppPage/Marker/restaurant.png"; alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">음식점</p></div>',
              anchor: new naver.maps.Point(18, 30),
            },
          });
          markerClickEvent({ map, otherMarkers, i, imgSrc, category });
        }
        if (markers[i].category_group_name === '편의점') {
          const imgSrc = '/img/AppPage/store.png';
          const category = '편의점';
          const otherMarkers = new naver.maps.Marker({
            position: new naver.maps.LatLng(markers[i].y, markers[i].x),
            map,
            icon: {
              content:
                '<div style="text-align: center;"><img src="/img/AppPage/Marker/convenienceStore.png"; alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">편의점</p></div>',
              // anchor: new naver.maps.Point(32, 30),
            },
          });
          markerClickEvent({ map, otherMarkers, i, imgSrc, category });
        }
        if (markers[i].category_group_name === '카페') {
          const otherMarkers = new naver.maps.Marker({
            position: new naver.maps.LatLng(markers[i].y, markers[i].x),
            map,
            icon: {
              content:
                '<div style="text-align: center;"><img src="/img/AppPage/Marker/cafe.png" alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">편의점</p></div>',
            },
          });
        }
        if (markers[i].category_group_name === '마트') {
          const otherMarkers = new naver.maps.Marker({
            position: new naver.maps.LatLng(markers[i].y, markers[i].x),
            map,
            icon: {
              content:
                '<div style="text-align: center;"><img src="/img/AppPage/Marker/mart.png" alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">마트</p></div>',
            },
          });
        }
        if (markers[i].category_group_name === '병원') {
          const otherMarkers = new naver.maps.Marker({
            position: new naver.maps.LatLng(markers[i].y, markers[i].x),
            map,
            icon: {
              content:
                '<div style="text-align: center;"><img src="/img/AppPage/Marker/hospital.png" alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">병원</p></div>',
            },
          });
        }
        if (markers[i].category_group_name === '주유소') {
          const otherMarkers = new naver.maps.Marker({
            position: new naver.maps.LatLng(markers[i].y, markers[i].x),
            map,
            icon: {
              content:
                '<div style="text-align: center;"><img src="/img/AppPage/Marker/gasStation.png" alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">주유소</p></div>',
            },
          });
        }
      }
    }
  }

  useEffect(() => {
    naverFunction();
  }, [markers]);

  return (
    <div id="map" style={{ width: '100%', height: 'calc(100vh - 60px)' }} />
  );
}
export default NaverMap;
