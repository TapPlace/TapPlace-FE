import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

import '../../style/components/introService/StoreButton.scss';

function StoreButton() {
  const { windowX } = useAppSelector(state => state.event);
  return (
    <ul id="logoContainer">
      {windowX < 768 ? (
        <>
          <li>
            <Link to="/" className="mobileStoreBtn">
              <FontAwesomeIcon icon={faDownload} />앱 다운로드
            </Link>
          </li>
          <li>
            <Link to="/" id="mobileBtnSecond" className="mobileStoreBtn">
              WEB으로 이용하기
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link className="storeBtn" to="/">
              <img
                src={require('../../img/ServicePage/appleLogo.png')}
                alt="appleLogo"
              />
              <p>App Store</p>
            </Link>
          </li>
          <li>
            <Link className="storeBtn" to="/">
              <img
                src={require('../../img/ServicePage/googleLogo.png')}
                alt="appleLogo"
              />
              <p>Play Store</p>
            </Link>
          </li>
          <li>
            <Link id="goWeb" to="/">
              <p>WEB으로 이용하기</p>
              <img
                src={require('../../img/ServicePage/arrow.png')}
                alt="arrow"
              />
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}

export default StoreButton;
