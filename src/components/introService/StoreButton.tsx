import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

import store_appleLogo from '../../img/Service/StoreDownload/store_appleLogo.webp';
import store_googleLogo from '../../img/Service/StoreDownload/store_googleLogo.webp';
import store_download from '../../img/Service/StoreDownload/store_download.webp';

import '../../style/components/introService/StoreButton.scss';

const StoreButton = () => {
  const { windowX } = useAppSelector(state => state.resize);
  const appStoreAddress =
    'https://apps.apple.com/app/%ED%83%AD%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4/id1643830783';

  // 현재 다운로드가 안되서 알람 띄우기
  const onDownload = () => {
    alert('서비스 준비중 입니다');
  };

  return (
    <ul id='logoContainer'>
      {windowX < 768 ? (
        <>
          <li>
            <a
              href={appStoreAddress}
              target='_blank'
              className='mobileStoreBtn'
              rel='noreferrer'
            >
              <img src={store_download} alt='download' />앱 다운로드
            </a>
          </li>
          <li>
            <Link to='/playapp' id='mobileBtnSecond' className='mobileStoreBtn'>
              웹으로 이용하기
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <a
              href={appStoreAddress}
              target='_blank'
              className='storeBtn'
              rel='noreferrer'
            >
              <img src={store_appleLogo} alt='appleLogo' />
              <p>App Store</p>
            </a>
          </li>
          <li onClick={onDownload}>
            <Link className='storeBtn' to='/'>
              <img src={store_googleLogo} alt='googleLogo' />
              <p>Play Store</p>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default StoreButton;
