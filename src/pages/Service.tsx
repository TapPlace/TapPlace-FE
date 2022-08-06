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
          메인
        </div>
        <div id="main2" className="mainDivideContainer">
          메인
        </div>
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
