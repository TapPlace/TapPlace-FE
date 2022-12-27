import React, { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { SET_SEARCH_FLAG, SET_SEARCH_STORE, SET_SEARCH_WORD } from 'redux/slices/PlayApp';

import { search_list, search_close } from 'constants/CommonImg';

import 'style/components/appService/SearchStore.scss';

const SearchStore = () => {
  const dispatch = useAppDispatch();
  const { mobileShowSearchFlag, windowSize, searchFlag } = useAppSelector((state) => state.playApp);
  // 검색어 입력
  const [inputWord, setInputWord] = useState('');
  const onChangeInputWord = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputWord(e.target.value);
  }, []);
  // 엔터 키 입력 이벤트
  const onClick = () => {
    if (!searchFlag) dispatch(SET_SEARCH_FLAG(true));
    if (inputWord.length === 0) {
      dispatch(SET_SEARCH_FLAG(false));
      dispatch(SET_SEARCH_STORE([]));
    } else {
      dispatch(SET_SEARCH_WORD(inputWord));
    }
  };
  const onPressEnter = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <>
      {windowSize.width < 1024 ? (
        <div id="search">
          <div id="searchContainer" className={mobileShowSearchFlag ? '' : 'noShowSide'}>
            <img id="searchIcon" src={search_list} alt="searchIcon" />
            <input
              type="text"
              name="searchStore"
              id="searchStore"
              value={inputWord}
              placeholder="가맹점을 찾아보세요"
              onChange={onChangeInputWord}
              onKeyPress={onPressEnter}
              autoComplete="off"
            />
            {inputWord && (
              <img
                id="resetSearch"
                src={search_close}
                alt="close"
                onClick={() => {
                  setInputWord('');
                  dispatch(SET_SEARCH_WORD(''));
                  dispatch(SET_SEARCH_FLAG(false));
                }}
              />
            )}
          </div>
        </div>
      ) : (
        <>
          <div id="searchContainer">
            <img id="searchIcon" src={search_list} alt="searchIcon" />
            <input
              type="text"
              name="searchStore"
              id="searchStore"
              value={inputWord}
              placeholder="가맹점을 찾아보세요"
              onChange={onChangeInputWord}
              onKeyPress={onPressEnter}
              autoComplete="off"
            />
            {inputWord && (
              <img
                id="resetSearch"
                src={search_close}
                alt="close"
                onClick={() => {
                  setInputWord('');
                  dispatch(SET_SEARCH_WORD(''));
                  dispatch(SET_SEARCH_FLAG(false));
                }}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default SearchStore;
