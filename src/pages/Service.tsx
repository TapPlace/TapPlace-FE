import React from 'react';
import TapPlaceAppLogo from '../components/TapPlaceAppLogo';
import PayLogoSlider from '../components/PayLogoSlider';
import StoreButton from '../components/StoreButton';

import '../style/pages/Service.scss';
import Main4 from '../components/Main4';

function Service() {
  return (
    <>
      <header id="serviceHeader">
        <h1 id="title">Tap Place</h1>
        <nav id="serviceNav">
          <ul>
            <li>
              <a href="#main1">서비스</a>
            </li>
            <li>
              <a href="#main4">가맹점등록</a>
            </li>
            <li>
              <a href="#main5">멤버소개</a>
            </li>
            <li>
              <a href="#main6">다운로드</a>
            </li>
          </ul>
        </nav>
      </header>
      <main id="mainContainer">
        <div id="main1">
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
              id="main1_mokupImg"
              className="mokupImg"
              src={require('../img/mokup-1.png')}
              alt="mokup"
            />
          </div>
        </div>
        <div id="main2">
          <h4 id="main2_lineTop">
            탭플레이스와 함께라면 이 모든 간편결제 가맹점을 쉽게 확인할 수
            있어요
          </h4>
          <PayLogoSlider />
          <img
            id="main2_mokupImg"
            className="mokupImg"
            src={require('../img/mokup-2.png')}
            alt="mokup-2"
          />
          <article id="main2contentContainer" className="contentContainer">
            <TapPlaceAppLogo />
            <h1 id="main2_line1">
              내 주변 간편결제 가맹점을
              <br />
              한눈에 확인하세요
            </h1>
            <p id="main2_line2">
              이제 간편결제 안될까봐 걱정하지 마세요
              <br />
              결제 가능여부를 미리 알려드릴께요.
            </p>
          </article>
        </div>
        <div id="main3">
          <div id="main3Container">
            <article id="main3contentContainer">
              <TapPlaceAppLogo />
              <h1 id="main3_line1">
                새로운 가맹점을 발견하고
                <br />
                언제든지 등록해보세요
              </h1>
              <p id="main3_line2">
                언제 어디서든, 새로운 가맹점을 발견하면
                <br />
                간편하게 등록할 수 있어요
              </p>
            </article>
            <img
              id="main3_mokupImg"
              className="mokupImg"
              src={require('../img/mokup-3.png')}
              alt="mokup-3"
            />
          </div>
        </div>
        <Main4 />
        <div id="main5">
          <div id="main5Container">
            <h1 id="main5_title">편리한 서비스를 만듭니다</h1>
            <div id="main5subContainer">
              <div className="developerContainer" id="developer1">
                <img src="" alt="" className="developerImg" />
                <div className="developerText">
                  <h1 className="developerName">홍길동</h1>
                  <p className="developerPart">디자이너</p>
                  <p className="developerWord">
                    UI 디자인, 로고, 웹디자인, PC프로그램 디자인까지 모든 것을
                    시도하고 발전해 나갈 수 있는 뜻깊은 시간이 되었다
                  </p>
                </div>
              </div>
              <div className="developerContainer" id="developer2">
                <img src="" alt="" className="developerImg" />
                <div className="developerText">
                  <h1 className="developerName">홍길동</h1>
                  <p className="developerPart">디자이너</p>
                  <p className="developerWord">
                    UI 디자인, 로고, 웹디자인, PC프로그램 디자인까지 모든 것을
                    시도하고 발전해 나갈 수 있는 뜻깊은 시간이 되었다
                  </p>
                </div>
              </div>
              <div className="developerContainer" id="developer3">
                <img src="" alt="" className="developerImg" />
                <div className="developerText">
                  <h1 className="developerName">홍길동</h1>
                  <p className="developerPart">디자이너</p>
                  <p className="developerWord">
                    UI 디자인, 로고, 웹디자인, PC프로그램 디자인까지 모든 것을
                    시도하고 발전해 나갈 수 있는 뜻깊은 시간이 되었다
                  </p>
                </div>
              </div>
              <div className="developerContainer" id="developer4">
                <img src="" alt="" className="developerImg" />
                <div className="developerText">
                  <h1 className="developerName">홍길동</h1>
                  <p className="developerPart">디자이너</p>
                  <p className="developerWord">
                    UI 디자인, 로고, 웹디자인, PC프로그램 디자인까지 모든 것을
                    시도하고 발전해 나갈 수 있는 뜻깊은 시간이 되었다
                  </p>
                </div>
              </div>
              <div className="developerContainer" id="developer5">
                <img src="" alt="" className="developerImg" />
                <div className="developerText">
                  <h1 className="developerName">홍길동</h1>
                  <p className="developerPart">디자이너</p>
                  <p className="developerWord">
                    UI 디자인, 로고, 웹디자인, PC프로그램 디자인까지 모든 것을
                    시도하고 발전해 나갈 수 있는 뜻깊은 시간이 되었다
                  </p>
                </div>
              </div>
              <div className="developerContainer" id="developer6">
                <img src="" alt="" className="developerImg" />
                <div className="developerText">
                  <h1 className="developerName">홍길동</h1>
                  <p className="developerPart">디자이너</p>
                  <p className="developerWord">
                    UI 디자인, 로고, 웹디자인, PC프로그램 디자인까지 모든 것을
                    시도하고 발전해 나갈 수 있는 뜻깊은 시간이 되었다
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="main6">
          <div id="main6Container">
            <h1 id="main6_line1">
              탭플레이스에서 쉽고 간편하게
              <br />
              가맹점을 확인하세요
            </h1>
            <p id="main6_line2">지금 내 주변의 간편결제 가맹점을 찾아보세요</p>
            <StoreButton />
          </div>
        </div>
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
