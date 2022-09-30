import React from 'react';
import { useAppSelector } from '../redux/hooks';

import './BetaService.scss';

function BetaService() {
  const { windowX } = useAppSelector(state => state.event);

  return (
    <div id="betaContainer">
      <div id="betaText">
        <h1>IOS 베타 테스트 신청</h1>
        {windowX < 768 ? (
          <>
            <h4>
              Test Flight로 시행되는 베타 테스트를 통해
              <br />
              탭플레이스를 미리 경험해보세요!
              <br />
              베타 테스터가 되어 보내주시는 의견이 큰 힘이 됩니다.
              <br />
              베타 테스트는 16일부터 시작됩니다.
            </h4>
          </>
        ) : (
          <>
            <h4>
              Test Flight로 시행되는 베타 테스트를 통해 탭플레이스를 미리
              경험해보세요!
              <br />
              베타 테스터가 되어 보내주시는 의견이 큰 힘이 됩니다.
              <br />
              베타 테스트는 16일부터 시작됩니다.
            </h4>
          </>
        )}
      </div>
      <button
        onClick={() => {
          window.open('https://testflight.apple.com/join/zEO2JUai');
        }}
      >
        신청하기
      </button>
      <img src="img/betaImg.png" alt="betaImg" />
    </div>
  );
}

export default BetaService;
