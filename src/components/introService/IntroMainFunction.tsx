import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import PayLogoSlider from './PayLogoSlider';

import mock_2 from '../../img/Service/MockUp/mock_2.webp';
import mock_2_titleImg from '../../img/Service/MockUp/mock_2_titleImg.webp';
import mock_2_ex1 from '../../img/Service/MockUp/mock_2_ex1.webp';
import mock_2_ex2 from '../../img/Service/MockUp/mock_2_ex2.webp';

import mock_3 from '../../img/Service/MockUp/mock_3.webp';
import mock_3_titleImg from '../../img/Service/MockUp/mock_3_titleImg.webp';
import mock_3_ex from '../../img/Service/MockUp/mock_3_ex.webp';

import mock_4 from '../../img/Service/MockUp/mock_4.webp';
import mock_4_titleImg from '../../img/Service/MockUp/mock_4_titleImg.webp';

import '../../style/components/introService/IntroMainFunction.scss';

const IntroMainFunction = () => {
  const { windowX } = useAppSelector(state => state.resize);

  return (
    <div id='main2Container'>
      <h4 id='main2_lineTop'>
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
      <article id='storeInquiry' className='functionContainer'>
        {windowX < 768 ? (
          <>
            <div className='functionIntroContainer'>
              <div id='fTC1' className='functionTitleContainer'>
                <img src={mock_2_titleImg} alt='mock_2_titleImg' />
                <h1 className='functionTitle'>가맹점 조회</h1>
              </div>
              <h1 className='functionLine1'>
                내 주변 간편결제 가맹점을
                <br />
                한눈에 확인하세요
              </h1>
              <h1 className='functionLine2'>
                이제 간편결제 안될까봐 걱정하지 마세요
                <br />
                결제 가능여부를 미리 알려드릴께요.
              </h1>
            </div>
            <img src={mock_2} alt='mock_2' className='appScreenImg' />
            <img
              src={mock_2_ex1}
              alt='mock_2_ex1'
              className='appScreenPreviewImg'
              id='appScreenPreviewImgFirst'
            />
            <img
              src={mock_2_ex2}
              alt='mock_2_ex2'
              className='appScreenPreviewImg'
            />
          </>
        ) : (
          <>
            <img src={mock_2} alt='mock_2' className='appScreenImg' />
            <div className='functionIntroContainer'>
              <div id='fTC1' className='functionTitleContainer'>
                <img src={mock_2_titleImg} alt='mock_2_titleImg' />
                <h1 className='functionTitle'>가맹점 조회</h1>
              </div>
              <h1 className='functionLine1'>
                내 주변 간편결제 가맹점을
                <br />
                한눈에 확인하세요
              </h1>
              <h1 className='functionLine2'>
                이제 간편결제 안될까봐 걱정하지 마세요
                <br />
                결제 가능여부를 미리 알려드릴께요.
              </h1>
              <img
                src={mock_2_ex1}
                alt='mock_2_ex1'
                className='appScreenPreviewImg'
              />
              <img
                src={mock_2_ex2}
                alt='mock_2_ex2'
                className='appScreenPreviewImg'
              />
            </div>
          </>
        )}
      </article>
      <article id='paymentFeedback' className='functionContainer'>
        {windowX < 768 ? (
          <>
            <div className='functionIntroContainer'>
              <div className='functionTitleContainer'>
                <img
                  src={mock_3_titleImg}
                  alt='mock_3_titleImg'
                  id='feedbackIcon'
                />
                <h1 className='functionTitle'>결제수단 피드백</h1>
              </div>
              <h1 className='functionLine1'>
                최근 결제기록을 통해 확인하는
                <br />
                정확한 사용여부
              </h1>
              <h1 className='functionLine2'>
                직접 이용했던 사용자들의 피드백으로
                <br />
                원하는 결제수단의 사용여부를 확인할 수
                <br />
                있어요.
              </h1>
            </div>
            <img src={mock_3} alt='mock_3' className='appScreenImg' />
            <img
              src={mock_3_ex}
              alt='mock_3_ex'
              className='appScreenPreviewImg'
              id='appScreenFeedbackImg'
            />
          </>
        ) : (
          <>
            <div className='functionIntroContainer'>
              <div className='functionTitleContainer'>
                <img
                  src={mock_3_titleImg}
                  alt='mock_3_titleImg'
                  id='feedbackIcon'
                />
                <h1 className='functionTitle'>결제수단 피드백</h1>
              </div>
              <h1 className='functionLine1'>
                최근 결제기록을 통해
                <br />
                확인하는 정확한 사용여부
              </h1>
              <h1 className='functionLine2'>
                직접 이용했던 사용자들의 피드백으로
                <br />
                원하는 결제수단의 사용여부를 확인할 수
                <br />
                있어요.
              </h1>
              <img
                src={mock_3_ex}
                alt='mock_3_ex'
                className='appScreenPreviewImg'
                id='appScreenFeedbackImg'
              />
            </div>
            <img src={mock_3} alt='mock_3' className='appScreenImg' />
          </>
        )}
      </article>
      <article id='storeRegistration' className='functionContainer'>
        {windowX < 1024 ? (
          <>
            <div className='functionIntroContainer'>
              <div className='functionTitleContainer'>
                <img
                  src={mock_4_titleImg}
                  alt='mock_4_titleImg'
                  id='registrationIcon'
                />
                <h1 className='functionTitle'>가맹점 등록</h1>
              </div>
              <h1 className='functionLine1'>
                새로운 가맹점을 발견하면
                <br />
                검색하여 등록해보세요
              </h1>
              <h1 className='functionLine2'>
                언제 어디서든, 새로운 가맹점을 발견햐면
                <br />
                검색 한번으로 간편하게 등록할 수 있어요.
              </h1>
              <div id='regStepContainer'>
                <ul id='stepNumContainer'>
                  <li className='stepNum'>1</li>
                  <li className='stepNum'>2</li>
                  <li className='stepNum'>3</li>
                </ul>
                <div id='stepTextContainer'>
                  <h1 className='stepText'>가맹점 검색</h1>
                  <h1 className='stepText'>결제수단 피드백</h1>
                  <h1 className='stepText'>등록 완료</h1>
                </div>
              </div>
            </div>
            <div id='appScreenStoreRegImgBox'>
              <img src={mock_4} alt='mock_4' />
            </div>
          </>
        ) : (
          <>
            <div id='appScreenStoreRegImgBox'>
              <img src={mock_4} alt='mock_4' />
            </div>
            <div id='functionRegContainer' className='functionIntroContainer'>
              <div className='functionTitleContainer'>
                <img src={mock_4_titleImg} alt='mock_4_titleImg' />
                <h1 className='functionTitle'>가맹점 등록</h1>
              </div>
              <h1 className='functionLine1'>
                새로운 가맹점을 발견하면
                <br />
                검색하여 등록해보세요
              </h1>
              <h1 className='functionLine2'>
                언제 어디서든, 새로운 가맹점을 발견햐면
                <br />
                검색 한번으로 간편하게 등록할 수 있어요.
              </h1>
              <div id='regStepContainer'>
                <ul id='stepNumContainer'>
                  <li className='stepNum'>1</li>
                  <li className='stepNum'>2</li>
                  <li className='stepNum'>3</li>
                </ul>
                <div id='stepTextContainer'>
                  <h1 className='stepText'>가맹점 검색</h1>
                  <h1 className='stepText'>결제수단 피드백</h1>
                  <h1 className='stepText'>등록 완료</h1>
                </div>
              </div>
            </div>
          </>
        )}
      </article>
    </div>
  );
};

export default IntroMainFunction;
