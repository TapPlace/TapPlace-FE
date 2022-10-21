import React, { useState } from 'react';

import '../../style/components/appService/ReqModifyInfo.scss';

function ReqModifyInfo({ setFlag }: any) {
  const [checkFlag, setCheckFlag] = useState(false);

  return (
    <article id="modifyInfo">
      <header id="modifyHeader">
        <p>정보 수정 요청</p>
        <img
          src="img/close.png"
          alt="close"
          onClick={() => {
            setFlag(false);
          }}
        />
      </header>
      <p className="inputTitle">수정내용</p>
      <textarea
        id="modifyContent"
        className="inputContent"
        placeholder="잘못되었거나 변경된 정보가 있다면 알려주세요&#13;&#10;예) 가맹점 이름: OO점 -> OO점"
      ></textarea>
      <p className="inputTitle">이메일 주소</p>
      <input
        type="text"
        id="email"
        className="inputContent"
        placeholder="답변 받을 이메일 주소를 알려주세요"
        autoComplete="off"
      ></input>
      <div id="checkContainer">
        {checkFlag ? (
          <img src="img/AppPage/check.png" alt="check" />
        ) : (
          <img src="img/AppPage/check_inact.png" alt="" />
        )}
        <p>[필수]</p>
        <h4>&nbsp;개인정보 수집, 이용동의</h4>
        <p
          id="view"
          onClick={() => {
            setCheckFlag(true);
          }}
        >
          보기
        </p>
      </div>
      <button id="reqBtn" className={checkFlag ? 'checkFlag' : ''}>
        요청하기
      </button>
    </article>
  );
}

export default ReqModifyInfo;
