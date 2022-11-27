import React from 'react';

import '../../style/components/introService/SNSLogoContainer.scss';

const SNSLogoContainer = ({ snsLink }: any) => {
  // console.log(snsLink);
  // for (const key in snsLink) {
  //   console.log(key);
  //   console.log(snsLink[key]);
  //   switch (key) {
  //     case 'sns':
  //     case 'mail':
  //     case 'instargram':
  //     case 'facebook':
  //     case 'twitter':
  //   }
  // }
  // console.log(snsLink.mail);

  return (
    <ul className='snsLink'>
      {/* {code && <div dangerouslySetInnerHTML={{ __html: code }}></div>} */}
      <img
        src={require('../../img/ServicePage/SNSLogo/sns.png')}
        alt='snsLogo'
      />
      <img
        src={require('../../img/ServicePage/SNSLogo/mail.png')}
        alt='mailLogo'
      />
      <img
        src={require('../../img/ServicePage/SNSLogo/instargram.png')}
        alt='instargramLogo'
      />
      <img
        src={require('../../img/ServicePage/SNSLogo/facebook.png')}
        alt='facebookLogo'
      />
      <img
        src={require('../../img/ServicePage/SNSLogo/twitter.png')}
        alt='twitterLogo'
      />
    </ul>
  );
};

export default SNSLogoContainer;
