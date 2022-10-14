import React from 'react';
import { useAppSelector } from '../../redux/hooks';

import '../../style/components/appService/MyLocation.scss';

function MyLocation() {
  const { myAddress } = useAppSelector(state => state.playApp);
  return <div id="aroundMyLocation">{myAddress} 주변 1km</div>;
}

export default MyLocation;
