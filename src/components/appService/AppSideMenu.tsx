import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { SET_MOBILE_SHOW_STORE_FLAG } from '../../redux/slices/PlayApp';
import SearchStore from './SearchStore';
import StoreArticle from './StoreArticle';
import MyLocation from './MyLocation';
import FilterButton from './FilterButton';

import '../../style/components/appService/AppSideMenu.scss';

function AppSideMenu({ map, markers }: any) {
  const dispatch = useAppDispatch();
  const {
    storeInDistance,
    choiceCnt,
    filterShowFlag,
    filterStore,
    searchStore,
    searchFlag,
    mobileShowStoreFlag,
    mobileShowSearchFlag,
  } = useAppSelector(state => state.playApp);
  // const choiceArticle = (item: any) => {
  //   console.log('item');
  //   console.log(item);
  //   markers.forEach((marker: any) => {
  //     if (Number(marker.title) === item.num) {
  //       console.log('match');
  //       console.log(marker);
  //       const bigSrc =
  //         marker.icon.url.substring(0, marker.icon.url.indexOf('.')) +
  //         '_big.png';
  //       marker.setIcon({
  //         url: bigSrc,
  //       });
  //       if (choiceMarker === undefined) {
  //         console.log('first');
  //         choiceMarker = marker;
  //         console.log(choiceMarker);
  //       } else {
  //         if ((choiceMarker === marker) === false) {
  //           const src =
  //             choiceMarker.icon.url.substring(
  //               0,
  //               choiceMarker.icon.url.indexOf('_'),
  //             ) + '.png';
  //           choiceMarker.setIcon({
  //             url: src,
  //           });
  //           choiceMarker = marker;
  //         }
  //       }
  //     }
  //   });
  // };
  // const [marker, setMarker] = useState();
  // let [choiceMarker, setChoiceMarker]: any = useState();
  let latChoiceMarker: any;
  // useEffect(() => {
  //   console.log(latChoiceMarker);
  //   console.log(choiceMarker);
  // }, [choiceMarker]);

  function hi(choiceMarker: any) {
    console.log(choiceMarker);
    if (latChoiceMarker === undefined) {
      latChoiceMarker = choiceMarker;
      console.log('unde');
      console.log(latChoiceMarker);
    } else {
      console.log('de');
      console.log(latChoiceMarker);
      if ((latChoiceMarker === choiceMarker) === false) {
        const src =
          latChoiceMarker.icon.url.substring(
            0,
            latChoiceMarker.icon.url.indexOf('_'),
          ) + '.png';
        latChoiceMarker.setIcon({
          url: src,
        });
        latChoiceMarker = choiceMarker;
      }
    }
  }

  const setMarkerFunction = (choiceMarker: any) => {
    // await setChoiceMarker(choiceMarker);
    hi(choiceMarker);
  };

  const [showFilterType, setShowFilterType] = useState(false);

  return (
    <>
      {window.innerWidth < 1024 ? (
        <>
          <div id="appSideMenu" className={filterShowFlag ? 'noShowSide' : ''}>
            <SearchStore />
            <div
              id="locationFilter"
              className={mobileShowSearchFlag ? '' : 'noShowSide'}
            >
              <MyLocation />
              {window.innerWidth < 768 ? (
                <>
                  <ul
                    id={showFilterType ? 'filterTypeContainer' : 'noShow'}
                    className={mobileShowStoreFlag ? 'noShow' : ''}
                  >
                    <FilterButton />
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
                  {/* 모바일(핸드폰) 화면에서 필터를 숨겼다 보였다 하는 버튼 */}
                  <button
                    id={showFilterType ? 'noShow' : 'showFilterTypeContainer'}
                    className={mobileShowStoreFlag ? 'noShow' : ''}
                    onClick={() => {
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
                <>
                  <ul id="filterTypeContainer">
                    <FilterButton />
                  </ul>
                </>
              )}
            </div>
            {/* 모바일(핸드폰)화면에서 가맹점 리스트 위에 띄워줄 필터 */}
            {window.innerWidth < 768 && mobileShowStoreFlag && (
              <ul id="mobileFilterTypeContainer">
                <FilterButton />
              </ul>
            )}
            <section
              id="storeContainer"
              className={mobileShowStoreFlag ? '' : 'noShowSide'}
            >
              {searchFlag === false
                ? filterStore.length === 0
                  ? storeInDistance.map(m => {
                      return (
                        <StoreArticle
                          key={m.store_id}
                          option={m}
                          map={map}
                          propFunction={setMarkerFunction}
                        />
                      );
                    })
                  : filterStore.map(m => {
                      return (
                        <StoreArticle
                          key={m.store_id}
                          option={m}
                          map={map}
                          propFunction={setMarkerFunction}
                        />
                      );
                    })
                : searchStore.map(m => {
                    return (
                      <StoreArticle
                        key={m.store_id}
                        option={m}
                        map={map}
                        propFunction={setMarkerFunction}
                      />
                    );
                  })}
            </section>
            <button
              id="showBtn"
              onClick={() => {
                dispatch(SET_MOBILE_SHOW_STORE_FLAG(!mobileShowStoreFlag));
              }}
            >
              {mobileShowStoreFlag ? (
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
        // 데스크톱 화면(모바일 아닐 시)
        <>
          <div id="appSideMenu" className={filterShowFlag ? 'noShowSide' : ''}>
            <SearchStore />
            <div
              id="locationFilter"
              className={filterShowFlag ? 'noShowSide' : ''}
            >
              <MyLocation />
              <ul id="filterTypeContainer">
                <FilterButton />
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
                        <StoreArticle
                          key={m.store_id}
                          option={m}
                          map={map}
                          markers={markers}
                          propFunction={setMarkerFunction}
                        />
                      );
                    })
                  : filterStore.map(m => {
                      return (
                        <StoreArticle
                          key={m.store_id}
                          option={m}
                          map={map}
                          markers={markers}
                          propFunction={setMarkerFunction}
                        />
                      );
                    })
                : searchStore.map(m => {
                    return (
                      <StoreArticle
                        key={m.store_id}
                        option={m}
                        map={map}
                        markers={markers}
                        propFunction={setMarkerFunction}
                      />
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
