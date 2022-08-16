import React from 'react';
import { Link } from 'react-router-dom';

import '../style/components/StoreButton.scss';

function StoreButton() {
  return (
    <ul id="logoContainer">
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
    </ul>
  );
}

export default StoreButton;
