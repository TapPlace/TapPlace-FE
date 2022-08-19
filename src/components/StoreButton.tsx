import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';

import '../style/components/StoreButton.scss';

function StoreButton() {
  return (
    <ul id={isMobile ? 'logoContainerMobile' : 'logoContainer'}>
      {isMobile ? (
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
              <img src={require('../img/appleLogo.png')} alt="appleLogo" />
              <p>App Store</p>
            </Link>
          </li>
          <li>
            <Link className="storeBtn" to="/">
              <img src={require('../img/googleLogo.png')} alt="appleLogo" />
              <p>Play Store</p>
            </Link>
          </li>
          <li>
            <Link id="goWeb" to="/">
              <p>WEB으로 이용하기</p>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}

export default StoreButton;
