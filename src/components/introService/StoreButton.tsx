import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

import '../../style/components/introService/StoreButton.scss';

function StoreButton() {
  const { windowX } = useAppSelector(state => state.event);

  // 현재 다운로드가 안되서 알람 띄우기
  function onDownload() {
    alert('서비스 준비중 입니다');
  }

  return (
    <ul id="logoContainer">
      {windowX < 768 ? (
        <>
          <li>
            <Link to="/" className="mobileStoreBtn" onClick={onDownload}>
              <FontAwesomeIcon icon={faDownload} />앱 다운로드
            </Link>
          </li>
          <li>
            <Link
              to="/"
              id="mobileBtnSecond"
              className="mobileStoreBtn"
              onClick={onDownload}
            >
              웹으로 이용하기
            </Link>
          </li>
        </>
      ) : (
        <>
          <li onClick={onDownload}>
            <Link className="storeBtn" to="/">
              <img
                src={require('../../img/ServicePage/appleLogo.png')}
                alt="appleLogo"
              />
              <p>App Store</p>
            </Link>
          </li>
          <li onClick={onDownload}>
            <Link className="storeBtn" to="/">
              <img
                src={require('../../img/ServicePage/googleLogo.png')}
                alt="googleLogo"
              />
              <p>Play Store</p>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}

export default StoreButton;
