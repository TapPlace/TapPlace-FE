import React from 'react';
import { useAppSelector } from '../redux/hooks';

import '../style/components/PayLogoSlider.scss';
import PayLogoCollective from './PayLogoCollective';

function PayLogoSlider() {
  const { windowX } = useAppSelector(state => state.event);

  return (
    <>
      <div
        id="paySliderContainer"
        className={windowX > 768 ? 'payLogoSlider' : 'mobilePayLogoSlider'}
      >
        <PayLogoCollective />
        {windowX > 768 && (
          <>
            <PayLogoCollective />
          </>
        )}
      </div>
    </>
  );
}

export default PayLogoSlider;
