import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { SET_DETAIL_FLAG, SET_MOBILE_SHOW_SEARCH_FLAG, SET_SEARCH_CRITERIA_FLAG } from 'redux/slices/PlayApp';
import Feedback from './Feedback';
import proj4 from 'proj4';
import {
  restaruant,
  accommodation,
  cafe,
  drutstore,
  etc,
  institutions,
  parking,
  shop,
  store,
  hospital,
  gasStation,
} from 'constants/MarkerImg';

import { close, navigation, location_black, call, pencil } from 'constants/CommonImg';

import 'style/components/appService/StoreDetail.scss';

const StoreDetail = ({ map, markers, setReqModifyFlagView }: any) => {
  const dispatch = useAppDispatch();
  const { myLocation, storeDetailInfo } = useAppSelector((state) => state.playApp);
  // storeDetailInfo 피드백 변수
  const [feedback, setFeedback]: any = useState();

  const changeDefaultImg = (marker: any) => {
    const category = storeDetailInfo.category_group_name;
    const setImg = (img: any) => {
      marker.setIcon({
        url: img,
      });
    };
    if (marker.icon.url.includes('_big')) {
      if (category === '음식점') setImg(restaruant);
      else if (category === '카페') setImg(cafe);
      else if (category === '편의점') setImg(store);
      else if (category === '가게') setImg(shop);
      else if (category === '주유소') setImg(gasStation);
      else if (category === '주차장') setImg(parking);
      else if (category === '병원') setImg(hospital);
      else if (category === '약국') setImg(drutstore);
      else if (category === '편의시설') setImg(accommodation);
      else if (category === '공공기관') setImg(institutions);
      else if (category === '기타') setImg(etc);
    }
  };

  // 가맹점 상세보기가 띄워졌을 때 피드백 정보를 가져옴
  useEffect(() => {
    axios
      .post('https://api.tapplace.co.kr/pay/list/more', {
        store_id: storeDetailInfo.store_id,
        pays: storeDetailInfo.pays,
      })
      .then((res) => {
        const data = res.data.feedback;
        setFeedback(data);
      });
  }, [storeDetailInfo.store_id]);

  return (
    <>
      <div id="detailContainer">
        <article id="detailInfo">
          <div id="nameCategoryClose">
            <div id="nameCategory">
              <h1 id="detailStoreName">{storeDetailInfo.place_name}</h1>
              <p id="detailStoreCategory">{storeDetailInfo.category_group_name}</p>
            </div>
            <img
              src={close}
              alt="closeDetail"
              onClick={() => {
                dispatch(SET_MOBILE_SHOW_SEARCH_FLAG(true));
                dispatch(SET_DETAIL_FLAG(false));
                markers.forEach((marker: any) => {
                  if (marker.icon.url.includes('_big')) {
                    changeDefaultImg(marker);
                  }
                });
                dispatch(SET_SEARCH_CRITERIA_FLAG(false));
              }}
            />
          </div>
          <button
            id="detailBtnContainer"
            onClick={() => {
              const start = proj4('EPSG:4326', 'EPSG:3857', [
                Number(myLocation.longitude),
                Number(myLocation.latitude),
              ]);
              const arrive = proj4('EPSG:4326', 'EPSG:3857', [Number(storeDetailInfo.x), Number(storeDetailInfo.y)]);
              window.open(
                `https://map.naver.com/v5/directions/${start[0]},${start[1]},내위치,,/${arrive[0]},${arrive[1]},${storeDetailInfo.place_name},,/~/transit?c=${arrive[0]},${arrive[1]},13,0,0,0,dh`
              );
            }}
          >
            <img id="naviImg" src={navigation} alt="navi" />
            <p>길찾기</p>
          </button>
          <div id="distanceAddress">
            <img src={location_black} alt="location" />
            {storeDetailInfo.road_address_name ? storeDetailInfo.road_address_name : storeDetailInfo.address_name}
          </div>
          <div id="phoneNumber">
            <img src={call} alt="call" />
            {storeDetailInfo.phone ? storeDetailInfo.phone : '가맹점의 번호가 등록되어있지 않습니다'}
          </div>
          <hr />
          <div
            id="infoModified"
            onClick={() => {
              setReqModifyFlagView(true);
            }}
          >
            <img src={pencil} alt="pencil" />
            정보 수정 요청
          </div>
        </article>
        <article id="paymentMethod">
          <h4>결제수단</h4>
          {feedback !== undefined &&
            feedback.map((e: any) => {
              return <Feedback key={e.num} options={e} />;
            })}
        </article>
        <button
          id="goApp"
          onClick={() => {
            window.open('https://apps.apple.com/app/%ED%83%AD%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4/id1643830783');
          }}
        >
          앱에서 사용 여부 피드백하기 &gt;
        </button>
      </div>
    </>
  );
};

export default StoreDetail;
