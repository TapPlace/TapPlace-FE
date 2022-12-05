import React from 'react';

import visa from '../../img/Service/PaymentLogo/visa.webp';
import payco from '../../img/Service/PaymentLogo/payco.webp';
import apple from '../../img/Service/PaymentLogo/apple.webp';
import zero from '../../img/Service/PaymentLogo/zero.webp';
import google from '../../img/Service/PaymentLogo/google.webp';
import kakao from '../../img/Service/PaymentLogo/kakao.webp';
import naver from '../../img/Service/PaymentLogo/naver.webp';
import master from '../../img/Service/PaymentLogo/master.webp';

const PayLogoCollective = () => {
  return (
    <>
      <img src={visa} alt='visaLogo' />
      <img src={payco} alt='paycoLogo' />
      <img src={apple} alt='appleLogo' />
      <img src={zero} alt='zeroLogo' />
      <img src={google} alt='googleLogo' />
      <img src={kakao} alt='kakaoLogo' />
      <img src={naver} alt='naverLogo' />
      <img src={master} alt='masterLogo' />
    </>
  );
};

export default PayLogoCollective;
