import React from 'react';
import { Link } from 'react-router-dom';
import AppLogo from '../components/AppLogo';

import '../style/pages/Service.scss';

function Service() {
  return (
    <>
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
              <h1 id="main1_line1" className="line1">
                간편결제 가맹점 확인
                <br /> 한곳에서 간편하게
              </h1>
              <p id="main1_line2" className="line2">
                힘들게 찾아다닐 필요없이 한번에 확인할 수 있어요
                <br />
                탭플레이스에서 내 주변 간편결제 가맹점을 확인해보세요
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
              className="mokupImg"
              src={require('../img/mokup-1.png')}
              alt="mokup"
            />
          </div>
        </div>
        <div id="main2" className="mainDivideContainer">
          <h4 id="main2_lineTop">
            탭플레이스와 함께라면 이 모든 간편결제 가맹점을 쉽게 확인할 수
            있어요
          </h4>
          <div id="main2LogoContainer">
            <img src={require('../img/visa.png')} alt="visaLogo" />
            <img src={require('../img/payco.png')} alt="paycoLogo" />
            <img src={require('../img/apple.png')} alt="appleLogo" />
            <img src={require('../img/zero.png')} alt="zeroLogo" />
            <img src={require('../img/google.png')} alt="googleLogo" />
            <img src={require('../img/kakao.png')} alt="kakaoLogo" />
            <img src={require('../img/naver.png')} alt="naverLogo" />
            <img src={require('../img/master.png')} alt="masterLogo" />
          </div>
          <img
            id="main2_mokupImg"
            className="mokupImg"
            src={require('../img/mokup-2.png')}
            alt="mokup-2"
          />
          <article id="main2contentContainer" className="contentContainer">
            <AppLogo />
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
        <div id="main3" className="mainDivideContainer">
          <div id="main3Container">
            <article id="main3contentContainer">
              <AppLogo />
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
        <div id="main4" className="mainDivideContainer">
          <div id="main4Container">
            <h1 id="main4_title">신규 가맹점 등록</h1>
            <p id="main4_subTitle">
              현재까지<h4 id="main4_subTitleCnt">835</h4>개의 가맹점이
              등록되었습니다
            </p>
            <form id="addStoreForm">
              <h4 className="addStoreFormExplain">가맹점 이름</h4>
              <input
                type="text"
                name="storeName"
                className="main4InputText"
                placeholder="예) CU 역삼점, CU 강남논현타운점"
              />
              <h4 className="addStoreFormExplain">가맹점 주소</h4>
              <input
                type="text"
                name="storeAddress"
                className="main4InputText"
                placeholder="예) 서울 강남구 테헤란로51길 10"
              />
              <h4 className="addStoreFormExplain">결제수단</h4>
              <div className="checkboxContainer">
                <div className="clickBtn">카카오페이</div>
                <div className="clickBtn">네이버페이</div>
                <div className="clickBtn">페이코</div>
                <div className="clickBtn">제로페이</div>
                <div className="clickBtn">미래에셋페이</div>
              </div>
              <p className="paymentMethod">애플페이</p>
              <div className="checkboxContainer">
                <div className="clickBtn">zen</div>
                <div className="clickBtn">vivid</div>
                <div className="clickBtn">wise</div>
                <div className="clickBtn">N26</div>
                <div className="clickBtn">monzo</div>
                <div className="clickBtn">monese</div>
                <div className="clickBtn">giftcard[MASTER]</div>
              </div>
              <p className="paymentMethod">구글페이</p>
              <div className="checkboxContainer">
                <div className="clickBtn">zen</div>
                <div className="clickBtn">vivid</div>
                <div className="clickBtn">wise</div>
                <div className="clickBtn">N26</div>
                <div className="clickBtn">bunq</div>
              </div>
              <p className="paymentMethod">컨택리스 카드</p>
              <div className="checkboxContainer">
                <div className="clickBtn">VISA</div>
                <div className="clickBtn">MASTER CARD</div>
                <div className="clickBtn">AMERICAN EXPRESS</div>
                <div className="clickBtn">Union Pay</div>
                <div className="clickBtn">JCB</div>
              </div>
              <h4 className="addStoreFormExplain">등록자 닉네임</h4>
              <input
                type="text"
                name=""
                className="main4InputText"
                placeholder="닉네임을 알려주세요"
              />
              <button id="submitBtn">등록하기</button>
            </form>
          </div>
        </div>
        <div id="main5" className="mainDivideContainer">
          메인5
        </div>
        <div id="main6" className="mainDivideContainer">
          메인6
        </div>
      </main>
      <footer id="footer">푸터</footer>
    </>
  );
}

export default Service;
