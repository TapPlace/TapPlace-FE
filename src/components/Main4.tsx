import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useInput } from '../hooks/useInput';

import '../style/components/Main4.scss';

function Main4() {
  const [location, setLoaction] = useState<string>('');
  const [storeId, setStoreId] = useState<Number | undefined>();
  const [recommendStore, setRecommendStore] = useState<string>('');
  const [storeAddress, setStoreAddress] = useState<string>('');
  const [storeName, setStoreName] = useInput('');
  const [nickname, SetNickname] = useInput('');
  const [x, setX] = useState('');
  const [y, setY] = useState('');

  async function findAddress() {
    await axios
      .get(
        `https://dapi.kakao.com/v2/local/search/keyword.json?query=${storeName}`,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_RESTAPI_KEY}`,
          },
        },
      )
      .then(res => {
        const location = res.data.documents;
        console.log(location[0]);
        let locationArray: any = [];
        let ArrayCount = location.length > 3 ? 3 : location.length;
        for (let i = 0; i < ArrayCount; i++) {
          locationArray.push(' ' + location[i].place_name);
        }
        if ((location.length === 0) === true) {
          setLoaction(locationArray);
          setRecommendStore('');
          setStoreAddress('');
          setX('');
          setY('');
        } else {
          setLoaction(locationArray);
          setStoreId(location[0].id);
          setRecommendStore(location[0].place_name);
          setStoreAddress(location[0].address_name);
          setX(location[0].x);
          setY(location[0].y);
        }
      })
      .catch((err: string) => {
        console.error(err);
      });
  }

  function onClickBtn(e: React.MouseEvent<HTMLElement>) {
    const target = e.target as HTMLElement;
    if (target.className === 'clickBtn') target.className = 'clickBtn active';
    else if (target.className === 'clickBtn active')
      target.className = 'clickBtn';
  }

  function onClickSubmit(e: React.MouseEvent<HTMLElement>) {
    let etcArray: Array<string> = [];
    let appleArray: Array<string> = [];
    let googleArray: Array<string> = [];
    let contactlessArray: Array<string> = [];

    // 여러가지 결제수단 중 어느 수단을 선택했는지
    let payArray: Array<string> = [];
    const siblings = (el: any) =>
      [...el.parentElement.children].filter(node => node != el);
    const element = siblings(e.target).filter(tag => tag.tagName === 'UL');
    element.forEach(item => {
      for (const ele of item.children) {
        if (ele.className === 'clickBtn active') {
          payArray.push(ele.id);
        }
      }
    });
    payArray.forEach(item => {
      if (item.indexOf('etc') === 0) {
        etcArray.push(item);
      } else if (item.indexOf('Apple') === 0) {
        appleArray.push(item);
      } else if (item.indexOf('Google') === 0) {
        googleArray.push(item);
      } else if (item.indexOf('Contact') === 0) {
        contactlessArray.push(item);
      }
    });
    console.log(
      recommendStore,
      storeAddress,
      x,
      y,
      nickname,
      etcArray,
      appleArray,
      googleArray,
      contactlessArray,
    );
    // 에러 메시지(선택하지 않은 요소가 하나 이상일 때) 추가 구문
    let errorMsg = '';
    if (recommendStore === '') errorMsg += '가맹점 정보,';
    if (payArray.length === 0) errorMsg += '결제 수단,';
    if (nickname === '') errorMsg += '닉네임,';
    // 에러메시지가 없으면 POST, 있으면 alert
    if (errorMsg === '') {
      axios
        .post('/tapplace/add_update.php', {
          id: storeId,
          place: recommendStore,
          address: storeAddress,
          region_x: x,
          region_y: y,
          nickname: nickname,
          etc: etcArray,
          applepay: appleArray,
          googlepay: googleArray,
          conatctless: contactlessArray,
        })
        .then(res => {
          console.log('send data', res.data);
        })
        .catch(err => console.error(err));
    } else if (errorMsg !== '') {
      errorMsg =
        errorMsg.slice(0, -1).replace(',', ', ') + '을(를) 확인해주세요';
      alert(errorMsg);
    }
    // 초기화
    payArray = [];
    etcArray = [];
    appleArray = [];
    googleArray = [];
    contactlessArray = [];
    setX('');
    setY('');
  }

  useEffect(() => {
    findAddress();
  }, [storeName]);

  return (
    <div id="main4">
      <div id="main4Container">
        <h1 id="main4_title">신규 가맹점 등록</h1>
        <p id="main4_subTitle">
          현재까지<h4 id="main4_subTitleCnt">835</h4>개의 가맹점이
          등록되었습니다
        </p>
        <form id="addStoreForm">
          <h4 className="addStoreFormExplain">가맹점 이름</h4>
          <input
            type="text"
            name="storeName"
            className="main4InputText"
            placeholder="예) CU 역삼점, CU 강남논현타운점"
            defaultValue={storeName}
            onChange={setStoreName}
          />
          <h4 id="recommendStoreName">
            {storeName.length >= 1 && `추천 가맹점 이름 : ${location}`}
          </h4>
          <h4 className="addStoreFormExplain">가맹점 주소</h4>
          <input
            type="text"
            name="storeAddress"
            className="main4InputText"
            placeholder="자동 완성"
            defaultValue={storeAddress}
            disabled
          />
          <h4 id="recommendStoreName">
            {storeName.length >= 1 &&
              '추천 가맹점에 뜬 첫 번째 가맹점의 이름과 주소로 등록됩니다'}
          </h4>
          <h4 className="addStoreFormExplain">결제수단</h4>
          <ul className="checkboxContainer">
            <li id="etcKakao" className="clickBtn" onClick={onClickBtn}>
              카카오페이
            </li>
            <li id="etcNaver" className="clickBtn" onClick={onClickBtn}>
              네이버페이
            </li>
            <li id="etcPayco" className="clickBtn" onClick={onClickBtn}>
              페이코
            </li>
            <li id="etcZeroPay" className="clickBtn" onClick={onClickBtn}>
              제로페이
            </li>
          </ul>
          <p className="paymentMethod">애플페이</p>
          <ul className="checkboxContainer">
            <li id="AppleVISA" className="clickBtn" onClick={onClickBtn}>
              VISA
            </li>
            <li id="AppleMASTER" className="clickBtn" onClick={onClickBtn}>
              MASTER CARD
            </li>
            <li id="AppleJCB" className="clickBtn" onClick={onClickBtn}>
              JCB
            </li>
          </ul>
          <p className="paymentMethod">구글페이</p>
          <ul className="checkboxContainer">
            <li id="GoogleVISA" className="clickBtn" onClick={onClickBtn}>
              VISA
            </li>
            <li id="GoogleMASTER" className="clickBtn" onClick={onClickBtn}>
              MASTER CARD
            </li>
            <li id="GoogleJCB" className="clickBtn" onClick={onClickBtn}>
              JCB
            </li>
          </ul>
          <p className="paymentMethod">컨택리스 카드</p>
          <ul className="checkboxContainer">
            <li id="ContactVISA" className="clickBtn" onClick={onClickBtn}>
              VISA
            </li>
            <li id="ContactMASTER" className="clickBtn" onClick={onClickBtn}>
              MASTER CARD
            </li>
            <li id="ContactAMEX" className="clickBtn" onClick={onClickBtn}>
              AMERICAN EXPRESS (AMEX)
            </li>
            <li id="ContactUnion" className="clickBtn" onClick={onClickBtn}>
              Union Pay
            </li>
            <li id="ContactJCB" className="clickBtn" onClick={onClickBtn}>
              JCB
            </li>
          </ul>
          <h4 className="addStoreFormExplain">등록자 닉네임</h4>
          <input
            type="text"
            className="main4InputText"
            placeholder="닉네임을 알려주세요"
            value={nickname}
            onChange={SetNickname}
          />
          <button type="button" id="submitBtn" onClick={onClickSubmit}>
            등록하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Main4;
