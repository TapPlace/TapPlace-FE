import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useInput from '../hooks/useInput';

import '../style/components/Main4.scss';

function Main4() {
  const [location, setLoaction] = useState('');
  const [recomendStore, setRecomendStore] = useState('');
  const [storeName, setStoreName] = useInput('');
  const [storeAddress, setStoreAddress] = useState('');
  const [nickname, SetNickname] = useInput('');

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
        let locationArray: any = [];
        for (let i = 0; i < 3; i++) {
          locationArray.push(location[i].place_name + ' ');
        }
        setLoaction(locationArray);
        setRecomendStore(res.data.documents[0].place_name);
        setStoreAddress(res.data.documents[0].address_name);
      })
      .catch(err => {
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
    let payArray: Array<string> = [];
    const siblings = (el: any) =>
      [...el.parentElement.children].filter(node => node != el);
    const element = siblings(e.target).filter(tag => tag.tagName === 'UL');
    element.forEach(item => {
      for (const ele of item.children) {
        if (ele.className === 'clickBtn active') payArray.push(ele.id);
      }
    });
    console.log(storeName, storeAddress, payArray, nickname);
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
            value={storeName}
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
            value={storeAddress}
          />
          <h4 id="recommendStoreName">
            {storeName.length >= 1 &&
              '추천 가맹점에 뜬 첫 번째 가맹점의 이름과 주소로 등록됩니다'}
          </h4>
          <h4 className="addStoreFormExplain">결제수단</h4>
          <ul className="checkboxContainer">
            <li id="KakaoPay" className="clickBtn" onClick={onClickBtn}>
              카카오페이
            </li>
            <li id="NaverPay" className="clickBtn" onClick={onClickBtn}>
              네이버페이
            </li>
            <li id="Payco" className="clickBtn" onClick={onClickBtn}>
              페이코
            </li>
            <li id="ZeroPay" className="clickBtn" onClick={onClickBtn}>
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
