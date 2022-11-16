import React from 'react';

import '../../style/components/appService/Feedback.scss';

const Feedback = ({ options }: any) => {
  let payName = '';
  let payImg = '';
  switch (options.pay) {
    case 'kakaopay':
      payName = '카카오페이';
      payImg = 'img/AppPage/PayLogo/kakao.png';
      break;
    case 'naverpay':
      payName = '네이버페이';
      payImg = 'img/AppPage/PayLogo/naver.png';
      break;
    case 'payco':
      payName = '페이코페이';
      payImg = 'img/AppPage/PayLogo/payco.png';
      break;
    case 'zeropay':
      payName = '제로페이';
      payImg = 'img/AppPage/PayLogo/zero.png';
      break;
    case 'apple_visa':
      payName = '애플페이 - VISA';
      payImg = 'img/AppPage/PayLogo/apple.png';
      break;
    case 'apple_master':
      payName = '애플페이 - MASTER';
      payImg = 'img/AppPage/PayLogo/apple.png';
      break;
    case 'apple_jcb':
      payName = '애플페이 - JCB';
      payImg = 'img/AppPage/PayLogo/apple.png';
      break;
    case 'conless_visa':
      payName = '컨택리스 - VISA';
      payImg = 'img/AppPage/PayLogo/contactless.png';
      break;
    case 'conless_master':
      payName = '컨택리스 - MASTER';
      payImg = 'img/AppPage/PayLogo/contactless.png';
      break;
    case 'conless_amex':
      payName = '컨택리스 - AMEX';
      payImg = 'img/AppPage/PayLogo/contactless.png';
      break;
    case 'conless_union':
      payName = '컨택리스 - UNION';
      payImg = 'img/AppPage/PayLogo/contactless.png';
      break;
    case 'conless_jcb':
      payName = '컨택리스 - JCB';
      payImg = 'img/AppPage/PayLogo/contactless.png';
      break;
    case 'google_visa':
      payName = '구글페이 - VISA';
      payImg = 'img/AppPage/PayLogo/google.png';
      break;
    case 'google_master':
      payName = '구글페이 - MASTER';
      payImg = 'img/AppPage/PayLogo/google.png';
      break;
    case 'google_maestro':
      payName = '구글페이 - MAESTRO';
      payImg = 'img/AppPage/PayLogo/google.png';
      break;
    case 'toss':
      payName = '토스페이';
      payImg = 'img/AppPage/PayLogo/kakao.png';
      break;
  }

  const all = options.success + options.fail;
  const suc = Math.round((100 / all) * options.success);
  const fai = Math.round((100 / all) * options.fail);
  return (
    <article className='feedbackContainer'>
      <div className='fbTitle'>
        <img src={payImg} alt='logo' />
        {payName}
      </div>
      <div className='fbExist'>
        <p className={options.exist ? 'fbBoolean T' : 'fbBoolean'}>
          최근결제: {options.exist ? '성공' : '실패'}
        </p>
        <p className='fbDate'>2022.08.20</p>
      </div>
      <progress className='progress' value={suc} max='100'></progress>
      <div className='fbPercent'>
        <p className='paySuccess'>성공 {suc}%</p>
        <p className='payFailure'>실패 {fai}%</p>
      </div>
    </article>
  );
};

export default Feedback;
