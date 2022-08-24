import React, { useEffect } from 'react';
import MobileApp from '../components/MobileApp';
import { useAppSelector } from '../redux/hooks';

function TestPage() {
  const pageValue = useAppSelector(state => state.page.value);

  useEffect(() => {
    console.log(pageValue);
  }, [pageValue]);

  return (
    <div style={{ background: 'lightgray', height: '100vh', width: '100vw' }}>
      <div>테스트페이지입니다</div>
      <MobileApp />
    </div>
  );
}

export default TestPage;
