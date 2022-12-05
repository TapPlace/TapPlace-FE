import React from 'react';

import sns from '../../img/Service/SNSLogo/sns.webp';
import mail from '../../img/Service/SNSLogo/mail.webp';
import instargram from '../../img/Service/SNSLogo/instargram.webp';
import facebook from '../../img/Service/SNSLogo/facebook.webp';
import twitter from '../../img/Service/SNSLogo/twitte.webp';

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
      <img src={sns} alt='snsLogo' />
      <img src={mail} alt='mailLogo' />
      <img src={instargram} alt='instargramLogo' />
      <img src={facebook} alt='facebookLogo' />
      <img src={twitter} alt='twitterLogo' />
    </ul>
  );
};

export default SNSLogoContainer;
