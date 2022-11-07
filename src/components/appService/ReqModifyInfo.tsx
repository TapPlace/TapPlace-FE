import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { SET_DETAIL_FLAG } from '../../redux/slices/PlayApp';
import { useInput } from '../../hooks/useInput';

import '../../style/components/appService/ReqModifyInfo.scss';
import axios from 'axios';

function ReqModifyInfo(props: any) {
  const {
    markers,
    agreeFlag,
    setAgreeFlag,
    setReqModifyFlagView,
    setAgreeViewFlag,
  } = props;
  const dispatch = useAppDispatch();
  const { windowSize, storeDetailInfo } = useAppSelector(
    state => state.playApp,
  );

  const [content, setContent] = useInput('');

  return (
    <article id='modifyInfo'>
      <header id='modifyHeader'>
        <img
          src='img/back.png'
          alt='back'
          onClick={() => {
            setReqModifyFlagView(false);
          }}
        />
        <p>정보 수정 요청</p>
        {windowSize.width > 1023 && (
          <img
            src='img/close.png'
            alt='close'
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
      <p className='inputTitle'>수정내용</p>
      <textarea
        id='modifyContent'
        className='inputContent'
        value={content}
        onChange={setContent}
        placeholder='잘못되었거나 변경된 정보가 있다면 알려주세요&#13;&#10;예) 가맹점 이름: OO점 -> OO점'
        autoComplete='off'
      ></textarea>
      <div id='checkContainer'>
        {agreeFlag ? (
          <img src='img/AppPage/check.png' alt='check' />
        ) : (
          <img src='img/AppPage/check_inact.png' alt='check_inact' />
        )}
        <p>[필수]</p>
        <h4>&nbsp;개인정보 수집, 이용동의</h4>
        <p
          id='view'
          onClick={() => {
            setAgreeViewFlag(true);
          }}
        >
          보기
        </p>
      </div>
      {agreeFlag ? (
        <button
          id='reqBtn'
          className='checkFlag'
          onClick={() => {
            setAgreeFlag(false);
            setReqModifyFlagView(false);
            axios
              .post('https://api.tapplace.co.kr/qna/web', {
                title: storeDetailInfo.place_name,
                content: content,
                store_id: storeDetailInfo.store_id,
              })
              .then(res => {
                alert('정보 수정 요청 전송 완료');
              })
              .catch(err => console.error(err));
          }}
        >
          요청하기
        </button>
      ) : (
        <button id='reqBtn'>요청하기</button>
      )}
    </article>
  );
}

export default ReqModifyInfo;
