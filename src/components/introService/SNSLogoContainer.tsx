import React from 'react';

import '../../style/components/introService/SNSLogoContainer.scss';

function SNSLogoContainer() {
  return (
    <ul className="snsLink">
      <img
        src={require('../../img/ServicePage/SNSLogo/sns.png')}
        alt="snsLogo"
      />
      <img
        src={require('../../img/ServicePage/SNSLogo/mail.png')}
        alt="mailLogo"
      />
      <img
        src={require('../../img/ServicePage/SNSLogo/instargram.png')}
        alt="instargramLogo"
      />
      <img
        src={require('../../img/ServicePage/SNSLogo/facebook.png')}
        alt="facebookLogo"
      />
      <img
        src={require('../../img/ServicePage/SNSLogo/twitter.png')}
        alt="twitterLogo"
      />
    </ul>
  );
}

export default SNSLogoContainer;
