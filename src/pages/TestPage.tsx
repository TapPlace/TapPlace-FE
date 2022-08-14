import axios from 'axios';
import React from 'react';
import MobileApp from '../components/MobileApp';

function TestPage() {
  async function btn() {
    await axios
      .get('https://tapplace.co.kr/tapplace/test_update.php?address=123')
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.error(err));
  }
  return (
    <>
      <div>테스트페이지입니다</div>
      <MobileApp />
      <button style={{ width: '100px', height: '100px' }} onClick={btn}>
        클릭
      </button>
    </>
  );
}

export default TestPage;
