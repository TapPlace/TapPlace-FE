import React, { useEffect, useState } from 'react';
import PayLogoSlider from '../components/PayLogoSlider';
import StoreButton from '../components/StoreButton';

import '../style/pages/Service.scss';
import Main4 from '../components/Main4';
import Member from '../components/Member';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isMobile } from 'react-device-detect';

function Service() {
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
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  }, []);
  // 멤버 x축 스크롤 몇 퍼센트 스크롤
  const [scrollX, setScrollX]: any = useState();
  const [rightX, setRightX]: any = useState();
  const memberSlider: any = document.querySelector('#memberSlider');
  function onScrollX() {
    let xPercent =
      memberSlider.scrollLeft === 0
        ? 0
        : (100 * memberSlider.scrollLeft) /
          (memberSlider.scrollWidth - memberSlider.clientWidth);
    // setScrollX(xPercent * 10.3); 원래 PCver
    setScrollX(xPercent);
    setRightX(xPercent + 100);
    if (xPercent <= 10) setScrollX(10);
  }
  // 구한 퍼센트로 프로그레스바 움직임
  const scrollStyle = {
    left: `${scrollX}%`,
    transform: `translateX(-${rightX}%)`,
  };
  return (
    <>
      <header id="serviceHeader">
        <h1 id="title">Tap Place</h1>
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
                className={scrollPosition < 2962 ? 'active' : ''}
                href="#mainContainer"
                onClick={navNoShow}
              >
                서비스
              </a>
            </li>
            <li>
              <a
                className={
                  scrollPosition >= 2962 && scrollPosition < 4242
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
                className={scrollPosition >= 4242 ? 'active' : ''}
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
      </header>
      <main id="mainContainer">
        <div id="main1Container">
          <article className="contentContainer">
            <h1 id="main1_line1">
              간편결제 가맹점 확인
              <br /> 한곳에서 간편하게
            </h1>
            <p id="main1_line2">
              {isMobile ? (
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
            src={require('../img/mockup-1.png')}
            alt="mockup_1"
          />
        </div>
        <div id="main2Container">
          <h4 id="main2_lineTop">
            {isMobile ? (
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
            <h1 id="main2_line0_top">가맹점 조회</h1>
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
            src={require('../img/mockup-2.png')}
            alt="mockup-2"
          />
          <div id="main2background">
            <article id="main2contentContainer_bottom">
              <h1 id="main2_line0_bottom">가맹점 등록</h1>
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
              {isMobile && (
                <img
                  id="main2_mockupImg_bottom"
                  className="mockupImg"
                  src={require('../img/mockup-2.png')}
                  alt="mockup-2"
                />
              )}
            </article>
          </div>
          {isMobile === false && (
            <img
              id="main2_mockupImg_bottom"
              className="mockupImg"
              src={require('../img/mockup-2.png')}
              alt="mockup-2"
            />
          )}
        </div>
        <Main4 />
        <div id="main3Container">
          <h1 id="main3title">
            {isMobile ? (
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
            {isMobile ? (
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
            {isMobile ? (
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
            <h4 id="footerTitle">Tap Place</h4>
            <ul id="footerList">
              <li className="footerItem">서비스 이용약관</li>
              <li className="footerItem">개인정보처리방침</li>
              <li className="footerItem">E-mail : http://tapplace.co.kr</li>
            </ul>
          </div>
          {isMobile === false && <hr id="footerHr" />}
          <h4 id="footer_line2">Copyright Tap Place.All rights reserved</h4>
        </div>
      </footer>
    </>
  );
}

export default Service;
