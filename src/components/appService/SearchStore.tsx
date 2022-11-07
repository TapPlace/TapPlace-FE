import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  SET_SEARCH_FLAG,
  SET_SEARCH_STORE,
  SET_SEARCH_WORD_IN_PAGE,
} from '../../redux/slices/PlayApp';

import '../../style/components/appService/SearchStore.scss';

function SearchStore() {
  const dispatch = useAppDispatch();
  const { mobileShowSearchFlag, windowSize, searchWord_InPage, searchFlag } =
    useAppSelector(state => state.playApp);

  // 엔터 키 입력 이벤트
  const onClick = () => {
    if (!searchFlag) dispatch(SET_SEARCH_FLAG(true));
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
      {windowSize.width < 1024 ? (
        <div id='search'>
          <div
            id='searchContainer'
            className={mobileShowSearchFlag ? '' : 'noShowSide'}
          >
            <img
              id='searchIcon'
              src='img/AppPage/search.png'
              alt='searchIcon'
            />
            <input
              type='text'
              name='searchStore'
              id='searchStore'
              value={searchWord_InPage}
              placeholder='가맹점을 찾아보세요'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(SET_SEARCH_WORD_IN_PAGE(e.target.value));
              }}
              onKeyPress={onPressEnter}
              autoComplete='off'
            />
            {searchWord_InPage && (
              <img
                id='resetSearch'
                src='img/close.png'
                alt='close'
                onClick={() => {
                  dispatch(SET_SEARCH_WORD_IN_PAGE(''));
                  dispatch(SET_SEARCH_FLAG(false));
                }}
              />
            )}
          </div>
        </div>
      ) : (
        <>
          <div id='searchContainer'>
            <img
              id='searchIcon'
              src='img/AppPage/search.png'
              alt='searchIcon'
            />
            <input
              type='text'
              name='searchStore'
              id='searchStore'
              value={searchWord_InPage}
              placeholder='가맹점을 찾아보세요'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(SET_SEARCH_WORD_IN_PAGE(e.target.value));
              }}
              onKeyPress={onPressEnter}
              autoComplete='off'
            />
            {searchWord_InPage && (
              <img
                id='resetSearch'
                src='img/close.png'
                alt='close'
                onClick={() => {
                  dispatch(SET_SEARCH_WORD_IN_PAGE(''));
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
