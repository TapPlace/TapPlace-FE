import React from 'react';

import '../style/components/Member.scss';

type MemberType = {
  id?: string;
  name: string;
  position: string;
};

function Member({ id, name, position }: MemberType) {
  return (
    <div className="memberContainer">
      <img id={id} src="" alt="" className="memberImg" />
      <div className="memberSubContainer">
        <h1 className="memberName">{name}</h1>
        <p className="memberPosition">{position}</p>
      </div>
    </div>
  );
}

export default Member;
