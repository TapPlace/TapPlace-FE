import React, { useEffect } from 'react';
import PayLogoSlider from '../components/introService/PayLogoSlider';

import '../style/pages/Service.scss';
import Main4 from '../components/Main4';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setResize } from '../redux/slices/eventSlice';
import Header from '../components/Header';
import Footer from '../components/introService/Footer';
import Download from '../components/introService/Download';
import IntroMember from '../components/introService/IntroMember';
import IntroMainService from '../components/introService/IntroMainService';

function Service() {
  const { windowX } = useAppSelector(state => state.event);
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
        <div id="main2Container">
          <h4 id="main2_lineTop">
            {windowX < 768 ? (
              <>
                탭플레이스와 함께라면
                <br />이 모든 간편결제 가맹점을
                <br />
                쉽게 확인할 수 있어요
              </>
            ) : (
              <>
                탭플레이스와 함께라면 이 모든 간편결제 가맹점을 쉽게 확인할 수
                있어요
              </>
            )}
          </h4>
          <PayLogoSlider />
          <article id="main2contentContainer_top" className="contentContainer">
            <div className="line0TitleContainer">
              <img
                src={require('../img/ServicePage/line0Left.png')}
                className="line0_Img"
                alt="line0Left"
              />
              <h1 id="main2_line0_top">가맹점 조회</h1>
            </div>
            <h1 id="main2_line1_top">
              내 주변 간편결제 가맹점을
              <br />
              한눈에 확인하세요
            </h1>
            <p id="main2_line2_top">
              이제 간편결제 안될까봐 걱정하지 마세요
              <br />
              결제 가능여부를 미리 알려드릴께요.
            </p>
          </article>
          <img
            id="main2_mockupImg_top"
            className="mockupImg"
            src={require('../img/ServicePage/mockup-2.png')}
            alt="mockup-2"
          />
          <div id="main2background">
            <article id="main2contentContainer_bottom">
              <div className="line0TitleContainer">
                <img
                  src={require('../img/ServicePage/line0Left2.png')}
                  className="line0_Img"
                  alt="line0Left"
                />
                <h1 id="main2_line0_bottom">가맹점 등록</h1>
              </div>
              <h1 id="main2_line1_bottom">
                새로운 가맹점을 발견하고
                <br />
                언제든지 등록해보세요
              </h1>
              <p id="main2_line2_bottom">
                언제 어디서든, 새로운 가맹점을 발견하면
                <br />
                간편하게 등록할 수 있어요
              </p>
              {windowX <= 768 && (
                <img
                  id="main2_mockupImg_bottom"
                  className="mockupImg"
                  src={require('../img/ServicePage/mockup-2.png')}
                  alt="mockup-2"
                />
              )}
            </article>
            {windowX > 768 && (
              <img
                id="main2_mockupImg_bottom"
                className="mockupImg"
                src={require('../img/ServicePage/mockup-2.png')}
                alt="mockup-2"
              />
            )}
          </div>
        </div>
        <Main4 />
        <IntroMember />
        <Download />
      </main>
      <Footer />
    </>
  );
}

export default Service;
