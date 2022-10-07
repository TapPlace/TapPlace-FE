import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  SET_STORE_IN_DISTANCE,
  _SET_STORE_IN_DISTANCE,
} from '../../redux/slices/PlayApp';

import '../../style/components/appService/SearchStore.scss';

function SearchStore() {
  const dispatch = useAppDispatch();
  const { storeInDistance, _storeInDistance } = useAppSelector(
    state => state.playApp,
  );
  const [searchWord_InPage, setSearchWord_InPage] = useState('');

  // 엔터 키 입력 이벤트
  const onClick = async () => {
    let temp = [];
    for (let i = 0; i < storeInDistance.length; i++) {
      if (storeInDistance[i].place_name.includes(searchWord_InPage)) {
        temp.push(storeInDistance[i]);
      }
    }
    await dispatch(_SET_STORE_IN_DISTANCE(storeInDistance));
    await dispatch(SET_STORE_IN_DISTANCE(temp));
    if (searchWord_InPage.length === 0) {
      dispatch(SET_STORE_IN_DISTANCE(_storeInDistance));
    }
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
          value={searchWord_InPage}
          placeholder="가맹점을 찾아보세요"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchWord_InPage(e.target.value);
            console.log(searchWord_InPage);
          }}
          onKeyPress={onPressEnter}
        />
      </div>
    </>
  );
}

export default SearchStore;
