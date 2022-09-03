import React, { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import SNSLogoContainer from './SNSLogoContainer';

import '../../style/components/introService/Member.scss';

type MemberType = {
  id?: string;
  name: string;
  position: string;
  say?: string;
};

function MemberImg({ id, name, position, say }: MemberType) {
  const { windowX } = useAppSelector(state => state.event);
  const [hover, setHover] = useState(false);

  return (
    <>
      <div className="memberContainer">
        <img
          id={id}
          src=""
          alt=""
          className="memberImg"
          onMouseOver={() => windowX >= 1024 && setHover(true)}
        />
        {hover && (
          <div className="memberHover" onMouseOut={() => setHover(false)}>
            <p>{say}</p>
            <SNSLogoContainer />
          </div>
        )}
        <div className="memberSubContainer">
          <h1 className="memberName">{name}</h1>
          <p className="memberPosition">{position}</p>
          {windowX < 1024 && (
            <>
              <p className="memberSay">{say}</p>
              <SNSLogoContainer />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default MemberImg;
