import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { SET_SEARCH_FLAG, SET_SEARCH_STORE } from '../../redux/slices/PlayApp';

import '../../style/components/appService/SearchStore.scss';

function SearchStore() {
  const dispatch = useAppDispatch();
  const { storeInDistance, mobileShowSearchFlag } = useAppSelector(
    state => state.playApp,
  );
  const [searchWord_InPage, setSearchWord_InPage] = useState('');

  // 엔터 키 입력 이벤트
  const onClick = async () => {
    let searchResult = [];
    for (let i = 0; i < storeInDistance.length; i++) {
      if (storeInDistance[i].place_name.includes(searchWord_InPage)) {
        searchResult.push(storeInDistance[i]);
      }
    }
    dispatch(SET_SEARCH_STORE(searchResult));
    dispatch(SET_SEARCH_FLAG(true));
    if (searchWord_InPage.length === 0) {
      dispatch(SET_SEARCH_FLAG(false));
      dispatch(SET_SEARCH_STORE([]));
    }
  };

  function onPressEnter(e: any) {
    if (e.key === 'Enter') {
      onClick();
    }
  }

  return (
    <>
      {window.innerWidth < 1024 ? (
        <div id="search">
          <div
            id="searchContainer"
            className={mobileShowSearchFlag ? '' : 'noShowSide'}
          >
            <img
              id="searchIcon"
              src="img/AppPage/search.png"
              alt="searchIcon"
            />
            <input
              type="text"
              name="searchStore"
              id="searchStore"
              value={searchWord_InPage}
              placeholder="가맹점을 찾아보세요"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchWord_InPage(e.target.value);
              }}
              onKeyPress={onPressEnter}
              autoComplete="off"
            />
            {searchWord_InPage && (
              <img
                id="resetSearch"
                src="img/close.png"
                alt="close"
                onClick={() => {
                  setSearchWord_InPage('');
                  dispatch(SET_SEARCH_FLAG(false));
                }}
              />
            )}
          </div>
        </div>
      ) : (
        <>
          <div id="searchContainer">
            <img
              id="searchIcon"
              src="img/AppPage/search.png"
              alt="searchIcon"
            />
            <input
              type="text"
              name="searchStore"
              id="searchStore"
              value={searchWord_InPage}
              placeholder="가맹점을 찾아보세요"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchWord_InPage(e.target.value);
              }}
              onKeyPress={onPressEnter}
              autoComplete="off"
            />
            {searchWord_InPage && (
              <img
                id="resetSearch"
                src="img/close.png"
                alt="close"
                onClick={() => {
                  setSearchWord_InPage('');
                  dispatch(SET_SEARCH_FLAG(false));
                }}
              />
            )}
          </div>
        </>
      )}
    </>
  );
}

export default SearchStore;
