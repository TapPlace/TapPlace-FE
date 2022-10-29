import React, { useEffect } from 'react';
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
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { debounce } from 'lodash';
import { SET_WINDOW_SIZE } from './redux/slices/PlayApp';

function App() {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector(state => state.page);
  // 탭플레이스 앱에서 들어갈 시 헤더와 푸터를 없앱니다
  const userAgent = window.navigator.userAgent.includes('TAPPLACE_APP');

  // 리사이즈 이벤트
  const handleResize = debounce(() => {
    dispatch(
      SET_WINDOW_SIZE({
        width: window.innerWidth,
        height: window.innerHeight,
      }),
    );
  }, 300);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {userAgent ? <></> : <Header />}
      <main id="mainContainer">
        <Routes>
          <Route path="/" element={<Service />} />
          {/* <Route path="/notice" element={<Notice />} /> */}
          {/* <Route path="/faq" element={<Faq />} /> */}
          <Route path="/playapp" element={<AppMain />} />
          <Route path="/consent" element={<Consent />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
        {page !== 'playapp' && !userAgent && <Footer />}
      </main>
    </>
  );
}

export default App;
