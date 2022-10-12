import React, { useState } from 'react';

import SearchStore from './SearchStore';
import StoreArticle from '../introService/StoreArticle';

import '../../style/components/appService/AppSideMenu.scss';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  SET_CHOICE_CNT,
  SET_FILTER_SHOW_FLAG,
  SET_SHOW_SIDE_FLAG,
} from '../../redux/slices/PlayApp';
import { isMobile } from 'react-device-detect';

function AppSideMenu(map: any) {
  const dispatch = useAppDispatch();
  const {
    storeInDistance,
    myAddress,
    choiceCnt,
    filterShowFlag,
    filterStore,
    searchStore,
    searchFlag,
    showSideFlag,
    showSearchFlag,
  } = useAppSelector(state => state.playApp);

  const [showFilterType, setShowFilterType] = useState(false);

  const filterList = document.querySelectorAll('.filter.active');

  return (
    <>
      {isMobile ? (
        <>
          <div id="appSideMenu">
            <SearchStore />
            <div
              id="locationFilter"
              className={showSearchFlag ? '' : 'noShowSide'}
            >
              <div id="aroundMyLocation">{myAddress} 주변 1km</div>
              {window.innerWidth < 768 ? (
                <>
                  <ul id={showFilterType ? 'filterTypeContainer' : 'noShow'}>
                    <li className="filterType">
                      {choiceCnt.storeCnt === 0 ? (
                        <div>
                          <p
                            onClick={() => {
                              dispatch(SET_FILTER_SHOW_FLAG(true));
                            }}
                          >
                            매장선택
                          </p>
                          <img
                            className="vButtonFilter"
                            src="img/AppPage/Vbutton.png"
                            alt="vButton"
                          />
                        </div>
                      ) : (
                        <div
                          className={
                            window.innerWidth < 768
                              ? 'choiceFilterPhone'
                              : 'choiceFilter'
                          }
                        >
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
                              filterList.forEach(list => {
                                if (list.id.includes('store')) {
                                  list.className = 'filter';
                                }
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
                      )}
                    </li>
                    <li className="filterType">
                      {choiceCnt.payCnt === 0 ? (
                        <div>
                          <p
                            onClick={() => {
                              dispatch(SET_FILTER_SHOW_FLAG(true));
                            }}
                          >
                            결제수단
                          </p>
                          <img
                            className="vButtonFilter"
                            src="img/AppPage/Vbutton.png"
                            alt="vButton"
                          />
                        </div>
                      ) : (
                        <div
                          className={
                            window.innerWidth < 768
                              ? 'choiceFilterPhone'
                              : 'choiceFilter'
                          }
                        >
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
                              filterList.forEach(list => {
                                if (!list.id.includes('store')) {
                                  list.className = 'filter';
                                }
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
                      )}
                    </li>
                    <li className="filterType">
                      <div
                        onClick={() => {
                          setShowFilterType(false);
                        }}
                      >
                        <p id="folding">접어두기</p>
                      </div>
                    </li>
                  </ul>
                  <button
                    id={showFilterType ? 'noShow' : 'showFilterTypeContainer'}
                    onClick={(e: any) => {
                      setShowFilterType(true);
                    }}
                  >
                    {choiceCnt.payCnt + choiceCnt.storeCnt !== 0 && (
                      <div id="filterCnt">
                        <p>{choiceCnt.payCnt + choiceCnt.storeCnt}</p>
                      </div>
                    )}
                    <img src="img/AppPage/filter.png" alt="showfilter" />
                  </button>
                </>
              ) : (
                <ul id="filterTypeContainer">
                  <li className="filterType">
                    {choiceCnt.storeCnt === 0 ? (
                      <div>
                        <p
                          onClick={() => {
                            dispatch(SET_FILTER_SHOW_FLAG(true));
                          }}
                        >
                          매장선택
                        </p>
                        <img
                          className="vButtonFilter"
                          src="img/AppPage/Vbutton.png"
                          alt="vButton"
                        />
                      </div>
                    ) : (
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
                            filterList.forEach(list => {
                              if (list.id.includes('store')) {
                                list.className = 'filter';
                              }
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
                    )}
                  </li>
                  <li className="filterType">
                    {choiceCnt.payCnt === 0 ? (
                      <div>
                        <p
                          onClick={() => {
                            dispatch(SET_FILTER_SHOW_FLAG(true));
                          }}
                        >
                          결제수단
                        </p>
                        <img
                          className="vButtonFilter"
                          src="img/AppPage/Vbutton.png"
                          alt="vButton"
                        />
                      </div>
                    ) : (
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
                            filterList.forEach(list => {
                              if (!list.id.includes('store')) {
                                list.className = 'filter';
                              }
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
                    )}
                  </li>
                </ul>
              )}
            </div>
            <section
              id="storeContainer"
              className={showSideFlag ? '' : 'noShowSide'}
            >
              {searchFlag === false
                ? filterStore.length === 0
                  ? storeInDistance.map(m => {
                      return (
                        <StoreArticle key={m.store_id} option={m} map={map} />
                      );
                    })
                  : filterStore.map(m => {
                      return (
                        <StoreArticle key={m.store_id} option={m} map={map} />
                      );
                    })
                : searchStore.map(m => {
                    return (
                      <StoreArticle key={m.store_id} option={m} map={map} />
                    );
                  })}
            </section>
            <button
              id="showBtn"
              onClick={() => {
                dispatch(SET_SHOW_SIDE_FLAG(!showSideFlag));
              }}
            >
              {showSideFlag ? (
                <>
                  <img src="img/showMap.png" alt="showmap" />
                  <p>지도보기</p>
                </>
              ) : (
                <>
                  <img src="img/showList.png" alt="showlist" />
                  <p>목록보기</p>
                </>
              )}
            </button>
          </div>
        </>
      ) : (
        <>
          <div id="appSideMenu" className={filterShowFlag ? 'noShowSide' : ''}>
            <SearchStore />
            <div
              id="locationFilter"
              className={filterShowFlag ? 'noShowSide' : ''}
            >
              <div id="aroundMyLocation">{myAddress} 주변 1km</div>
              <ul id="filterTypeContainer">
                <li className="filterType">
                  {choiceCnt.storeCnt === 0 ? (
                    <div>
                      <p
                        onClick={() => {
                          dispatch(SET_FILTER_SHOW_FLAG(true));
                        }}
                      >
                        매장선택
                      </p>
                      <img
                        className="vButtonFilter"
                        src="img/AppPage/Vbutton.png"
                        alt="vButton"
                      />
                    </div>
                  ) : (
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
                          filterList.forEach(list => {
                            if (list.id.includes('store')) {
                              list.className = 'filter';
                            }
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
                  )}
                </li>
                <li className="filterType">
                  {choiceCnt.payCnt === 0 ? (
                    <div>
                      <p
                        onClick={() => {
                          dispatch(SET_FILTER_SHOW_FLAG(true));
                        }}
                      >
                        결제수단
                      </p>
                      <img
                        className="vButtonFilter"
                        src="img/AppPage/Vbutton.png"
                        alt="vButton"
                      />
                    </div>
                  ) : (
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
                          filterList.forEach(list => {
                            if (!list.id.includes('store')) {
                              list.className = 'filter';
                            }
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
                  )}
                </li>
              </ul>
            </div>
            <section
              id="storeContainer"
              className={filterShowFlag ? 'noShowSide' : ''}
            >
              {searchFlag === false
                ? filterStore.length === 0
                  ? storeInDistance.map(m => {
                      return (
                        <StoreArticle key={m.store_id} option={m} map={map} />
                      );
                    })
                  : filterStore.map(m => {
                      return (
                        <StoreArticle key={m.store_id} option={m} map={map} />
                      );
                    })
                : searchStore.map(m => {
                    return (
                      <StoreArticle key={m.store_id} option={m} map={map} />
                    );
                  })}
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default AppSideMenu;
