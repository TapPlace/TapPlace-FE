import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setMyLocation } from '../../redux/slices/naverMap';

const { naver } = window;

function NaverMap() {
  const dispatch = useAppDispatch();
  const { myLocation } = useAppSelector(state => state.naver);

  // 현재 위치 가져오기
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        dispatch(
          setMyLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        );
      });
    } else {
      window.alert('현재위치를 알수 없습니다.');
    }
  }, [myLocation]);
  // 네이버 맵 띄우기
  useEffect(() => {
    if (typeof myLocation !== 'string') {
      const currentPosition = [myLocation.latitude, myLocation.longitude];
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoom: 18,
        zoomControl: false,
      });
    }
  }, [myLocation]);
  // 내 위치 마커 표시
  useEffect(() => {
    if (typeof myLocation !== 'string') {
      const currentPosition = [myLocation.latitude, myLocation.longitude];

      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
      });

      const currentMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        map,
        // icon: {
        //   size: new naver.maps.Size(50, 52),
        //   origin: new naver.maps.Point(0, 0),
        //   anchor: new naver.maps.Point(25, 26),
        // },
      });
    }
  }, [myLocation]);

  return (
    <div id="map" style={{ width: '100%', height: 'calc(100vh - 60px)' }} />
  );
}
export default NaverMap;
