import React, { useEffect, useState } from 'react';
import { useAppDispatch } from 'redux/hooks';
import { SET_APP_VISIT_ALERT_FLAG } from 'redux/slices/PlayApp';

import { visitAlert_main, visitAlert_check, download } from 'constants/CommonImg';

import 'style/components/appService/AppVisitAlert.scss';

const AppVisitAlert = () => {
  const dispatch = useAppDispatch();
  const [appVisitAlert, setAppVisitAlert] = useState(true);

  // localStorage에 저장
  const setItemWithExpireTime = (keyName: string, keyValue: string, tts: number) => {
    const obj = {
      value: keyValue,
      expire: Date.now() + tts,
    };
    const objString = JSON.stringify(obj);
    window.localStorage.setItem(keyName, objString);
  };
  // localStorage 읽고 24시간 지났는지 체크
  const getItemWithExpireTime = (keyName: string) => {
    const objString = window.localStorage.getItem(keyName);
    if (!objString) return dispatch(SET_APP_VISIT_ALERT_FLAG(true));
    const obj = JSON.parse(objString);
    if (Date.now() > obj.expire) {
      window.localStorage.removeItem(keyName);
      return dispatch(SET_APP_VISIT_ALERT_FLAG(true));
    }
    return dispatch(SET_APP_VISIT_ALERT_FLAG(false));
  };
  // localStorage 확인
  useEffect(() => {
    getItemWithExpireTime('noShowToday');
  });

  return (
    <article id="alertContainer" className={appVisitAlert ? '' : 'noShowAlert'}>
      <h1 id="recommendUseApp">
        앱을 통해 내 주변의 간편결제 가맹점을
        <br />
        더욱 편리하게 확인해보세요!
      </h1>
      <img id="alertImg" src={visitAlert_main} alt="visitAlert" />
      <ul id="newFeatureContainer">
        <li className="newFeature">
          <img src={visitAlert_check} alt="check" />
          간편결제 가맹점 확인
        </li>
        <li className="newFeature">
          <img src={visitAlert_check} alt="check" />
          결제수단 별 사용여부 피드백
        </li>
        <li className="newFeature">
          <img src={visitAlert_check} alt="check" />
          쉽고 빠른 가맹점 등록
        </li>
      </ul>
      <button
        id="appDownloadBtn"
        onClick={() => {
          window.open('https://apps.apple.com/app/%ED%83%AD%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4/id1643830783');
        }}
      >
        <img src={download} alt="download" />
        <p>앱 다운로드</p>
      </button>
      <h4
        id="stillWeb"
        onClick={() => {
          setAppVisitAlert(false);
        }}
      >
        웹으로 계속하기
      </h4>
      <h4
        id="noShowToday"
        onClick={() => {
          setAppVisitAlert(false);
          dispatch(SET_APP_VISIT_ALERT_FLAG(false));
          setItemWithExpireTime('noShowToday', 'true', 24 * 60 * 60);
        }}
      >
        오늘 하루 보지 않기
      </h4>
    </article>
  );
};

export default AppVisitAlert;
