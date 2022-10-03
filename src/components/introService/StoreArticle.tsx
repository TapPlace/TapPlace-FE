import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { setDetail, setDetailFlag } from '../../redux/slices/naverMap';

import '../../style/components/introService/StoreArticle.scss';

function StoreArticle({ option, map }: any) {
  const dispatch = useAppDispatch();
  const category = option.category_group_name;
  const name = option.place_name;
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
        dispatch(setDetailFlag(true));
        dispatch(
          setDetail({
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
        const markerContent = [
          `<div style="display: flex; align-items: ${
            category === '음식점'
              ? 'center'
              : category === '편의점'
              ? 'baseline'
              : 'center'
          }; padding: 10px 20px;">`,
          ` <img style="padding-right: 8px; height: ${
            category === '음식점'
              ? '15px'
              : category === '편의점'
              ? '14px'
              : '15px'
          };" src=${src} alt="markerImg" />`,
          ` <p style="font-size: 16px;">${name}</p>`,
          '</div>',
        ].join('');
        const infoWindow = new naver.maps.InfoWindow({
          content: markerContent,
        });
        infoWindow.open(map.map, new naver.maps.LatLng(option.y, option.x));
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
