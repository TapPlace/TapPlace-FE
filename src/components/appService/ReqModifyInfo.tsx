import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { SET_DETAIL_FLAG } from '../../redux/slices/PlayApp';

import '../../style/components/appService/ReqModifyInfo.scss';

function ReqModifyInfo(props: any) {
  const {
    markers,
    agreeFlag,
    setAgreeFlag,
    setReqModifyFlagView,
    setAgreeViewFlag,
  } = props;
  const dispatch = useAppDispatch();

  return (
    <article id="modifyInfo">
      <header id="modifyHeader">
        <img
          src="img/back.png"
          alt="back"
          onClick={() => {
            setReqModifyFlagView(false);
          }}
        />
        <p>정보 수정 요청</p>
        {window.innerWidth > 1023 && (
          <img
            src="img/close.png"
            alt="close"
            onClick={() => {
              dispatch(SET_DETAIL_FLAG(false));
              markers.forEach((marker: any) => {
                if (marker.icon.url.includes('_big')) {
                  let src =
                    marker.icon.url.substring(0, marker.icon.url.indexOf('_')) +
                    '.png';
                  marker.setIcon({
                    url: src,
                  });
                  return false;
                }
              });
            }}
          />
        )}
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
        {agreeFlag ? (
          <img src="img/AppPage/check.png" alt="check" />
        ) : (
          <img src="img/AppPage/check_inact.png" alt="check_inact" />
        )}
        <p>[필수]</p>
        <h4>&nbsp;개인정보 수집, 이용동의</h4>
        <p
          id="view"
          onClick={() => {
            setAgreeViewFlag(true);
          }}
        >
          보기
        </p>
      </div>
      {agreeFlag ? (
        <button
          id="reqBtn"
          className="checkFlag"
          onClick={() => {
            console.log('요청');
            setAgreeFlag(false);
            setReqModifyFlagView(false);
          }}
        >
          요청하기
        </button>
      ) : (
        <button id="reqBtn">요청하기</button>
      )}
    </article>
  );
}

export default ReqModifyInfo;
