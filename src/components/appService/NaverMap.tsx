import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  setDetail,
  setDetailFlag,
  setLastLocation,
} from '../../redux/slices/naverMap';
import '../../style/pages/NaverMap.scss';

const { naver } = window;

function NaverMap(props: any) {
  const dispatch = useAppDispatch();
  const { myLocation, lastLocation, markers, detailFlag } = useAppSelector(
    state => state.naver,
  );

  // 네이버 지도 띄우기
  async function naverFunction() {
    if (typeof myLocation !== 'string') {
      let y = myLocation.latitude;
      let x = myLocation.longitude;
      if (lastLocation.x !== undefined) {
        x = lastLocation.x;
        y = lastLocation.y;
      }
      const map = await new naver.maps.Map('map', {
        center: new naver.maps.LatLng(
          // myLocation.latitude,
          // myLocation.longitude,
          y,
          x,
        ),
        zoom: 16,
        zoomControl: false,
      });
      // map 객체 저장해서 하위 컴포넌트로 보내기
      const lowComponent = (map: any) => {
        return props.propFunction(map);
      };
      lowComponent(map);
      // 마지막 지도 화면의 중앙 좌표 구하기
      naver.maps.Event.addListener(map, 'dragend', function () {
        dispatch(
          setLastLocation({
            x: map.getCenter().x,
            y: map.getCenter().y,
          }),
        );
      });
      await displayMarkers(map);
      // distance 반경 원 그리기
      const circle = await new naver.maps.Circle({
        map: map,
        center: new naver.maps.LatLng(
          myLocation.latitude,
          myLocation.longitude,
        ),
        radius: 1500,
        fillColor: 'rgba(78, 119, 251, 0.03)',
        strokeColor: 'rgba(78, 119, 251, 0.5)',
        strokeWeight: 1.5,
      });
    }
  }
  // distance 마커 표시
  function displayMarkers(map: any) {
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
        const imgSrc = 'img/AppPage/cafe.png';
        const category = '카페';
        const otherMarkers = new naver.maps.Marker({
          position: new naver.maps.LatLng(markers[i].y, markers[i].x),
          map,
          icon: {
            content:
              '<div style="text-align: center;"><img src="/img/AppPage/Marker/cafe.png" alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">카페</p></div>',
          },
        });
        markerClickEvent({ map, otherMarkers, i, imgSrc, category });
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
  // 마커 클릭 이벤트
  function markerClickEvent({ map, otherMarkers, i, imgSrc, category }: any) {
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
      ` <p style="font-size: 16px;">${markers[i].place_name}</p>`,
      '</div>',
    ].join('');
    const infoWindow = new naver.maps.InfoWindow({
      content: markerContent,
    });
    naver.maps.Event.addListener(otherMarkers, 'click', function (e) {
      if (infoWindow.getMap()) {
        infoWindow.close();
        dispatch(setDetailFlag(false));
      } else {
        infoWindow.open(map, otherMarkers);
        dispatch(setDetailFlag(true));
        dispatch(setDetail(markers[i]));
      }
    });
  }

  // 처음 지도 생성 + 마커가 있을 시 지도 생성
  useEffect(() => {
    naverFunction();
  }, [markers]);
  // 상세정보 X버튼 누르면 지도를 다시 생성하여 상세정보와 미리보기를 없앰
  useEffect(() => {
    if (!detailFlag) {
      naverFunction();
    }
  }, [detailFlag]);

  return (
    <div id="map" style={{ width: '100%', height: 'calc(100vh - 60px)' }} />
  );
}
export default NaverMap;
