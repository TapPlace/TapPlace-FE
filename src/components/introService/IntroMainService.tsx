import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import StoreButton from './StoreButton';

import mock_1_mobile from '../../img/Service/MockUp/mock_1_mobile.webp';
import mock_1_dekstop from '../../img/Service/MockUp/mock_1_desktop.webp';

import '../../style/components/introService/IntroMainService.scss';

const IntroMainService = () => {
  const { windowX } = useAppSelector(state => state.resize);

  return (
    <div id='main1Container'>
      <article className='contentContainer'>
        <h1 id='main1_line1'>
          간편결제 가맹점 확인
          <br /> 한곳에서 간편하게
        </h1>
        <p id='main1_line2'>
          {windowX <= 768 ? (
            <>
              힘들게 찾아다닐 필요없이 한번에 확인할 수 있어요
              <br />
              탭플레이스에서 내 주변 간편결제 가맹점을
              <br />
              확인해보세요
            </>
          ) : (
            <>
              힘들게 찾아다닐 필요없이 한번에 확인할 수 있어요
              <br />
              탭플레이스에서 내 주변 간편결제 가맹점을 확인해보세요
            </>
          )}
        </p>
        <StoreButton />
      </article>
      {windowX < 768 ? (
        <>
          <img id='appScreenMain' src={mock_1_mobile} alt='mainImg' />
        </>
      ) : (
        <img id='appScreenMain' src={mock_1_dekstop} alt='mainMobileImg' />
      )}
    </div>
  );
};

export default IntroMainService;
