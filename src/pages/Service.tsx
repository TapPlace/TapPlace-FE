import React, { useEffect } from 'react';

import '../style/pages/Service.scss';
import Main4 from '../components/Main4';

import { useAppDispatch } from '../redux/hooks';
import { setResize } from '../redux/slices/eventSlice';
import Header from '../components/Header';
import Footer from '../components/introService/Footer';
import Download from '../components/introService/Download';
import IntroMember from '../components/introService/IntroMember';
import IntroMainService from '../components/introService/IntroMainService';
import IntroMainFunction from '../components/introService/IntroMainFunction';

function Service() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(setResize(window.innerWidth));
    });
  });

  return (
    <>
      <Header />
      <main id="mainContainer">
        <IntroMainService />
        <IntroMainFunction />
        <Main4 />
        <IntroMember />
        <Download />
      </main>
      <Footer />
    </>
  );
}

export default Service;
