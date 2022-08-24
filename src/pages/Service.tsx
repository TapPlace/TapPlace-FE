import React, { useEffect, useState } from 'react';
import PayLogoSlider from '../components/PayLogoSlider';
import StoreButton from '../components/StoreButton';

import '../style/pages/Service.scss';
import Main4 from '../components/Main4';
import Member from '../components/Member';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setMemberScrollX, setResize } from '../redux/slices/eventSlice';

function Service() {
  const { windowX, memberScroll } = useAppSelector(state => state.event);
  const dispatch = useAppDispatch();
  // Nav 숨기기
  function navNoShow() {
    setNavToggle('noshow');
  }
  // 헤더 y축 스크롤
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navToggle, setNavToggle] = useState('noshow');
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  const one: any = document.querySelector('#main1Container')?.scrollHeight;
  const two: any = document.querySelector('#main2Container')?.scrollHeight;
  const add: any = document.querySelector('#main4')?.scrollHeight;
  const addStorePosition = 59 + one + two;
  const memberIntroPosition = addStorePosition + add;
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    window.addEventListener('resize', () => {
      dispatch(setResize(window.innerWidth));
    });
  });
  // 멤버 x축 스크롤 몇 퍼센트 스크롤
  const memberSlider: any = document.querySelector('#memberSlider');
  function onScrollX() {
    let xPercent =
      memberSlider.scrollLeft === 0
        ? 0
        : (100 * memberSlider.scrollLeft) /
          (memberSlider.scrollWidth - memberSlider.clientWidth);
    // 모바일, 태블릿 시
    if (windowX <= 1024) {
      if (xPercent <= 10) {
        dispatch(
          setMemberScrollX({
            scrollX: 0,
            scrollTransformX: 0,
          }),
        );
      } else {
        dispatch(
          setMemberScrollX({
            scrollX: xPercent,
            scrollTransformX: xPercent + 100,
          }),
        );
      }
      // 데스크탑 시
    } else {
      dispatch(
        setMemberScrollX({
          scrollX: xPercent * 0.5,
          scrollTransformX: 0,
        }),
      );
    }
  }
  // 구한 퍼센트로 프로그레스바 움직임
  const scrollStyle = {
    left: `${memberScroll.scrollX}%`,
    transform: `translateX(-${memberScroll.scrollTransformX}%)`,
  };

  return (
    <>
      <header id="serviceHeader">
        <h1 id="title">
          <img
            className="titleImg"
            src={require('../img/ServicePage/tap.png')}
            alt="TapPlace"
          />
          Tap Place
        </h1>
        {navToggle === 'noshow' && (
          <FontAwesomeIcon
            className="navToggleBtn"
            icon={faBars}
            onClick={() => {
              setNavToggle('show');
            }}
          />
        )}
        {navToggle === 'show' && (
          <FontAwesomeIcon
            className="navToggleBtn"
            icon={faXmark}
            onClick={navNoShow}
          />
        )}
        <nav
          className={navToggle === 'show' ? 'navShow' : 'navHide'}
          id="serviceNav"
        >
          <ul>
            <li>
              <a
                className={
                  windowX <= 1023
                    ? scrollPosition < 2934
                      ? 'active'
                      : ''
                    : windowX > 1023 && scrollPosition < addStorePosition
                    ? 'active'
                    : ''
                }
                href="#mainContainer"
                onClick={navNoShow}
              >
                서비스
              </a>
            </li>
            <li>
              <a
                className={
                  windowX <= 1023
                    ? scrollPosition >= 2934 && scrollPosition < 4174
                      ? 'active'
                      : ''
                    : windowX > 1023 &&
                      scrollPosition >= addStorePosition &&
                      scrollPosition < memberIntroPosition
                    ? 'active'
                    : ''
                }
                href="#main4"
                onClick={navNoShow}
              >
                가맹점등록
              </a>
            </li>
            <li>
              <a
                className={
                  scrollPosition >= memberIntroPosition ? 'active' : ''
                }
                href="#main3Container"
                onClick={navNoShow}
              >
                멤버소개
              </a>
            </li>
            <li>
              <a href="#none">다운로드</a>
            </li>
          </ul>
        </nav>
        {navToggle === 'show' && <div id="navBackground" onClick={navNoShow} />}
      </header>
      <main id="mainContainer">
        <div id="main1Container">
          <article className="contentContainer">
            <h1 id="main1_line1">
              간편결제 가맹점 확인
              <br /> 한곳에서 간편하게
            </h1>
            <p id="main1_line2">
              {windowX <= 768 ? (
                <>
                  힘들게 찾아다닐 필요없이
                  <br />
                  한번에 확인할 수 있어요
                  <br />
                  탭플레이스에서
                  <br />내 주변 간편결제 가맹점을
                  <br />
                  확인해보세요
                </>
              ) : (
                <>
                  힘들게 찾아다닐 필요없이 한번에 확인할 수 있어요
                  <br />
                  탭플레이스에서 내 주변 간편결제 가맹점을 확인해보세요
                </>
              )}
            </p>
            <StoreButton />
          </article>
          <img
            id="main1_mockupImg"
            className="mockupImg"
            src={require('../img/ServicePage/mockup-1.png')}
            alt="mockup_1"
          />
        </div>
        <div id="main2Container">
          <h4 id="main2_lineTop">
            {windowX <= 768 ? (
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
        <div id="main3Container">
          <h1 id="main3title">
            {windowX <= 768 ? (
              <>
                탭플레이스 멤버들을
                <br /> 소개합니다
              </>
            ) : (
              <>탭플레이스 멤버들을 소개합니다</>
            )}{' '}
          </h1>
          <div id="memberSlider" onScroll={onScrollX}>
            <Member
              name="박상현"
              position="IOS Developer"
              say="안녕하세요 ~~~파트 ~~~입니다"
            />
            <Member
              name="이상준"
              position="IOS Developer"
              say="안녕하세요 ~~~파트 ~~~입니다"
            />
            <Member
              name="지경희"
              position="Android Developer"
              say="안녕하세요 ~~~파트 ~~~입니다"
            />
            <Member
              name="김지훈"
              position="BackEnd Developer"
              say="안녕하세요 ~~~파트 ~~~입니다"
            />
            <Member
              name="임준혁"
              position="FrontEnd Developer"
              say="안녕하세요 ~~~파트 ~~~입니다"
            />
            <Member
              name="고은혜"
              position="UIUX Designer"
              say="안녕하세요 ~~~파트 ~~~입니다"
            />
          </div>
          <div id="memberProgressContainer">
            <div id="progressBar" style={scrollStyle} />
          </div>
        </div>
        <div id="main6Container">
          <h1 id="main6_line1">
            {windowX <= 768 ? (
              <>
                지금 탭플레이스를 다운받고
                <br />내 주변 간편결제 가맹점을
                <br />
                바로 확인해보세요
              </>
            ) : (
              <>
                지금 탭플레이스를 다운받고
                <br />내 주변 간편결제 가맹점을 바로 확인해보세요
              </>
            )}
          </h1>
          <p id="main6_line2">
            {windowX <= 768 ? (
              <>
                지금 내 주변의
                <br />
                간편결제 가맹점을 찾아보세요
              </>
            ) : (
              <>지금 내 주변의 간편결제 가맹점을 찾아보세요</>
            )}
          </p>
          <StoreButton />
        </div>
      </main>
      <footer id="footer">
        <div id="footerContainer">
          <div id="footer_line1">
            <h4 id="footerTitle">
              <img
                className="titleImg"
                src={require('../img/ServicePage/tap2.png')}
                alt="tapplace"
              />
              Tap Place
            </h4>
            <ul id="footerList">
              <li className="footerItem">서비스 이용약관</li>
              <li className="footerItem">개인정보처리방침</li>
              <li className="footerItem">E-mail : help@tapplace.co.kr</li>
            </ul>
          </div>
          {windowX > 768 && <hr id="footerHr" />}
          <h4 id="footer_line2">Copyright Tap Place.All rights reserved</h4>
        </div>
      </footer>
    </>
  );
}

export default Service;
