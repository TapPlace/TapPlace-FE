import React, { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { SET_MEMBER_SCROLLX } from '../../redux/slices/resizeSlice';

import MemberImg from './MemberImg';

import '../../style/components/introService/IntroMember.scss';

const IntroMember = () => {
  const { windowX, memberScroll } = useAppSelector(state => state.resize);
  const dispatch = useAppDispatch();

  // 마우스로 x축 스크롤 구현
  const scrollRef: any = useRef(null);
  const [isDrag, setIsDrag]: any = useState(false);
  const [startX, setStartX]: any = useState();
  const onDragStart = (e: any) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };
  const onDragMove = (e: any) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
      scrollRef.current.scrollLeft = startX - e.pageX;
      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };
  const onDragEnd = () => {
    setIsDrag(false);
  };
  const throttle = (func: any, ms: any) => {
    let throttled = false;
    return (...args: any) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };
  const delay = 10;
  const onThrottleDragMove = throttle(onDragMove, delay);

  // 멤버 x축 스크롤 몇 퍼센트 스크롤
  const onScrollX = () => {
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
          SET_MEMBER_SCROLLX({
            scrollX: 0,
            scrollTransformX: 0,
          }),
        );
      } else {
        dispatch(
          SET_MEMBER_SCROLLX({
            scrollX: xPercent,
            scrollTransformX: xPercent + 100,
          }),
        );
      }
      // 데스크탑 시
    } else {
      dispatch(
        SET_MEMBER_SCROLLX({
          scrollX: xPercent * 0.5,
          scrollTransformX: 0,
        }),
      );
    }
  };

  // 구한 퍼센트로 프로그레스바 움직임
  const scrollStyle = {
    left: `${memberScroll.scrollX}%`,
    transform: `translateX(-${memberScroll.scrollTransformX}%)`,
  };

  return (
    <div id='main3Container'>
      <h1 id='main3title'>
        {windowX < 768 ? (
          <>
            탭플레이스 멤버들을
            <br /> 소개합니다
          </>
        ) : (
          <>탭플레이스 멤버들을 소개합니다</>
        )}
      </h1>
      <div
        id='memberSlider'
        onScroll={onScrollX}
        onMouseDown={onDragStart}
        onMouseMove={isDrag && onThrottleDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        ref={scrollRef}
      >
        <MemberImg
          name='박상현'
          img='img/ServicePage/Memoji/IOS1.png'
          position='IOS Developer'
          say='안녕하세요 아이폰 개발 박상현입니다'
          sns={{ mail: 'ios.humhae@gmail.com', instargram: '@pshyeonni' }}
        />
        <MemberImg
          name='이상준'
          img='img/ServicePage/Memoji/IOS2.png'
          position='IOS Developer'
          say='안녕하세요 앱 개발 이상준입니다'
        />
        <MemberImg
          name='지경희'
          img='img/ServicePage/Memoji/Android1.png'
          position='Android Developer'
          say='안녕하세요 앱 개발 지경희입니다'
        />
        <MemberImg
          name='김진욱'
          img='img/ServicePage/Memoji/Android2.png'
          position='Android Developer'
          say='안녕하세요 앱 개발 김진욱입니다'
        />
        <MemberImg
          name='김지훈'
          img='img/ServicePage/Memoji/Back.png'
          position='BackEnd Developer'
          say='안녕하세요 백엔드 김지훈입니다'
        />
        <MemberImg
          name='임준혁'
          img='img/ServicePage/Memoji/FrontWeb.png'
          position='FrontEnd Developer'
          say='안녕하세요 프론트엔드 임준혁입니다'
        />
        <MemberImg
          name='고은혜'
          img='img/ServicePage/Memoji/Design.png'
          position='UIUX Designer'
          say='안녕하세요 UI/UX 고은혜 입니다'
        />
      </div>
      <div id='memberProgressContainer'>
        <div id='progressBar' style={scrollStyle} />
      </div>
    </div>
  );
};

export default IntroMember;
