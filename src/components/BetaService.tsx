import React from 'react';
import { useInput } from '../hooks/useInput';
import { useAppSelector } from '../redux/hooks';

import './BetaService.scss';

function BetaService() {
  const { windowX } = useAppSelector(state => state.event);
  const [lastName, onChangeLastName] = useInput('');
  const [firstName, onChangeFirstName] = useInput('');
  const [email, onChangeEmail] = useInput('');

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
            </h4>
          </>
        ) : (
          <>
            <h4>
              Test Flight로 시행되는 베타 테스트를 통해 탭플레이스를 미리
              경험해보세요!
              <br />
              베타 테스터가 되어 보내주시는 의견이 큰 힘이 됩니다.
            </h4>
          </>
        )}
      </div>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          console.log(lastName, firstName, email);
        }}
      >
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={onChangeLastName}
          placeholder="성"
        />
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={onChangeFirstName}
          placeholder="이름"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChangeEmail}
          placeholder="이메일 주소"
        />
        <button type="submit">신청하기</button>
      </form>
      <img src={require('../img/betaImg.png')} alt="betaImg" />
    </div>
  );
}

export default BetaService;
