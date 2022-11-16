import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

import '../../style/components/introService/StoreButton.scss';

function StoreButton() {
  const { windowX } = useAppSelector(state => state.resize);

  // 현재 다운로드가 안되서 알람 띄우기
  function onDownload() {
    alert('서비스 준비중 입니다');
  }

  return (
    <ul id='logoContainer'>
      {windowX < 768 ? (
        <>
          <li>
            <Link to='/' className='mobileStoreBtn' onClick={onDownload}>
              <FontAwesomeIcon icon={faDownload} />앱 다운로드
            </Link>
          </li>
          <li>
            <Link
              to='/'
              id='mobileBtnSecond'
              className='mobileStoreBtn'
              onClick={onDownload}
            >
              웹으로 이용하기
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <a
              href='https://apps.apple.com/app/%ED%83%AD%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4/id1643830783'
              target='_blank'
              className='storeBtn'
              rel='noreferrer'
            >
              <img src='img/ServicePage/appleLogo.png' alt='appleLogo' />
              <p>App Store</p>
            </a>
          </li>
          <li onClick={onDownload}>
            <Link className='storeBtn' to='/'>
              <img src='img/ServicePage/googleLogo.png' alt='googleLogo' />
              <p>Play Store</p>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}

export default StoreButton;
