import React from 'react';
import AppSideMenu from '../components/AppSideMenu';
import Header from '../components/Header';
import NaverMap from '../components/NaverMap';

import '../style/pages/AppMain.scss';

function AppMain() {
  return (
    <>
      <Header />
      <main id="mobileMain">
        <NaverMap />
      </main>
      <AppSideMenu />
    </>
  );
}

export default AppMain;
