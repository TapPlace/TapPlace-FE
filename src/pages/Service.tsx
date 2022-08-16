import React, { useEffect, useRef, useState } from 'react';
import PayLogoSlider from '../components/PayLogoSlider';
import StoreButton from '../components/StoreButton';

import '../style/pages/Service.scss';
import Main4 from '../components/Main4';
import Member from '../components/Member';

function Service() {
  // 헤더 y축 스크롤
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  }, []);
  // 멤버 x축 스크롤 몇 퍼센트 스크롤
  const [scrollX, setScrollX]: any = useState();
  const memberSlider: any = document.querySelector('#memberSlider');
  function onScrollX() {
    let xPercent =
      memberSlider.scrollLeft === 0
        ? 0
        : (100 * memberSlider.scrollLeft) /
          (memberSlider.scrollWidth - memberSlider.clientWidth);
    setScrollX(xPercent * 10.3);
  }
  // 구한 퍼센트로 프로그레스바 움직임
  const scrollStyle = {
    left: scrollX,
  };

  return (
    <>
      <header id="serviceHeader">
        <h1 id="title">Tap Place</h1>
        <nav id="serviceNav">
          <ul>
            <li>
              <a
                className={scrollPosition < 2962 ? 'active' : ''}
                href="#mainContainer"
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
              >
                가맹점등록
              </a>
            </li>
            <li>
              <a
                className={scrollPosition >= 4242 ? 'active' : ''}
                href="#main3Container"
              >
                멤버소개
              </a>
            </li>
            <li>
              <a href="#main6">다운로드</a>
            </li>
          </ul>
        </nav>
      </header>
      <main id="mainContainer">
        <div id="main1Container">
          <article className="contentContainer">
            <h1 id="main1_line1" className="line1">
              간편결제 가맹점 확인
              <br /> 한곳에서 간편하게
            </h1>
            <p id="main1_line2" className="line2">
              힘들게 찾아다닐 필요없이 한번에 확인할 수 있어요
              <br />
              탭플레이스에서 내 주변 간편결제 가맹점을 확인해보세요
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
            탭플레이스와 함께라면 이 모든 간편결제 가맹점을 쉽게 확인할 수
            있어요
          </h4>
          <PayLogoSlider />
          <img
            id="main2_mockupImg"
            className="mockupImg"
            src={require('../img/mockup-2.png')}
            alt="mockup-2"
          />
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
          <div id="main2background">
            <article id="main3contentContainer">
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
            </article>
          </div>

          <img
            id="main2_mockupImg_bottom"
            className="mockupImg"
            src={require('../img/mockup-2.png')}
            alt="mockup-2"
          />
        </div>
        <Main4 />
        <div id="main3Container">
          <h1 id="main3title">탭플레이스 멤버들을 소개합니다</h1>
          <div id="memberSlider" onScroll={onScrollX}>
            {/* <div className="memberContainer">
              <img id="firstMember" src="" alt="" className="memberImg" />
              <div className="memberSubContainer">
                <h1 className="memberName">박상현</h1>
                <p className="memberPosition">IOS Developer</p>
              </div>
            </div> */}
            <Member name="박상현" position="IOS Developer" />
            <Member name="이상준" position="IOS Developer" />
            <Member name="지경희" position="Android Developer" />
            <Member name="김지훈" position="BackEnd Developer" />
            <Member name="임준혁" position="FrontEnd Developer" />
            <Member name="고은혜" position="UIUX Designer" />
          </div>
          <div id="memberProgressContainer">
            <div id="progressBar" style={scrollStyle} />
          </div>
        </div>
        {/* <div id="main6">
          <div id="main6Container">
            <h1 id="main6_line1">
              탭플레이스에서 쉽고 간편하게
              <br />
              가맹점을 확인하세요
            </h1>
            <p id="main6_line2">지금 내 주변의 간편결제 가맹점을 찾아보세요</p>
            <StoreButton />
          </div>
        </div> */}
      </main>
      <footer id="footer">
        <div id="footerContainer">
          <div id="footer_line1">
            <h4 id="footerTitle">Tap Place</h4>
            <ul id="footerList">
              <li className="footerItem">서비스 이용약관</li>
              <li className="footerItem">개인정보 처리방침</li>
              <li className="footerItem">E-mail : http://tapplace.co.kr</li>
            </ul>
          </div>
          <hr id="footerHr" />
          <h4 id="footer_line2">Copyright Tap Place.All rights reserved</h4>
        </div>
      </footer>
    </>
  );
}

export default Service;
