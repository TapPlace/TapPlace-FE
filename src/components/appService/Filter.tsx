import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  SET_CHOICE_CATEGORY,
  SET_CHOICE_CNT,
  SET_FILTER_APPLY_FLAG,
  SET_FILTER_SHOW_FLAG,
} from '../../redux/slices/PlayApp';

import '../../style/components/appService/Filter.scss';
import FilterCategory from './FilterCategory';

function Filter() {
  const dispatch = useAppDispatch();
  const { filterShowFlag } = useAppSelector(state => state.playApp);
  const chooseStore = [
    '음식점',
    '카페',
    '편의점',
    '마트',
    '주유소',
    '주차장',
    '병원',
    '약국',
    '숙박',
    '공공기관',
  ];
  const choosePay = ['카카오페이', '네이버페이', '제로페이', '페이코'];
  const chooseApple = ['VISA', 'MASTER CARD', 'JCB'];
  const chooseGoogle = ['VISA', 'MASTER CARD', 'MAESTRO'];
  const chooseContactles = [
    'VISA',
    'MASTER CARD',
    'UnionPay',
    'JCB',
    'AMERICAN EXPRESS (AMEX)',
  ];
  // 필터를 리셋
  const filterReset = (reset: any) => {
    const filterList = document.querySelectorAll('.filter.active');
    filterList.forEach(list => {
      if (reset === 'all') {
        list.className = 'filter';
      } else if (reset === 'category') {
        if (list.id.includes('store')) {
          list.className = 'filter';
        }
      } else if (reset === 'pay') {
        if (!list.id.includes('store')) {
          list.className = 'filter';
        }
      }
    });
  };

  return (
    <div id="filterContainer" className={filterShowFlag ? '' : 'noShowFilter'}>
      <div id="filterHeader">
        <img
          src="img/back.png"
          alt="back"
          onClick={() => {
            filterReset('all');
            dispatch(SET_FILTER_SHOW_FLAG(false));
          }}
        />
        <p>필터</p>
      </div>
      <section id="addFilter">
        <article id="storeFilter">
          <div className="chooseTitle">
            <p>매장선택</p>
            <img
              src="img/reset.png"
              alt="reset"
              onClick={() => {
                filterReset('category');
              }}
            />
          </div>
          <ul className="chooseFilter">
            {chooseStore.map((item, idx) => {
              return (
                <FilterCategory
                  key={'store' + idx}
                  item={item}
                  id={'store' + idx}
                />
              );
            })}
          </ul>
        </article>
        <article id="paymentFilter">
          <div className="chooseTitle">
            <p>결제수단</p>
            <img
              src="img/reset.png"
              alt="reset"
              onClick={() => {
                filterReset('pay');
              }}
            />
          </div>
          <ul id="payFilter" className="chooseFilter">
            {choosePay.map((item, idx) => {
              return (
                <FilterCategory
                  key={'pay' + idx}
                  item={item}
                  id={'pay' + idx}
                />
              );
            })}
          </ul>
          <h4 className="kindOfPay">애플페이</h4>
          <ul id="appleFilter" className="chooseFilter">
            {chooseApple.map((item, idx) => {
              return (
                <FilterCategory
                  key={'apple' + idx}
                  item={item}
                  id={'apple' + idx}
                />
              );
            })}
          </ul>
          <h4 className="kindOfPay">구글페이</h4>
          <ul id="googleFilter" className="chooseFilter">
            {chooseGoogle.map((item, idx) => {
              return (
                <FilterCategory
                  key={'google' + idx}
                  item={item}
                  id={'google' + idx}
                />
              );
            })}
          </ul>
          <h4 className="kindOfPay">컨택리스 카드</h4>
          <ul id="conlessFilter" className="chooseFilter">
            {chooseContactles.map((item, idx) => {
              return (
                <FilterCategory
                  key={'conless' + idx}
                  item={item}
                  id={'conless' + idx}
                />
              );
            })}
          </ul>
        </article>
      </section>
      <button
        id="applyFilter"
        onClick={() => {
          const filterList = document.querySelectorAll('.filter.active');
          let choiceStoreCnt = 0;
          let choicePayCnt = 0;
          let choiceStore: any = [];
          let choicePay: any = [];
          filterList.forEach(list => {
            if (list.id.includes('store')) {
              choiceStoreCnt++;
              choiceStore.push(list.id);
            } else if (!list.id.includes('store')) {
              choicePayCnt++;
              choicePay.push(list.id);
            }
          });
          dispatch(SET_FILTER_APPLY_FLAG(true));
          dispatch(SET_FILTER_SHOW_FLAG(false));
          dispatch(
            SET_CHOICE_CNT({ storeCnt: choiceStoreCnt, payCnt: choicePayCnt }),
          );
          dispatch(SET_CHOICE_CATEGORY({ store: choiceStore, pay: choicePay }));
          choiceStoreCnt = 0;
          choicePayCnt = 0;
        }}
      >
        적용
      </button>
    </div>
  );
}

export default Filter;
