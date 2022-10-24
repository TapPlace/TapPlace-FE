import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  SET_DETAIL_FLAG,
  SET_DETAIL_INFO,
  SET_LAST_LOCATION,
  SET_MY_ADDRESS,
  SET_MOBILE_SHOW_SEARCH_FLAG,
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
    searchFlag,
    searchStore,
  } = useAppSelector(state => state.playApp);
  const [naverMap, setNaverMap]: any = useState();
  const [zoom, setZoom] = useState(18);
  const otherMarkers: any = [];
  const [searchCriteriaFlag, setSearchCriteriaFlag] = useState(false);

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
          position: naver.maps.Position.RIGHT_BOTTOM,
          style: naver.maps.ZoomControlStyle.SMALL,
        },
        logoControlOptions: {
          position: naver.maps.Position.RIGHT_BOTTOM,
        },
        mapDataControl: false,
        scaleControl: false,
      });

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
      // map 객체 저장해서 상위 컴포넌트로 보내기
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
        setSearchCriteriaFlag(true);
      });
      naver.maps.Event.addListener(map, 'zoom_changed', function () {
        setZoom(map.getZoom());
      });
      // 지도에 마커 찍기
      displayMarkers(map);
      // distance 반경 원 그리기
      if (lastLocation.latitude !== undefined) {
        const circle = new naver.maps.Circle({
          map: map,
          center: new naver.maps.LatLng(
            lastLocation.latitude,
            lastLocation.longitude,
          ),
          radius: 1000,
          fillColor: 'rgba(78, 119, 251, 0.03)',
          strokeColor: 'rgba(78, 119, 251, 0.5)',
          strokeWeight: 1,
        });
      } else {
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
  }
  // distance 마커 표시
  function displayMarkers(map: any) {
    const category = (item: any, i: any, key: any) => {
      if (item[i].category_group_name === '음식점') {
        const imgSrc = '/img/AppPage/Marker/restaurant.png';
        const bigImgSrc = '/img/AppPage/Marker/restaurant_big.png';
        const category = '음식점';
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            storeInDistance[i].y,
            storeInDistance[i].x,
          ),
          title: key,
          map,
          icon: {
            url: imgSrc,
          },
        });
        otherMarkers.push(marker);
        markerClickEvent({ map, marker, i, imgSrc, bigImgSrc, category });
      }
      if (item[i].category_group_name === '카페') {
        const imgSrc = 'img/AppPage/Marker/cafe.png';
        const bigImgSrc = 'img/AppPage/Marker/cafe_big.png';
        const category = '카페';
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            storeInDistance[i].y,
            storeInDistance[i].x,
          ),
          title: key,
          map,
          icon: {
            url: imgSrc,
          },
        });
        otherMarkers.push(marker);
        markerClickEvent({ map, marker, i, imgSrc, bigImgSrc, category });
      }
      if (item[i].category_group_name === '편의점') {
        const imgSrc = '/img/AppPage/Marker/store.png';
        const bigImgSrc = '/img/AppPage/Marker/store_big.png';
        const category = '편의점';
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            storeInDistance[i].y,
            storeInDistance[i].x,
          ),
          title: key,
          map,
          icon: {
            url: imgSrc,
          },
        });
        otherMarkers.push(marker);
        markerClickEvent({ map, marker, i, imgSrc, bigImgSrc, category });
      }
      if (item[i].category_group_name === '마트') {
        const imgSrc = 'img/AppPage/Marker/mart.png';
        const bigImgSrc = 'img/AppPage/Marker/mart_big.png';
        const category = '마트';
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            storeInDistance[i].y,
            storeInDistance[i].x,
          ),
          map,
          icon: {
            url: imgSrc,
          },
        });
        otherMarkers.push(marker);
        markerClickEvent({ map, marker, i, imgSrc, bigImgSrc, category });
      }
      if (item[i].category_group_name === '주유소') {
        const imgSrc = 'img/AppPage/Marker/gasStation.png';
        const bigImgSrc = 'img/AppPage/Marker/gasStation_big.png';
        const category = '주유소';
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            storeInDistance[i].y,
            storeInDistance[i].x,
          ),
          map,
          icon: {
            url: imgSrc,
          },
        });
        otherMarkers.push(marker);
        markerClickEvent({ map, marker, i, imgSrc, bigImgSrc, category });
      }
      if (item[i].category_group_name === '주차장') {
        const imgSrc = 'img/AppPage/Marker/parking.png';
        const bigImgSrc = 'img/AppPage/Marker/parking.png';
        const category = '주차장';
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            storeInDistance[i].y,
            storeInDistance[i].x,
          ),
          map,
          icon: {
            url: imgSrc,
          },
        });
        otherMarkers.push(marker);
        markerClickEvent({ map, marker, i, imgSrc, bigImgSrc, category });
      }
      if (item[i].category_group_name === '병원') {
        const imgSrc = 'img/AppPage/Marker/hospital.png';
        const bigImgSrc = 'img/AppPage/Marker/hospital_big.png';
        const category = '병원';
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            storeInDistance[i].y,
            storeInDistance[i].x,
          ),
          map,
          icon: {
            url: imgSrc,
          },
        });
        otherMarkers.push(marker);
        markerClickEvent({ map, marker, i, imgSrc, bigImgSrc, category });
      }
      if (item[i].category_group_name === '약국') {
        const imgSrc = 'img/AppPage/Marker/drugstore.png';
        const bigImgSrc = 'img/AppPage/Marker/drugstore_big.png';
        const category = '약국';
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            storeInDistance[i].y,
            storeInDistance[i].x,
          ),
          map,
          icon: {
            url: imgSrc,
          },
        });
        otherMarkers.push(marker);
        markerClickEvent({ map, marker, i, imgSrc, bigImgSrc, category });
      }
      if (item[i].category_group_name === '숙박') {
        const imgSrc = 'img/AppPage/Marker/accommodation.png';
        const bigImgSrc = 'img/AppPage/Marker/accommodation_big.png';
        const category = '숙박';
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            storeInDistance[i].y,
            storeInDistance[i].x,
          ),
          map,
          icon: {
            url: imgSrc,
          },
        });
        otherMarkers.push(marker);
        markerClickEvent({ map, marker, i, imgSrc, bigImgSrc, category });
      }
      if (item[i].category_group_name === '공공기관') {
        const imgSrc = 'img/AppPage/Marker/institutions.png';
        const bigImgSrc = 'img/AppPage/Marker/institutions_big.png';
        const category = '공공기관';
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            storeInDistance[i].y,
            storeInDistance[i].x,
          ),
          map,
          icon: {
            url: imgSrc,
          },
        });
        otherMarkers.push(marker);
        markerClickEvent({ map, marker, i, imgSrc, bigImgSrc, category });
      }
      if (item[i].category_group_name === '기타') {
        const imgSrc = 'img/AppPage/Marker/etc.png';
        const bigImgSrc = 'img/AppPage/Marker/etc_big.png';
        const category = '기타';
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            storeInDistance[i].y,
            storeInDistance[i].x,
          ),
          map,
          icon: {
            url: imgSrc,
          },
        });
        otherMarkers.push(marker);
        markerClickEvent({ map, marker, i, imgSrc, bigImgSrc, category });
      }
    };
    // 반경 내에 가맹점 마커 표시
    if (searchFlag === true) {
      for (let i = 0; i < searchStore.length; i++) {
        let key: string = String(searchStore[i].num);
        category(searchStore, i, key);
      }
    } else if (filterStore.length !== 0) {
      for (let i = 0; i < filterStore.length; i++) {
        let key: string = String(filterStore[i].num);
        category(filterStore, i, key);
      }
    } else {
      for (let i = 0; i < storeInDistance.length; i++) {
        let key: string = String(storeInDistance[i].num);
        category(storeInDistance, i, key);
        const lowMarkerComponent = (otherMarkers: any) => {
          return props.markersFunction(otherMarkers);
        };
        lowMarkerComponent(otherMarkers);
      }
    }
  }
  // 마커 클릭 이벤트
  function markerClickEvent({
    map,
    marker,
    i,
    imgSrc,
    bigImgSrc,
    category,
  }: any) {
    const position = { lat: marker.position.y, lng: marker.position.x };

    const infoWindow = new naver.maps.InfoWindow({
      position: position,
      borderColor: 'none',
      backgroundColor: 'none',
    });

    naver.maps.Event.addListener(marker, 'click', function (e: any) {
      // 브라우저 크기에 맞는 이벤트 핸들러(마커가 맵 중앙에 가게)
      if (window.innerWidth < 1024) {
        const lat = marker.position._lat - 0.0016;
        const lng = marker.position._lng;
        const latlng = new naver.maps.LatLng(lat, lng);
        map.panTo(latlng);
      } else {
        map.panTo(marker.position);
      }
      // 클릭 시 모든 마커 기본 이미지로 변경
      otherMarkers.forEach((marker: any) => {
        if (marker.icon.url.includes('_big')) {
          let src =
            marker.icon.url.substring(0, marker.icon.url.indexOf('_')) + '.png';
          marker.setIcon({
            url: src,
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
      dispatch(SET_DETAIL_INFO(storeInDistance[i]));
      dispatch(SET_MOBILE_SHOW_SEARCH_FLAG(false));
    });
  }

  // 처음 지도 생성 + 마커가 있을 시 지도 생성
  useEffect(() => {
    naverFunction();
  }, [storeInDistance]);
  // // 줌 바뀔 시
  // useEffect(() => {
  //   naverFunction();
  // }, [lastLocation]);
  // 필터링 시
  useEffect(() => {
    naverFunction();
  }, [filterStore]);
  // 검색 시
  useEffect(() => {
    naverFunction();
  }, [searchFlag]);
  // 상세정보 X버튼 누르면 지도를 다시 생성하여 상세정보와 미리보기를 없앰
  // useEffect(() => {
  //   if (!storeDetailFlag) {
  //     naverFunction();
  //   }
  // }, [storeDetailFlag]);

  return (
    <>
      <div id="map" style={{ width: '100%', height: 'calc(100vh - 60px)' }} />
      {searchCriteriaFlag && (
        <>
          <button
            id="searchCriteriaBtn"
            onClick={() => {
              props.bringStores();
              naverFunction();
            }}
          >
            <img src="img/AppPage/reset.png" alt="reset.png" />
            <p>현 위치에서 가맹점 재탐색</p>
          </button>
          <img id="locationPin" src="img/AppPage/pin.png" alt="locationPin" />
        </>
      )}
    </>
  );
}
export default NaverMap;
