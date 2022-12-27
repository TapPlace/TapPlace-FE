import React from 'react';

import { kakaoPay, applePay, naverPay, zeroPay, contactless, googlePay, payco } from 'constants/PaymentLogoImg';
import 'style/components/appService/Feedback.scss';

import feedbackPercent from 'utils/feedbackPercent';

const Feedback = ({ options }: any) => {
  const { suc, fai } = feedbackPercent(options);

  return (
    <article className="feedbackContainer">
      <div className="fbTitle">
        {options.pay === 'kakaopay' ? (
          <>
            <img src={kakaoPay} alt="logo" />
            카카오페이
          </>
        ) : options.pay === 'naverpay' ? (
          <>
            <img src={naverPay} alt="logo" />
            네이버페이
          </>
        ) : options.pay === 'payco' ? (
          <>
            <img src={payco} alt="logo" />
            페이코페이
          </>
        ) : options.pay === 'zeropay' ? (
          <>
            <img src={zeroPay} alt="logo" />
            제로페이
          </>
        ) : options.pay === 'apple_visa' ? (
          <>
            <img src={applePay} alt="logo" />
            애플페이 - VISA
          </>
        ) : options.pay === 'apple_master' ? (
          <>
            <img src={applePay} alt="logo" />
            애플페이 - MASTER
          </>
        ) : options.pay === 'apple_jcb' ? (
          <>
            <img src={applePay} alt="logo" />
            애플페이 - JCB
          </>
        ) : options.pay === 'conless_visa' ? (
          <>
            <img src={contactless} alt="logo" />
            컨택리스 - VISA
          </>
        ) : options.pay === 'conless_master' ? (
          <>
            <img src={contactless} alt="logo" />
            컨택리스 - MASTER
          </>
        ) : options.pay === 'conless_amex' ? (
          <>
            <img src={contactless} alt="logo" />
            컨택리스 - AMEX
          </>
        ) : options.pay === 'conless_union' ? (
          <>
            <img src={contactless} alt="logo" />
            컨택리스 - UNION
          </>
        ) : options.pay === 'conless_jcb' ? (
          <>
            <img src={contactless} alt="logo" />
            컨택리스 - JCB
          </>
        ) : options.pay === 'google_visa' ? (
          <>
            <img src={googlePay} alt="logo" />
            구글페이 - VISA
          </>
        ) : options.pay === 'google_master' ? (
          <>
            <img src={googlePay} alt="logo" />
            구글페이 - MASTER
          </>
        ) : (
          options.pay === 'google_maestro' && (
            <>
              <img src={googlePay} alt="logo" />
              구글페이 - MAESTRO
            </>
          )
        )}
      </div>
      <div className="fbExist">
        <p className={options.exist ? 'fbBoolean T' : 'fbBoolean'}>최근결제: {options.exist ? '성공' : '실패'}</p>
        <p className="fbDate">2022.08.20</p>
      </div>
      <progress className="progress" value={suc} max="100"></progress>
      <div className="fbPercent">
        <p className="paySuccess">성공 {suc}%</p>
        <p className="payFailure">실패 {fai}%</p>
      </div>
    </article>
  );
};

export default Feedback;
