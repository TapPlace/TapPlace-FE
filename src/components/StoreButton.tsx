import React from 'react';
import { Link } from 'react-router-dom';

import '../style/components/StoreButton.scss';

function StoreButton() {
  return (
    <ul id="logoContainer">
      <li>
        <Link to="/">
          <img src={require('../img/appleLogo.png')} alt="appleLogo" />
          <p>App Store</p>
        </Link>
      </li>
      <li>
        <Link to="/">
          <img src={require('../img/googleLogo.png')} alt="appleLogo" />
          <p>Play Store</p>
        </Link>
      </li>
    </ul>
  );
}

export default StoreButton;
