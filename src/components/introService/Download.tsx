import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import StoreButton from './StoreButton';

import '../../style/components/introService/Download.scss';

const Download = () => {
  const { windowX } = useAppSelector(state => state.resize);

  return (
    <div id='main6Container'>
      <h1 id='main6_line1'>
        {windowX < 768 ? (
          <>
            지금 탭플레이스를 다운받고
            <br />내 주변 간편결제 가맹점을
            <br />
            바로 확인해보세요
          </>
        ) : (
          <>
            지금 탭플레이스를 다운받고
            <br />내 주변 간편결제 가맹점을 바로 확인해보세요
          </>
        )}
      </h1>
      <p id='main6_line2'>
        {windowX < 768 ? (
          <>
            지금 내 주변의
            <br />
            간편결제 가맹점을 찾아보세요
          </>
        ) : (
          <>지금 내 주변의 간편결제 가맹점을 찾아보세요</>
        )}
      </p>
      <StoreButton />
    </div>
  );
};

export default Download;
