import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  consentPage,
  initialPage,
  policyPage,
} from '../../redux/slices/showPage';

import '../../style/components/introService/Footer.scss';

function Footer() {
  const { windowX } = useAppSelector(state => state.event);
  const { page } = useAppSelector(state => state.page);
  const dispatch = useAppDispatch();

  return (
    <footer id="footer">
      <div id="footerContainer">
        <div id="footer_line1">
          {/* <h4 id="footerTitle">
            <img
              className="titleImg"
              src={require('../../img/ServicePage/tap2.png')}
              alt="tapplace"
            />
            Tap Place
          </h4> */}
          <Link
            to="/"
            onClick={() => {
              dispatch(initialPage());
            }}
          >
            <img id="footerLogo" src="img/tapplaceLogo2.png" alt="" />
          </Link>

          <ul id="footerList">
            <li className="footerItem">
              <Link
                to="/consent"
                onClick={() => {
                  dispatch(consentPage());
                }}
              >
                서비스 이용약관
              </Link>
            </li>
            <li className="footerItem">
              <Link
                to="/policy"
                onClick={() => {
                  dispatch(policyPage());
                }}
              >
                개인정보처리방침
              </Link>
            </li>
            <li className="footerItem">E-mail : help@tapplace.co.kr</li>
          </ul>
        </div>
        {windowX >= 768 && <hr id="footerHr" />}
        <h4 id="footer_line2">Copyright Tap Place.All rights reserved</h4>
      </div>
    </footer>
  );
}

export default Footer;
