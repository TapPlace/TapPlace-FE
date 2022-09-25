import React, { useState } from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../style/components/Header.scss';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { initialPage, playAppPage } from '../redux/slices/showPage';

function Header() {
  const { page } = useAppSelector(state => state.page);
  const dispatch = useAppDispatch();

  // Nav 숨기기
  const [navToggle, setNavToggle] = useState('noshow');
  function navNoShow() {
    setNavToggle('noshow');
  }

  function onAlert() {
    alert('서비스 준비중입니다.');
  }

  return (
    <header id="serviceHeader">
      <img
        id="mainLogo"
        src={require('../img/tapplaceLogo.png')}
        alt="tapplaceLogo"
        onClick={() => {
          window.location.href = '/';
        }}
      />
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
            <Link
              to="/"
              className={page === '' ? 'headerMenu active' : 'headerMenu'}
              onClick={() => {
                dispatch(initialPage());
              }}
            >
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
            <Link
              to="/"
              className={
                page === 'playapp' ? 'headerMenu active' : 'headerMenu'
              }
              onClick={onAlert}
            >
              웹으로 이용하기
            </Link>
            {/* <Link
              to="/playapp"
              className={
                page === 'playapp' ? 'headerMenu active' : 'headerMenu'
              }
              onClick={() => {
                dispatch(playAppPage());
              }}
            >
              웹으로 이용하기
            </Link> */}
          </li>
        </ul>
      </nav>
      {navToggle === 'show' && <div id="navBackground" onClick={navNoShow} />}
    </header>
  );
}

export default Header;
