import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setMemberScrollX } from '../../redux/slices/eventSlice';

import MemberImg from './MemberImg';

import '../../style/components/introService/IntroMember.scss';

function IntroMember() {
  const { windowX, memberScroll } = useAppSelector(state => state.event);
  const dispatch = useAppDispatch();

  // 멤버 x축 스크롤 몇 퍼센트 스크롤
  function onScrollX() {
    const memberSlider: any = document.querySelector('#memberSlider');
    let xPercent =
      memberSlider.scrollLeft === 0
        ? 0
        : (100 * memberSlider.scrollLeft) /
          (memberSlider.scrollWidth - memberSlider.clientWidth);
    // 모바일, 태블릿 시
    if (windowX < 1024) {
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
        <MemberImg
          name="박상현"
          position="IOS Developer"
          say='"안녕하세요 아이폰 개발 파트 박상현입니다"'
        />
        <MemberImg
          name="이상준"
          position="IOS Developer"
          say='"안녕하세요 앱 개발 이상준입니다"'
        />
        <MemberImg
          name="지경희"
          position="Android Developer"
          say='"안녕하세요 앱 개발 지경희입니다"'
        />
        <MemberImg
          name="김지훈"
          position="BackEnd Developer"
          say='"안녕하세요 웹 백엔드 김지훈입니다"'
        />
        <MemberImg
          name="임준혁"
          position="FrontEnd Developer"
          say='"안녕하세요 웹 프론트엔드 임준혁입니다"'
        />
        <MemberImg
          name="고은혜"
          position="UIUX Designer"
          say='"안녕하세요 UI/UX 고은혜 입니다"'
        />
      </div>
      <div id="memberProgressContainer">
        <div id="progressBar" style={scrollStyle} />
      </div>
    </div>
  );
}

export default IntroMember;
