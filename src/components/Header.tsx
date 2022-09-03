import React, { useEffect, useState } from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from '../redux/hooks';

import '../style/components/Header.scss';

function Header() {
  const { windowX } = useAppSelector(state => state.event);
  // Nav 숨기기
  function navNoShow() {
    setNavToggle('noshow');
  }
  // 헤더 y축 스크롤
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navToggle, setNavToggle] = useState('noshow');
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  const one: any = document.querySelector('#main1Container')?.scrollHeight;
  const two: any = document.querySelector('#main2Container')?.scrollHeight;
  const add: any = document.querySelector('#main4')?.scrollHeight;
  const addStorePosition = 59 + one + two;
  const memberIntroPosition = addStorePosition + add;

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <header id="serviceHeader">
      <h1 id="title">
        <img
          className="titleImg"
          src={require('../img/ServicePage/tap.png')}
          alt="TapPlace"
        />
        Tap Place
      </h1>
      {navToggle === 'noshow' && (
        <FontAwesomeIcon
          className="navToggleBtn"
          icon={faBars}
          onClick={() => {
            setNavToggle('show');
          }}
        />
      )}
      {navToggle === 'show' && (
        <FontAwesomeIcon
          className="navToggleBtn"
          icon={faXmark}
          onClick={navNoShow}
        />
      )}
      <nav
        className={navToggle === 'show' ? 'navShow' : 'navHide'}
        id="serviceNav"
      >
        <ul>
          <li>
            <a
              className={
                windowX <= 1023
                  ? scrollPosition < 2934
                    ? 'active'
                    : ''
                  : windowX > 1023 && scrollPosition < addStorePosition
                  ? 'active'
                  : ''
              }
              href="#mainContainer"
              onClick={navNoShow}
            >
              서비스
            </a>
          </li>
          <li>
            <a
              className={
                windowX <= 1023
                  ? scrollPosition >= 2934 && scrollPosition < 4174
                    ? 'active'
                    : ''
                  : windowX > 1023 &&
                    scrollPosition >= addStorePosition &&
                    scrollPosition < memberIntroPosition
                  ? 'active'
                  : ''
              }
              href="#main4"
              onClick={navNoShow}
            >
              가맹점등록
            </a>
          </li>
          <li>
            <a
              className={scrollPosition >= memberIntroPosition ? 'active' : ''}
              href="#main3Container"
              onClick={navNoShow}
            >
              멤버소개
            </a>
          </li>
          <li>
            <a href="#main6Container">다운로드</a>
          </li>
        </ul>
      </nav>
      {navToggle === 'show' && <div id="navBackground" onClick={navNoShow} />}
    </header>
  );
}

export default Header;
