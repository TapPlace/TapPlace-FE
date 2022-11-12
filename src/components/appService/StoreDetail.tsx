import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  SET_DETAIL_FLAG,
  SET_MOBILE_SHOW_SEARCH_FLAG,
  SET_SEARCH_CRITERIA_FLAG,
} from '../../redux/slices/PlayApp';
import Feedback from './Feedback';
import proj4 from 'proj4';

import '../../style/components/appService/StoreDetail.scss';

function StoreDetail({ map, markers, setReqModifyFlagView }: any) {
  const dispatch = useAppDispatch();
  const { myLocation, storeDetailInfo } = useAppSelector(
    state => state.playApp,
  );

  // storeDetailInfo 피드백 변수
  const [feedback, setFeedback]: any = useState();
  // 가맹점 상세보기가 띄워졌을 때 피드백 정보를 가져옴
  useEffect(() => {
    axios
      .post('https://api.tapplace.cloud/pay/list/more', {
        store_id: storeDetailInfo.store_id,
        pays: storeDetailInfo.pays,
      })
      .then(res => {
        const data = res.data.feedback;
        setFeedback(data);
      });
  }, [storeDetailInfo.store_id]);

  return (
    <>
      <div id='detailContainer'>
        <article id='detailInfo'>
          <div id='nameCategoryClose'>
            <div id='nameCategory'>
              <h1 id='detailStoreName'>{storeDetailInfo.place_name}</h1>
              <p id='detailStoreCategory'>
                {storeDetailInfo.category_group_name}
              </p>
            </div>
            <img
              src='img/close.png'
              alt='closeDetail'
              onClick={() => {
                dispatch(SET_MOBILE_SHOW_SEARCH_FLAG(true));
                dispatch(SET_DETAIL_FLAG(false));
                markers.forEach((marker: any) => {
                  if (marker.icon.url.includes('_big')) {
                    map.setCenter(marker.position);
                    let src =
                      marker.icon.url.substring(
                        0,
                        marker.icon.url.indexOf('_'),
                      ) + '.png';
                    marker.setIcon({
                      url: src,
                    });
                    return false;
                  }
                });
                dispatch(SET_SEARCH_CRITERIA_FLAG(false));
              }}
            />
          </div>
          <button
            id='detailBtnContainer'
            onClick={() => {
              const start = proj4('EPSG:4326', 'EPSG:3857', [
                Number(myLocation.longitude),
                Number(myLocation.latitude),
              ]);
              const arrive = proj4('EPSG:4326', 'EPSG:3857', [
                Number(storeDetailInfo.x),
                Number(storeDetailInfo.y),
              ]);
              window.open(
                `https://map.naver.com/v5/directions/${start[0]},${start[1]},내위치,,/${arrive[0]},${arrive[1]},${storeDetailInfo.place_name},,/~/transit?c=${arrive[0]},${arrive[1]},13,0,0,0,dh`,
              );
            }}
          >
            <img id='naviImg' src='img/AppPage/navigation.png' alt='navi' />
            <p>길찾기</p>
          </button>
          <div id='distanceAddress'>
            <img src='img/AppPage/location_black.png' alt='location' />
            {storeDetailInfo.road_address_name
              ? storeDetailInfo.road_address_name
              : storeDetailInfo.address_name}
          </div>
          <div id='phoneNumber'>
            <img src='img/AppPage/call.png' alt='call' />
            {storeDetailInfo.phone
              ? storeDetailInfo.phone
              : '가맹점의 번호가 등록되어있지 않습니다'}
          </div>
          <hr />
          <div
            id='infoModified'
            onClick={() => {
              setReqModifyFlagView(true);
            }}
          >
            <img src='img/AppPage/pencil.png' alt='pencil' />
            정보 수정 요청
          </div>
        </article>
        <article id='paymentMethod'>
          <h4>결제수단</h4>
          {feedback !== undefined &&
            feedback.map((e: any) => {
              return <Feedback key={e.num} options={e} />;
            })}
        </article>
        <button
          id='goApp'
          onClick={() => {
            window.open(
              'https://apps.apple.com/app/%ED%83%AD%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4/id1643830783',
            );
          }}
        >
          앱에서 사용 여부 피드백하기 &gt;
        </button>
      </div>
    </>
  );
}

export default StoreDetail;
