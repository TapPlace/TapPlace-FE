import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  SET_CHOICE_CNT,
  SET_FILTER_SHOW_FLAG,
} from '../../redux/slices/PlayApp';

import '../../style/components/appService/FilterButton.scss';

function FilterButton() {
  const dispatch = useAppDispatch();
  const { choiceCnt } = useAppSelector(state => state.playApp);
  // 눌러진 필터링 버튼 리스트
  const filterList = document.querySelectorAll('.filter.active');

  return (
    <>
      <li className="filterType">
        {choiceCnt.storeCnt === 0 ? (
          <>
            <div
              onClick={() => {
                dispatch(SET_FILTER_SHOW_FLAG(true));
              }}
            >
              <p>매장선택</p>
              <img
                className="vButtonFilter"
                src="img/AppPage/Vbutton.png"
                alt="vButton"
              />
            </div>
          </>
        ) : (
          <>
            <div className="choiceFilter">
              <p
                onClick={() => {
                  dispatch(SET_FILTER_SHOW_FLAG(true));
                }}
              >
                {'매장선택 ' + choiceCnt.storeCnt}
              </p>
              <img
                className="resetFilter"
                src="img/closeBlue.png"
                alt="close"
                onClick={() => {
                  filterList.forEach((ele: any) => {
                    if (ele.id.includes('store')) ele.className = 'filter';
                  });
                  dispatch(
                    SET_CHOICE_CNT({
                      storeCnt: 0,
                      payCnt: choiceCnt.payCnt,
                    }),
                  );
                }}
              />
            </div>
          </>
        )}
      </li>
      <li className="filterType">
        {choiceCnt.payCnt === 0 ? (
          <>
            <div
              onClick={() => {
                dispatch(SET_FILTER_SHOW_FLAG(true));
              }}
            >
              <p>결제수단</p>
              <img
                className="vButtonFilter"
                src="img/AppPage/Vbutton.png"
                alt="vButton"
              />
            </div>
          </>
        ) : (
          <>
            <div className="choiceFilter">
              <p
                onClick={() => {
                  dispatch(SET_FILTER_SHOW_FLAG(true));
                }}
              >
                {'결제수단 ' + choiceCnt.payCnt}
              </p>
              <img
                className="resetFilter"
                src="img/closeBlue.png"
                alt="close"
                onClick={() => {
                  filterList.forEach((ele: any) => {
                    if (!ele.id.includes('store')) ele.className = 'filter';
                  });
                  dispatch(
                    SET_CHOICE_CNT({
                      storeCnt: choiceCnt.storeCnt,
                      payCnt: 0,
                    }),
                  );
                }}
              />
            </div>
          </>
        )}
      </li>
    </>
  );
}

export default FilterButton;
