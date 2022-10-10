import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  SET_DETAIL_FLAG,
  SET_DETAIL_INFO,
  SET_LAST_LOCATION,
  SET_MY_ADDRESS,
} from '../../redux/slices/PlayApp';
import '../../style/pages/NaverMap.scss';

const { naver }: any = window;

function NaverMap(props: any) {
  const dispatch = useAppDispatch();
  const {
    myLocation,
    lastLocation,
    storeInDistance,
    storeDetailFlag,
    filterStore,
  } = useAppSelector(state => state.playApp);
  const [naverMap, setNaverMap]: any = useState();
  const [zoom, setZoom] = useState(17);

  // 네이버 지도 띄우기
  async function naverFunction() {
    if (typeof myLocation !== 'string') {
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
          position: naver.maps.Position.TOP_RIGHT,
        },
        scaleControl: false,
      });

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
            let myAddress = response.v2.address.jibunAddress;
            myAddress = myAddress.substr(
              myAddress.indexOf(' ') + 1,
              myAddress.length - myAddress.lastIndexOf(' ') + 1,
            );
            dispatch(SET_MY_ADDRESS(myAddress));
          },
        );
      };
      await searchAddress(map.center);

      // 맵 저장
      setNaverMap(map);
      // map 객체 저장해서 하위 컴포넌트로 보내기
      const lowComponent = (map: any) => {
        return props.propFunction(map);
      };
      lowComponent(map);
      // 마지막 지도 화면의 중앙 좌표, 줌 단계 구하기
      naver.maps.Event.addListener(map, 'dragend', function () {
        dispatch(
          SET_LAST_LOCATION({
            latitude: map.getCenter()._lat,
            longitude: map.getCenter()._lng,
          }),
        );
      });
      naver.maps.Event.addListener(map, 'zoom_changed', function () {
        setZoom(map.getZoom());
      });
      displayMarkers(map);
      // distance 반경 원 그리기
      const circle = new naver.maps.Circle({
        map: map,
        center: new naver.maps.LatLng(
          myLocation.latitude,
          myLocation.longitude,
        ),
        radius: 1000,
        fillColor: 'rgba(78, 119, 251, 0.03)',
        strokeColor: 'rgba(78, 119, 251, 0.5)',
        strokeWeight: 1,
      });
    }
  }
  // distance 마커 표시
  function displayMarkers(map: any) {
    // 반경 내에 가맹점 마커 표시
    if (filterStore.length === 0) {
      for (let i = 0; i < storeInDistance.length; i++) {
        let key: string = String(storeInDistance[i].num);
        if (storeInDistance[i].category_group_name === '음식점') {
          const imgSrc = '/img/AppPage/restaurant.png';
          const category = '음식점';
          const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(
              storeInDistance[i].y,
              storeInDistance[i].x,
            ),
            title: key,
            map,
            icon: {
              content:
                '<div style="text-align: center;"><img src="/img/AppPage/Marker/restaurant.png"; alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">음식점</p></div>',
              // anchor: new naver.maps.Point(18, 30),
            },
          });
          markerClickEvent({ map, marker, i, imgSrc, category });
        }
        if (storeInDistance[i].category_group_name === '편의점') {
          const imgSrc = '/img/AppPage/store.png';
          const category = '편의점';
          const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(
              storeInDistance[i].y,
              storeInDistance[i].x,
            ),
            title: key,
            map,
            icon: {
              content:
                '<div style="text-align: center;"><img src="/img/AppPage/Marker/convenienceStore.png"; alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">편의점</p></div>',
              // anchor: new naver.maps.Point(32, 30),
            },
          });
          markerClickEvent({ map, marker, i, imgSrc, category });
        }
        if (storeInDistance[i].category_group_name === '카페') {
          const imgSrc = 'img/AppPage/cafe.png';
          const category = '카페';
          const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(
              storeInDistance[i].y,
              storeInDistance[i].x,
            ),
            title: key,
            map,
            icon: {
              content:
                '<div style="text-align: center;"><img src="/img/AppPage/Marker/cafe.png" alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">카페</p></div>',
            },
          });
          markerClickEvent({ map, marker, i, imgSrc, category });
        }
        if (storeInDistance[i].category_group_name === '마트') {
          const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(
              storeInDistance[i].y,
              storeInDistance[i].x,
            ),
            map,
            icon: {
              content:
                '<div style="text-align: center;"><img src="/img/AppPage/Marker/mart.png" alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">마트</p></div>',
            },
          });
        }
        if (storeInDistance[i].category_group_name === '병원') {
          const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(
              storeInDistance[i].y,
              storeInDistance[i].x,
            ),
            map,
            icon: {
              content:
                '<div style="text-align: center;"><img src="/img/AppPage/Marker/hospital.png" alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">병원</p></div>',
            },
          });
        }
        if (storeInDistance[i].category_group_name === '주유소') {
          const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(
              storeInDistance[i].y,
              storeInDistance[i].x,
            ),
            map,
            icon: {
              content:
                '<div style="text-align: center;"><img src="/img/AppPage/Marker/gasStation.png" alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">주유소</p></div>',
            },
          });
        }
      }
    } else {
      for (let i = 0; i < filterStore.length; i++) {
        let key: string = String(filterStore[i].num);
        if (filterStore[i].category_group_name === '음식점') {
          const imgSrc = '/img/AppPage/restaurant.png';
          const category = '음식점';
          const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(filterStore[i].y, filterStore[i].x),
            title: key,
            map,
            icon: {
              content:
                '<div style="text-align: center;"><img src="/img/AppPage/Marker/restaurant.png"; alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">음식점</p></div>',
              // anchor: new naver.maps.Point(18, 30),
            },
          });
          markerClickEvent({ map, marker, i, imgSrc, category });
        }
        if (filterStore[i].category_group_name === '편의점') {
          const imgSrc = '/img/AppPage/store.png';
          const category = '편의점';
          const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(filterStore[i].y, filterStore[i].x),
            title: key,
            map,
            icon: {
              content:
                '<div style="text-align: center;"><img src="/img/AppPage/Marker/convenienceStore.png"; alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">편의점</p></div>',
              // anchor: new naver.maps.Point(32, 30),
            },
          });
          markerClickEvent({ map, marker, i, imgSrc, category });
        }
        if (filterStore[i].category_group_name === '카페') {
          const imgSrc = 'img/AppPage/cafe.png';
          const category = '카페';
          const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(filterStore[i].y, filterStore[i].x),
            title: key,
            map,
            icon: {
              content:
                '<div style="text-align: center;"><img src="/img/AppPage/Marker/cafe.png" alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">카페</p></div>',
            },
          });
          markerClickEvent({ map, marker, i, imgSrc, category });
        }
        if (filterStore[i].category_group_name === '마트') {
          const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(filterStore[i].y, filterStore[i].x),
            map,
            icon: {
              content:
                '<div style="text-align: center;"><img src="/img/AppPage/Marker/mart.png" alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">마트</p></div>',
            },
          });
        }
        if (filterStore[i].category_group_name === '병원') {
          const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(filterStore[i].y, filterStore[i].x),
            map,
            icon: {
              content:
                '<div style="text-align: center;"><img src="/img/AppPage/Marker/hospital.png" alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">병원</p></div>',
            },
          });
        }
        if (filterStore[i].category_group_name === '주유소') {
          const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(filterStore[i].y, filterStore[i].x),
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
  // 마커 클릭 이벤트
  function markerClickEvent({ map, marker, i, imgSrc, category }: any) {
    const markerContent = [
      `<div style="display: flex; align-items: ${
        category === '음식점'
          ? 'center'
          : category === '편의점'
          ? 'baseline'
          : 'center'
      }; padding: 10px 20px;">`,
      ` <img style="padding-right: 8px; height: ${
        category === '음식점' ? '15px' : category === '편의점' ? '14px' : '15px'
      };" src=${imgSrc} alt="markerImg" />`,
      ` <p style="font-size: 16px;">${storeInDistance[i].place_name}</p>`,
      '</div>',
    ].join('');
    const infoWindow = new naver.maps.InfoWindow({
      content: markerContent,
    });
    naver.maps.Event.addListener(marker, 'click', function () {
      if (infoWindow.getMap()) {
        infoWindow.close();
        dispatch(SET_DETAIL_FLAG(false));
      } else {
        infoWindow.open(map, marker);
        if (!storeDetailFlag) {
          dispatch(SET_DETAIL_FLAG(true));
        }
        dispatch(SET_DETAIL_INFO(storeInDistance[i]));
      }
    });
  }

  // 처음 지도 생성 + 마커가 있을 시 지도 생성
  useEffect(() => {
    naverFunction();
  }, [storeInDistance]);
  // 필터링 시
  useEffect(() => {
    naverFunction();
  }, [filterStore]);
  // 상세정보 X버튼 누르면 지도를 다시 생성하여 상세정보와 미리보기를 없앰
  useEffect(() => {
    if (!storeDetailFlag) {
      naverFunction();
    }
  }, [storeDetailFlag]);

  return (
    <div id="map" style={{ width: '100%', height: 'calc(100vh - 60px)' }} />
  );
}
export default NaverMap;
