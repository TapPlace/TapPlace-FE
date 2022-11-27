import React, { useState } from 'react';
import ReqModifyInfo from './ReqModifyInfo';
import StoreDetail from './StoreDetail';

import '../../style/components/appService/StoreSideMenu.scss';
import SideMenuAgree from './SideMenuAgree';

const StoreSideMenu = ({ map, markers }: any) => {
  const [reqModifyViewFlag, setReqModifyViewFlag] = useState(false);
  const [agreeFlag, setAgreeFlag] = useState(false);
  const [agreeViewFlag, setAgreeViewFlag] = useState(false);
  // 정보 수정 요청 보여주는 플래그
  const _setReqModifyViewFlag = (flag: boolean) => {
    setReqModifyViewFlag(flag);
  };
  // 이용동의 플래그
  const _setAgreeFlag = (flag: boolean) => {
    setAgreeFlag(flag);
  };
  // 이용동의 페이지를 보여주는 플래그
  const _setAgreeViewFlag = (flag: boolean) => {
    setAgreeViewFlag(flag);
  };

  return (
    <article id='storeSideContainer'>
      {reqModifyViewFlag ? (
        agreeViewFlag ? (
          <SideMenuAgree
            markers={markers}
            setAgreeFlag={_setAgreeFlag}
            setAgreeViewFlag={_setAgreeViewFlag}
            setReqModifyFlagView={_setReqModifyViewFlag}
          />
        ) : (
          <ReqModifyInfo
            markers={markers}
            agreeFlag={agreeFlag}
            setAgreeFlag={_setAgreeFlag}
            setAgreeViewFlag={_setAgreeViewFlag}
            setReqModifyFlagView={_setReqModifyViewFlag}
          />
        )
      ) : (
        <StoreDetail
          map={map}
          markers={markers}
          setReqModifyFlagView={_setReqModifyViewFlag}
        />
      )}
    </article>
  );
};

export default StoreSideMenu;
