import React from 'react';

import '../../style/components/introService/StoreArticle.scss';

function StoreArticle({ option }: any) {
  return (
    <article className="storeArticle">
      <div className="storeLine1">
        <h4 className="storeName">{option.place_name}</h4>
        <p className="storeCategory">{option.category_group_name}</p>
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
        {option.pays.map((pay: any) => {
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
          }
        })}
      </div>
    </article>
  );
}

export default StoreArticle;
