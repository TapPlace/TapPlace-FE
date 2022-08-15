import React from 'react';

import '../style/components/MobileApp.scss';
import NaverMap from './NaverMap';
import SearchStore from './SearchStore';

function MobileApp() {
  return (
    <div id="mobileContainer">
      <NaverMap />
      <div id="kakaoUpperContainer">
        <header id="mobileUpperBar" />
        <SearchStore />
      </div>
    </div>
  );
}

export default MobileApp;
