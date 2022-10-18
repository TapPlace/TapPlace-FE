import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  SET_DETAIL_FLAG,
  SET_DETAIL_INFO,
  SET_MOBILE_SHOW_STORE_FLAG,
  SET_MOBILE_SHOW_SEARCH_FLAG,
} from '../../redux/slices/PlayApp';

import '../../style/components/appService/StoreArticle.scss';

function StoreArticle({ option, map }: any) {
  const dispatch = useAppDispatch();
  const category = option.category_group_name;
  const name = option.place_name;
  const { storeDetailFlag } = useAppSelector(state => state.playApp);
  let src = '';
  // 이미지 src 정하기
  switch (category) {
    case '음식점':
      src = 'img/AppPage/restaurant.png';
      break;
    case '편의점':
      src = 'img/AppPage/store.png';
      break;
    case '카페':
      src = 'img/AppPage/cafe.png';
      break;
    default:
      src = 'img/AppPage/Vbutton.png';
      break;
  }

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
          }),
        );
        const bigSrc = src.substring(0, src.indexOf('.')) + '_big.png';
        // console.log(option);
        // console.log(bigSrc);
        // option.setIcon({
        //   url: bigSrc,
        // });
        if (window.innerWidth < 1024) {
          const latlng = new naver.maps.LatLng(option.y - 0.0016, option.x);
          map.map.panTo(latlng);
        } else {
          const latlng = new naver.maps.LatLng(option.y, option.x);
          map.map.panTo(latlng);
        }
      }}
    >
      <div className="storeLine1">
        <h4 className="storeName">{name}</h4>
        <p className="storeCategory">{category}</p>
      </div>
      <div className="storeLine2">
        <p className="storeMeter">{option.distance * 1000}m</p>
        <p className="storeAddress">
          {option.road_address_name
            ? `${option.road_address_name}`
            : `${option.place_name}`}
        </p>
      </div>
      <div className="storePaymentMethod">
        {option.pays.map((pay: string) => {
          if (pay === 'kakaopay') {
            return (
              <img key={pay} src="img/AppPage/PayLogo/kakao.png" alt="kakao" />
            );
          }
          if (pay === 'naverpay') {
            return (
              <img key={pay} src="img/AppPage/PayLogo/naver.png" alt="naver" />
            );
          }
          if (pay === 'payco') {
            return (
              <img key={pay} src="img/AppPage/PayLogo/payco.png" alt="payco" />
            );
          }
          if (pay === 'zeropay') {
            return (
              <img key={pay} src="img/AppPage/PayLogo/zero.png" alt="zero" />
            );
          }
          if (pay === ('apple_visa' || 'apple_master' || 'apple_jcb')) {
            return (
              <img key={pay} src="img/AppPage/PayLogo/apple.png" alt="apple" />
            );
          }
          if (pay === ('conless_visa' || 'conless_master' || 'conless_jcb')) {
            return (
              <img
                key={pay}
                src="img/AppPage/PayLogo/contactless.png"
                alt="conless"
              />
            );
          }
          if (pay === ('google_visa' || 'google_master' || 'google_jcb')) {
            return (
              <img
                key={pay}
                src="img/AppPage/PayLogo/google.png"
                alt="google"
              />
            );
          }
          if (pay === 'toss') {
            return (
              <img key={pay} src="img/AppPage/PayLogo/toss.png" alt="toss" />
            );
          } else return '';
        })}
      </div>
    </article>
  );
}

export default StoreArticle;
