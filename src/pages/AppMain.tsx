import React from 'react';
import AppSideMenu from '../components/appService/AppSideMenu';
import NaverMap from '../components/appService/NaverMap';

import '../style/pages/AppMain.scss';

function AppMain() {
  const url = '../img/AppPage/Marker/restaurant.png';

  return (
    <>
      <main id="mobileMain">
        <NaverMap />
      </main>
      <AppSideMenu />
    </>
  );
}

export default AppMain;
