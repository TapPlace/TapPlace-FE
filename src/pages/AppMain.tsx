import React from 'react';
import AppSideMenu from '../components/appService/AppSideMenu';
import NaverMap from '../components/appService/NaverMap';

import '../style/pages/AppMain.scss';

function AppMain() {
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