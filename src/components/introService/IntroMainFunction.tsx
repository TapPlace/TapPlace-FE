import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import PayLogoSlider from './PayLogoSlider';

import '../../style/components/introService/IntroMainFunction.scss';

function IntroMainFunction() {
  const { windowX } = useAppSelector(state => state.event);

  return (
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
      <article id="storeInquiry" className="functionContainer">
        <img
          src={require('../../img/ServicePage/appScreenInquiry.png')}
          alt="appScreenInquiry"
          className="appScreenImg"
        />
        <div className="functionIntroContainer">
          <div className="functionTitle">
            <img
              src={require('../../img/ServicePage/inquiryIcon.png')}
              alt="inquiryIcon"
            />
            <h1 className="functionTitle">가맹점 조회</h1>
          </div>
          <h1 className="functionLine1">
            내 주변 간편결제 가맹점을
            <br />
            한눈에 확인하세요
          </h1>
          <h1 className="functionLine2">
            이제 간편결제 안될까봐 걱정하지 마세요
            <br />
            결제 가능여부를 미리 알려드릴께요.
          </h1>
          <img
            src={require('../../img/ServicePage/appScreenInquiryImg1.png')}
            alt="appScreenInquiryImg1"
            className="appScreenPreviewImg"
          />
          <img
            src={require('../../img/ServicePage/appScreenInquiryImg2.png')}
            alt="appScreenInquiryImg2"
            className="appScreenPreviewImg"
          />
        </div>
      </article>
      <article id="paymentFeedback" className="functionContainer">
        <div className="functionIntroContainer">
          <div className="functionTitle">
            <img
              src={require('../../img/ServicePage/feedbackIcon.png')}
              alt="feedbackIcon"
            />
            <h1 className="functionTitle">가맹점 피드백</h1>
          </div>
          <h1 className="functionLine1">
            최근 결제기록을 통해
            <br />
            확인하는 정확한 사용여부
          </h1>
          <h1 className="functionLine2">
            직접 이용했던 사용자들의 피드백으로
            <br />
            원하는 결제수단의 사용여부를 확인할 수 있어요.
          </h1>
          <img
            src={require('../../img/ServicePage/appScreenFeedbackImg.png')}
            alt="appScreenFeedbackImg"
            className="appScreenPreviewImg"
          />
        </div>
        <img
          src={require('../../img/ServicePage/appScreenFeedback.png')}
          alt="appScreenFeedback"
          className="appScreenImg"
        />
      </article>
      <article id="storeRegistration" className="functionContainer"></article>
      {/* <img
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
      </div> */}
    </div>
  );
}

export default IntroMainFunction;
