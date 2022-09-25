import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Service from './pages/Service';
import Notice from './pages/Notice';
import AppMain from './pages/AppMain';
import Faq from './pages/Faq';
import Header from './components/Header';
import Consent from './pages/Consent';
import Policy from './pages/Policy';
import Footer from './components/introService/Footer';
import { useAppSelector } from './redux/hooks';

function App() {
  const { page } = useAppSelector(state => state.page);
  // 탭플레이스 앱에서 들어갈 시 헤더와 푸터를 없앱니다
  const userAgent = window.navigator.userAgent.includes('TAPPLACE_APP');

  return (
    <>
      {userAgent ? <></> : <Header />}
      {/* <Header /> */}
      <main id="mainContainer">
        <Routes>
          <Route path="/" element={<Service />} />
          <Route path="/notice" element={<Notice />} />
          {/* <Route path="/faq" element={<Faq />} /> */}
          <Route path="/playapp" element={<AppMain />} />
          <Route path="/consent" element={<Consent />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </main>
      {page !== 'playapp' && !userAgent && <Footer />}
    </>
  );
}

export default App;
