import axios from 'axios';
import React, { useEffect } from 'react';
import AppSideMenu from '../components/appService/AppSideMenu';
import NaverMap from '../components/appService/NaverMap';
import { useAppSelector } from '../redux/hooks';

import '../style/pages/AppMain.scss';

function AppMain() {
  const { myLocation } = useAppSelector(state => state.naver);

  let x1: String = String(myLocation.latitude);
  let y1: String = String(myLocation.longitude);
  let distance: String = '1.5';
  const pays = ['kakaopay', 'naverpay', 'payco'];

  // console.log({ x1, y1, distance, pays });

  // 자기 위치에서 distance 내 가맹점 리스트 가져오기
  // useEffect(() => {
  //   axios
  //     .post(
  //       'https://api.tapplace.cloud/store/around',
  //       JSON.stringify({
  //         x1: myLocation.latitude,
  //         y1: myLocation.longitude,
  //         distance: '1.5',
  //         pays: ['kakaopay', 'payco'],
  //       }),
  //       {
  //         headers: {
  //           'Content-Type': `application/json`,
  //         },
  //         withCredentials: true,
  //       },
  //     )
  //     .then(res => console.log(res))
  //     .catch(err => console.error(err));
  // });

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
