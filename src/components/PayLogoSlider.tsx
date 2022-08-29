import React from 'react';
import { useAppSelector } from '../redux/hooks';

import '../style/components/PayLogoSlider.scss';
import PayLogoCollective from './PayLogoCollective';

function PayLogoSlider() {
  const { windowX } = useAppSelector(state => state.event);

  const paySlider: any = document.querySelector('#paySliderContainer');

  console.log(paySlider.scrollWidth);
  // memberSlider.scrollLeft === 0
  //       ? 0`
  //       : (100 * memberSlider.scrollLeft) /
  //         (memberSlider.scrollWidth - memberSlider.clientWidth);
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
