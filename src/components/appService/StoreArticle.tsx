import React from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import {
  SET_DETAIL_FLAG,
  SET_DETAIL_INFO,
  SET_MOBILE_SHOW_STORE_FLAG,
  SET_MOBILE_SHOW_SEARCH_FLAG,
  SET_SEARCH_CRITERIA_FLAG,
} from 'redux/slices/PlayApp';
import {
  restaruant,
  restaruant_big,
  accommodation,
  accommodation_big,
  cafe,
  cafe_big,
  drutstore,
  drutstore_big,
  etc,
  etc_big,
  institutions,
  institutions_big,
  parking,
  parking_big,
  shop,
  shop_big,
  store,
  store_big,
  hospital,
  hospital_big,
  gasStation,
  gasStation_big,
} from 'constants/MarkerImg';
import { kakaoPay, applePay, naverPay, zeroPay, contactless, googlePay, payco } from 'constants/PaymentLogoImg';

import 'style/components/appService/StoreArticle.scss';

const StoreArticle = (props: any) => {
  const { option, map, markers } = props;
  const dispatch = useAppDispatch();
  const category = option.category_group_name;
  const name = option.place_name;
  const { storeDetailFlag, windowSize } = useAppSelector((state) => state.playApp);
  // Article 클릭 시 맞는 마커 선택하여 상위 컴포넌트로 전달
  const choiceArticle = () => {
    markers.forEach((marker: any) => {
      // 이미지 분류
      const category = marker.icon.url.substring(marker.icon.url.indexOf('/', 8) + 1, marker.icon.url.indexOf('.'));
      // 이미지 변경
      const setImg = (img: any) => {
        marker.setIcon({
          url: img,
        });
      };
      // 큰 이미지로 바뀌어 있는 마커 기본 이미지로 변경
      if (marker.icon.url.includes('_big')) {
        if (category === 'restaruant_big') setImg(restaruant);
        else if (category === 'cafe_big') setImg(cafe);
        else if (category === 'store_big') setImg(store);
        else if (category === 'shop_big') setImg(shop);
        else if (category === 'gasStation_big') setImg(gasStation);
        else if (category === 'parking_big') setImg(parking);
        else if (category === 'hospital_big') setImg(hospital);
        else if (category === 'drugstore_big') setImg(drutstore);
        else if (category === 'accommodation_big') setImg(accommodation);
        else if (category === 'institutions_big') setImg(institutions);
        else if (category === 'etc_big') setImg(etc);
      }

      if (Number(marker.title) === option.num) {
        if (option.category_group_name === '음식점') setImg(restaruant_big);
        else if (option.category_group_name === '카페') setImg(cafe_big);
        else if (option.category_group_name === '편의점') setImg(store_big);
        else if (option.category_group_name === '마트') setImg(shop_big);
        else if (option.category_group_name === '주유소') setImg(gasStation_big);
        else if (option.category_group_name === '주차장') setImg(parking_big);
        else if (option.category_group_name === '병원') setImg(hospital_big);
        else if (option.category_group_name === '약국') setImg(drutstore_big);
        else if (option.category_group_name === '숙박') setImg(accommodation_big);
        else if (option.category_group_name === '공공기관') setImg(institutions_big);
        else if (option.category_group_name === '기타') setImg(etc_big);
      }
    });
  };

  return (
    <article
      className="storeArticle"
      onClick={() => {
        dispatch(SET_MOBILE_SHOW_STORE_FLAG(false));
        dispatch(SET_MOBILE_SHOW_SEARCH_FLAG(false));
        if (!storeDetailFlag) dispatch(SET_DETAIL_FLAG(true));
        dispatch(
          SET_DETAIL_INFO({
            store_id: option.store_id,
            place_name: option.place_name,
            phone: option.phone,
            road_address_name: option.road_address_name,
            address_name: option.address_name,
            category_group_name: option.category_group_name,
            distance: option.distance,
            pays: option.pays,
            x: option.x,
            y: option.y,
          })
        );
        choiceArticle();
        let _marker: any;
        markers.forEach((marker: any) => {
          if (marker.icon.url.includes('_big')) {
            _marker = marker;
            return;
          }
        });

        if (window.innerWidth < 1024) {
          let lat;
          if (windowSize.height < 600) {
            lat = _marker.position._lat - windowSize.height / 676670;
          } else if (windowSize.height < 700) {
            lat = _marker.position._lat - windowSize.height / 676668;
          } else {
            lat = _marker.position._lat - windowSize.height / 676666;
          }
          const lng = _marker.position._lng;
          const latlng = new naver.maps.LatLng(lat, lng);
          map.setOptions('zoom', 18);
          map.setCenter(latlng);
          dispatch(SET_SEARCH_CRITERIA_FLAG(false));
        } else {
          map.setOptions('zoom', 18);
          map.setCenter(_marker.position);
          dispatch(SET_SEARCH_CRITERIA_FLAG(false));
        }
      }}
    >
      <div className="storeLine1">
        <h4 className="storeName">{name}</h4>
        <p className="storeCategory">{category}</p>
      </div>
      <div className="storeLine2">
        <p className="storeMeter">{option.distance * 1000}m</p>・
        <p className="storeAddress">
          {option.road_address_name ? `${option.road_address_name}` : `${option.place_name}`}
        </p>
      </div>
      <div className="storePaymentMethod">
        {option.pays.map((pay: string) => {
          if (pay === 'kakaopay') {
            return <img key={pay} src={kakaoPay} alt="kakao" />;
          }
          if (pay === 'naverpay') {
            return <img key={pay} src={naverPay} alt="naver" />;
          }
          if (pay === 'payco') {
            return <img key={pay} src={payco} alt="payco" />;
          }
          if (pay === 'zeropay') {
            return <img key={pay} src={zeroPay} alt="zero" />;
          }
          if (pay === ('apple_visa' || 'apple_master' || 'apple_jcb')) {
            return <img key={pay} src={applePay} alt="apple" />;
          }
          if (pay === ('conless_visa' || 'conless_master' || 'conless_jcb')) {
            return <img key={pay} src={contactless} alt="conless" />;
          }
          if (pay === ('google_visa' || 'google_master' || 'google_jcb')) {
            return <img key={pay} src={googlePay} alt="google" />;
          }
          // if (pay === 'toss') {
          //   return (
          //     <img key={pay} src='img/AppPage/PayLogo/toss.png' alt='toss' />
          //   );
          // }
          else return '';
        })}
      </div>
    </article>
  );
};

export default StoreArticle;
