import React from 'react';
import { useAppSelector } from '../../redux/hooks';

import '../../style/components/appService/MyLocation.scss';

const MyLocation = () => {
  const { myAddress, mobileShowStoreFlag } = useAppSelector(
    state => state.playApp,
  );
  return (
    <div
      id={mobileShowStoreFlag ? 'mobileAroundMyLocation' : 'aroundMyLocation'}
    >
      {myAddress} 주변 1km
    </div>
  );
};

export default MyLocation;
