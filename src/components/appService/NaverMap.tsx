import { useEffect, useState } from 'react';

const { naver } = window;

function NaverMap() {
  const [myLocation, setMyLocation] = useState<
    { latitude: number; longitude: number } | string
  >('');
  // 현재 위치 가져오기
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert('현재위치를 알수 없습니다.');
    }
  }, []);
  // 네이버 맵 띄우기
  useEffect(() => {
    if (typeof myLocation !== 'string') {
      const currentPosition = [myLocation.latitude, myLocation.longitude];
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoom: 18,
      });
    }
  }, [myLocation]);

  return <div id="map" style={{ width: '100%', height: '100%' }} />;
}
export default NaverMap;
