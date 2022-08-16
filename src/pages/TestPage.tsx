import React, { useEffect } from 'react';
import MobileApp from '../components/MobileApp';
import { useAppSelector } from '../redux/hooks';

function TestPage() {
  const pageValue = useAppSelector(state => state.page.value);

  useEffect(() => {
    console.log(pageValue);
  }, [pageValue]);

  return (
    <>
      <div>테스트페이지입니다</div>
      <MobileApp />
    </>
  );
}

export default TestPage;
