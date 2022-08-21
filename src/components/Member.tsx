import React from 'react';
import { isBrowser } from 'react-device-detect';

import '../style/components/Member.scss';

type MemberType = {
  id?: string;
  name: string;
  position: string;
  say?: string;
};

function Member({ id, name, position, say }: MemberType) {
  return (
    <div className="memberContainer">
      <img id={id} src="" alt="" className="memberImg" />
      <div className="memberSubContainer">
        <h1 className="memberName">{name}</h1>
        <p className="memberPosition">{position}</p>
        {isBrowser === false ? <p className="memberSay">{say}</p> : <></>}
      </div>
    </div>
  );
}

export default Member;
