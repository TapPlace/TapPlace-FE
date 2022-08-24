import React from 'react';
import { useAppSelector } from '../redux/hooks';

import '../style/components/PayLogoSlider.scss';

function PayLogoSlider() {
  const { windowX } = useAppSelector(state => state.event);
  return (
    <>
      <div id={windowX > 768 ? 'payLogoSlider' : 'mobilePayLogoSlider'}>
        <img
          src={require('../img/ServicePage/PaymentLogo/visa.png')}
          alt="visaLogo"
        />
        <img
          src={require('../img/ServicePage/PaymentLogo/payco.png')}
          alt="paycoLogo"
        />
        <img
          src={require('../img/ServicePage/PaymentLogo/apple.png')}
          alt="appleLogo"
        />
        <img
          src={require('../img/ServicePage/PaymentLogo/zero.png')}
          alt="zeroLogo"
        />
        <img
          src={require('../img/ServicePage/PaymentLogo/google.png')}
          alt="googleLogo"
        />
        <img
          src={require('../img/ServicePage/PaymentLogo/kakao.png')}
          alt="kakaoLogo"
        />
        <img
          src={require('../img/ServicePage/PaymentLogo/naver.png')}
          alt="naverLogo"
        />
        <img
          src={require('../img/ServicePage/PaymentLogo/master.png')}
          alt="masterLogo"
        />
        {windowX > 768 && (
          <>
            <img
              src={require('../img/ServicePage/PaymentLogo/visa.png')}
              alt="visaLogo"
            />
            <img
              src={require('../img/ServicePage/PaymentLogo/payco.png')}
              alt="paycoLogo"
            />
            <img
              src={require('../img/ServicePage/PaymentLogo/apple.png')}
              alt="appleLogo"
            />
            <img
              src={require('../img/ServicePage/PaymentLogo/zero.png')}
              alt="zeroLogo"
            />
            <img
              src={require('../img/ServicePage/PaymentLogo/google.png')}
              alt="googleLogo"
            />
            <img
              src={require('../img/ServicePage/PaymentLogo/kakao.png')}
              alt="kakaoLogo"
            />
            <img
              src={require('../img/ServicePage/PaymentLogo/naver.png')}
              alt="naverLogo"
            />
            <img
              src={require('../img/ServicePage/PaymentLogo/master.png')}
              alt="masterLogo"
            />
          </>
        )}
      </div>
    </>
  );
}

export default PayLogoSlider;
