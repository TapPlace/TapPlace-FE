import React, { useEffect, useState } from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../style/components/Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  // Nav 숨기기
  const [navToggle, setNavToggle] = useState('noshow');
  function navNoShow() {
    setNavToggle('noshow');
  }
  // 해당 헤더 메뉴 URL 이동 시 글자 색상 바뀌기
  function onMovePage(e: any) {
    document.querySelectorAll('.headerMenu').forEach(item => {
      item.className = 'headerMenu';
    });
    e.target.className = 'headerMenu active';
  }

  function onAlert() {
    alert('개발중인 페이지입니다.');
  }

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
            <Link to="/" className="headerMenu" onClick={onMovePage}>
              서비스 소개
            </Link>
          </li>
          <li>
            <Link to="/" className="headerMenu" onClick={onAlert}>
              공지사항
            </Link>
          </li>
          <li>
            <Link to="/" className="headerMenu" onClick={onAlert}>
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/" className="headerMenu" onClick={onAlert}>
              웹으로 이용하기
            </Link>
          </li>
        </ul>
      </nav>
      {navToggle === 'show' && <div id="navBackground" onClick={navNoShow} />}
    </header>
  );
}

export default Header;
