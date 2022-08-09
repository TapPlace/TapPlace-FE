import React from 'react';
import { Link } from 'react-router-dom';
import AppLogo from '../components/AppLogo';
import StoreButton from '../components/StoreButton';

import '../style/pages/Service.scss';

function Service() {
  return (
    <div id="noneScroll">
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
        <div id="main3">
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
        <div id="main4">
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
    </div>
  );
}

export default Service;
