import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useInput } from '../hooks/useInput';
import { useAppSelector } from '../redux/hooks';

import '../style/components/Main4.scss';

function Main4() {
  const { windowX } = useAppSelector(state => state.event);
  const [location, setLocation] = useState<any>();
  const [storeId, setStoreId] = useState<Number | undefined>();
  const [recommendStore, setRecommendStore] = useState<string | undefined>();
  const [storeAddress, setStoreAddress] = useState<string | undefined>();
  const [storeName, setStoreName] = useInput('');
  const [nickname, SetNickname] = useInput('');
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [storeCount, setStoreCount] = useState();
  const [payActive, setPayActive] = useState<Boolean>(false);

  // 도로명 주소 찾기, 없을 시 지명 주소
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
        let ArrayCount = location.length > 3 ? 3 : location.length;
        for (let i = 0; i < ArrayCount; i++) {
          locationArray.push(' ' + location[i].place_name);
        }
        if ((location.length === 0) === true) {
          setLocation(locationArray);
          setRecommendStore(undefined);
          setStoreAddress(undefined);
          setX('');
          setY('');
        } else {
          setLocation(locationArray);
          setStoreId(location[0].id);
          setRecommendStore(location[0].place_name);
          if (!location[0].road_address_name === false) {
            setStoreAddress(location[0].road_address_name);
          } else setStoreAddress(location[0].address_name);
          setX(location[0].x);
          setY(location[0].y);
        }
      })
      .catch((err: string) => {
        console.error(err);
      });
  }

  // 페이 종류 클릭
  function onClickPay(e: React.MouseEvent<HTMLElement>) {
    const target = e.target as HTMLElement;
    if (target.className === 'clickBtn') {
      target.className = 'clickBtn activePay';
    } else if (target.className === 'clickBtn activePay') {
      target.className = 'clickBtn';
    }
    if (document.querySelectorAll('.activePay').length > 0) setPayActive(true);
    else setPayActive(false);
  }

  // 가맹점 등록
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
        if (ele.className === 'clickBtn activePay') {
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
    // 폼 데이터로 만들기
    const frm: any = new FormData();
    frm.append('id', storeId);
    frm.append('place', recommendStore);
    frm.append('address', storeAddress);
    frm.append('region_x', x);
    frm.append('region_y', y);
    frm.append('nickname', nickname);
    for (let i = 0; i < etcArray.length; i++) {
      frm.append('etc[]', etcArray[i]);
    }
    for (let i = 0; i < appleArray.length; i++) {
      frm.append('applepay[]', appleArray[i]);
    }
    for (let i = 0; i < googleArray.length; i++) {
      frm.append('googlepay[]', googleArray[i]);
    }
    for (let i = 0; i < contactlessArray.length; i++) {
      frm.append('contactless[]', contactlessArray[i]);
    }

    axios
      .post('https://tapplace.co.kr/tapplace/test_update.php', frm, {
        headers: frm.getHeaders,
      })
      .then(res => {
        window.location.reload();
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    findAddress();
  }, [storeName]);

  // 클릭, 입력 다 되어있으면 submit 버튼 활성화
  useEffect(() => {
    const submitBtn: any = document.querySelector('#submitBtn');
    if (storeName.length > 0 && payActive === true && nickname.length > 0) {
      submitBtn.style.backgroundColor = '#4e77fb';
      submitBtn.style.color = 'white';
      submitBtn.style.pointerEvents = 'all';
    } else {
      submitBtn.style.backgroundColor = '#f4f5fa';
      submitBtn.style.color = '#bdc2cd';
      submitBtn.style.pointerEvents = 'none';
    }
  }, [storeName, payActive, nickname]);

  // 가맹점 갯수 가져오기
  useEffect(() => {
    axios
      .get('https://tapplace.co.kr/tapplace/load_count.php')
      .then(res => {
        setStoreCount(res.data[0].count);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div id="main4">
      <div id="main4Container">
        <h1 id="main4_title">신규 가맹점 등록</h1>
        <p id="main4_subTitle">
          {windowX <= 768 ? (
            <>
              현재까지 <h4 id="main4_subTitleCnt">{storeCount}</h4>개의
              <br />
              가맹점이 등록되었습니다
            </>
          ) : (
            <>
              현재까지<h4 id="main4_subTitleCnt">{storeCount}</h4>개의 가맹점이
              등록되었습니다
            </>
          )}
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
            {storeName.length >= 1 && '추천 가맹점에 뜬 첫 번째 가맹점의 주소'}
          </h4>
          <h4 className="addStoreFormExplain" id="payment">
            결제수단
          </h4>
          <ul className="checkboxContainer">
            <li id="etcKakao" className="clickBtn" onClick={onClickPay}>
              카카오페이
            </li>
            <li id="etcNaver" className="clickBtn" onClick={onClickPay}>
              네이버페이
            </li>
            <li id="etcPayco" className="clickBtn" onClick={onClickPay}>
              페이코
            </li>
            <li id="etcZeroPay" className="clickBtn" onClick={onClickPay}>
              제로페이
            </li>
          </ul>
          <p className="paymentMethod">애플페이</p>
          <ul className="checkboxContainer">
            <li id="AppleVISA" className="clickBtn" onClick={onClickPay}>
              VISA
            </li>
            <li id="AppleMASTER" className="clickBtn" onClick={onClickPay}>
              MASTER CARD
            </li>
            <li id="AppleJCB" className="clickBtn" onClick={onClickPay}>
              JCB
            </li>
          </ul>
          <p className="paymentMethod">구글페이</p>
          <ul className="checkboxContainer">
            <li id="GoogleVISA" className="clickBtn" onClick={onClickPay}>
              VISA
            </li>
            <li id="GoogleMASTER" className="clickBtn" onClick={onClickPay}>
              MASTER CARD
            </li>
            <li id="GoogleJCB" className="clickBtn" onClick={onClickPay}>
              JCB
            </li>
          </ul>
          <p className="paymentMethod">컨택리스 카드</p>
          <ul className="checkboxContainer">
            <li id="ContactVISA" className="clickBtn" onClick={onClickPay}>
              VISA
            </li>
            <li id="ContactMASTER" className="clickBtn" onClick={onClickPay}>
              MASTER CARD
            </li>
            <li id="ContactUnion" className="clickBtn" onClick={onClickPay}>
              Union Pay
            </li>
            <li id="ContactAMEX" className="clickBtn" onClick={onClickPay}>
              AMERICAN EXPRESS (AMEX)
            </li>
            <li id="ContactJCB" className="clickBtn" onClick={onClickPay}>
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
