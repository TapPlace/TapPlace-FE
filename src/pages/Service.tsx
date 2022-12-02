import { useEffect } from 'react';

import '../style/pages/Service.scss';

import { useAppDispatch } from '../redux/hooks';
import { SET_RESIZE } from '../redux/slices/resizeSlice';
import Download from '../components/introService/Download';
import IntroMember from '../components/introService/IntroMember';
import IntroMainService from '../components/introService/IntroMainService';
import IntroMainFunction from '../components/introService/IntroMainFunction';

const Service = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(SET_RESIZE(window.innerWidth));
    });
    return () => {
      window.removeEventListener('resize', () => {
        dispatch(SET_RESIZE(window.innerWidth));
      });
    };
  }, []);

  return (
    <>
      <IntroMainService />
      <IntroMainFunction />
      <IntroMember />
      <Download />
    </>
  );
};

export default Service;
