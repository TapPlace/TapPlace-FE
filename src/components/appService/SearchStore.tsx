import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  setNearbyStore,
  setSearchContent,
  setSearchStore,
} from '../../redux/slices/naverMap';

import '../../style/components/appService/SearchStore.scss';

function SearchStore() {
  const dispatch = useAppDispatch();
  const { markers } = useAppSelector(state => state.naver);
  const searchResult: any = [];
  const [searchContent, setSearchContent]: any = useState();

  // 엔터 키 입력 이벤트
  const onClick = () => {
    for (let i = 0; i < markers.length; i++) {
      if (markers[i].place_name.includes(searchContent)) {
        searchResult.push(markers[i]);
      }
    }
    dispatch(setSearchStore(searchResult));
  };
  const onPressEnter = (e: any) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <>
      <div id="searchContainer">
        <img id="searchIcon" src="img/AppPage/search.png" alt="searchIcon" />
        <input
          type="text"
          name="searchStore"
          id="searchStore"
          value={searchContent}
          placeholder="가맹점을 찾아보세요"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchContent(e.target.value);
            if (e.target.value === '') setSearchContent('');
          }}
          onKeyPress={onPressEnter}
        />
      </div>
    </>
  );
}

export default SearchStore;
