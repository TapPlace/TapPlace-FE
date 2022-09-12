import React, { useEffect } from 'react';

import '../style/pages/Service.scss';

import { useAppDispatch } from '../redux/hooks';
import { setResize } from '../redux/slices/eventSlice';
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
      <IntroMainService />
      <IntroMainFunction />
      <IntroMember />
      <Download />
      <Footer />
    </>
  );
}

export default Service;
