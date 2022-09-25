import axios from 'axios';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setMyLocation } from '../../redux/slices/naverMap';

import '../../style/pages/NaverMap.scss';

const { naver } = window;

function NaverMap() {
  const dispatch = useAppDispatch();
  const { myLocation } = useAppSelector(state => state.naver);

  function onClick() {
    alert('click');
  }

  // 가맹점 찾기 변수들
  let x1: String = String(myLocation.latitude);
  let y1: String = String(myLocation.longitude);
  let markers: any = [];
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

  // 현재 위치 가져오고 distance 반경에 있는 가맹점 찾기
  async function naverFunction() {
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
    // 내 위치에서 distance 반경에 있는 가맹점 찾기
    await axios
      .post('/store/around', {
        x1: '127.014383829781',
        y1: '37.4938999991414',
        pays: ['apple_master'],
        // distance: 1,
        // x1: x1,
        // y1: y1,
        distance: distance,
        // pays: pays,
      })
      .then(res => {
        const stores = res.data.stores;
        for (let i = 0; i < stores.length; i++) {
          markers.push(stores[i]);
        }
      })
      .catch(err => console.error(err));

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

      // 내 위치 마커 찍기
      const currentMarker = await new naver.maps.Marker({
        position: new naver.maps.LatLng(
          myLocation.latitude,
          myLocation.longitude,
        ),
        map,
        // icon: {
        //   size: new naver.maps.Size(50, 52),
        //   origin: new naver.maps.Point(0, 0),
        //   anchor: new naver.maps.Point(25, 26),
        // },
      });
      naver.maps.Event.addListener(currentMarker, 'click', function () {});

      // 반경 내에 가맹점 마커 표시
      for (let i = 0; i < markers.length; i++) {
        // console.log(markers[i]);
        if (markers[i].category_group_name === '음식점') {
          const otherMarkers = new naver.maps.Marker({
            position: new naver.maps.LatLng(markers[i].y, markers[i].x),
            map,
            icon: {
              content:
                '<div style="text-align: center;"><img src="/img/AppPage/Marker/restaurant.png" alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">음식점</p></div>',
              anchor: new naver.maps.Point(18, 30),
            },
          });

          const markerContent = [
            '<div className="markerContent">',
            ` <h4>${markers[i].place_name}</h3>`,
            ` <p>${markers[i].category_group_name}</p>`,
            '</div>',
          ].join('');
          const infoWindow = new naver.maps.InfoWindow({
            content: markerContent,
          });
          naver.maps.Event.addListener(otherMarkers, 'click', function (e) {
            if (infoWindow.getMap()) {
              otherMarkers.setIcon('/img/AppPage/Marker/restaurant_big.png');
              infoWindow.close();
            } else {
              infoWindow.open(map, otherMarkers);
            }
          });
          // infoWindow.open(map, otherMarkers);
        }
        if (markers[i].category_group_name === '편의점') {
          const otherMarkers = new naver.maps.Marker({
            position: new naver.maps.LatLng(markers[i].y, markers[i].x),
            map,
            icon: {
              content:
                '<div style="text-align: center;"><img src="/img/AppPage/Marker/store.png" alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">편의점</p></div>',
              // anchor: new naver.maps.Point(32, 30),
            },
          });
          const markerContent = [
            '<div class="markerContent">',
            ` <h4>${markers[i].place_name}</h3>`,
            ` <p>${markers[i].category_group_name}</p>`,
            // ' <div></div>',
            '</div>',
          ].join('');
          const infoWindow = new naver.maps.InfoWindow({
            content: markerContent,
          });
          naver.maps.Event.addListener(otherMarkers, 'click', function (e) {
            if (infoWindow.getMap()) {
              infoWindow.close();
            } else {
              infoWindow.open(map, otherMarkers);
            }
          });
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

      // 마커 클릭 이벤트
      // const infoWindow = new naver.maps.InfoWindow({
      //   content: markerContent
      // })

      // 마커 클릭 이벤트 설정
      for (let i = 0; i < markers.length; i++) {
        // naver.maps.Event.addListener()
      }
    }
  }

  useEffect(() => {
    naverFunction();
  }, [myLocation]);

  return (
    <div id="map" style={{ width: '100%', height: 'calc(100vh - 60px)' }} />
  );
}
export default NaverMap;
