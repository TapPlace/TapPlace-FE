import React from 'react';
import { Link } from 'react-router-dom';

import '../style/pages/Service.scss';

function Service() {
  return (
    <div id="serviceContainer">
      <header id="serviceHeader">
        <h1 id="title">Tap Place</h1>
        <nav id="serviceNav">
          <ul>
            <li>
              <Link to="#main1">서비스</Link>
            </li>
            <li>
              <Link to="#main2">가맹점등록</Link>
            </li>
            <li>
              <Link to="#main3">멤버소개</Link>
            </li>
            <li>
              <Link to="#main4">다운로드</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main id="mainContainer">
        <div id="main1" className="mainDivideContainer">
          <div id="main1Container">
            <article className="contentContainer">
              <h1>
                간편결제 가맹점 확인
                <br /> 한곳에서 간편하게
              </h1>
              <p>
                힘들게 찾아다닐 필요없이 한번에 확인할 수 있어요.
                <br />
                탭플레이스에서 내 주변 간편결제 가맹점을 확인해보세요.
              </p>
              <ul id="logoContainer">
                <li>
                  <Link to="/">
                    <img
                      src={require('../img/appleLogo.png')}
                      alt="appleLogo"
                    />
                    <p>App Store</p>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img
                      src={require('../img/googleLogo.png')}
                      alt="appleLogo"
                    />
                    <p>Play Store</p>
                  </Link>
                </li>
              </ul>
            </article>
            <img
              id="main1_mokupImg"
              src={require('../img/mokup-1.png')}
              alt="mokup"
            />
          </div>
        </div>
        <div id="main2" className="mainDivideContainer"></div>
        <div id="main3" className="mainDivideContainer">
          메인
        </div>
        <div id="main4" className="mainDivideContainer">
          메인
        </div>
      </main>
      <footer id="footer">푸터</footer>
    </div>
  );
}

export default Service;
