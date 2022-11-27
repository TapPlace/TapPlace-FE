import React, { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import SNSLogoContainer from './SNSLogoContainer';

import '../../style/components/introService/MemberImg.scss';

type MemberType = {
  id?: string;
  img: string;
  name: string;
  position: string;
  say?: string;
  sns?: any;
};

const MemberImg = ({ id, img, name, position, say, sns }: MemberType) => {
  const { windowX } = useAppSelector(state => state.resize);
  const [hover, setHover] = useState(false);

  return (
    <>
      <div className='memberContainer'>
        <img
          id={id}
          src={img}
          alt='memberImg'
          className='memberImg'
          onMouseOver={() => windowX >= 1024 && setHover(true)}
        />
        {hover && (
          <div className='memberHover' onMouseOut={() => setHover(false)}>
            <p>{say}</p>
            {/* <SNSLogoContainer snsLink={sns} /> */}
          </div>
        )}
        <div className='memberSubContainer'>
          <h1 className='memberName'>{name}</h1>
          <p className='memberPosition'>{position}</p>
          {windowX < 1024 && (
            <>
              <p className='memberSay'>{say}</p>
              {/* <SNSLogoContainer snsLink={sns} /> */}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MemberImg;
