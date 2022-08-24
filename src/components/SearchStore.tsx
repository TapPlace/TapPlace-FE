import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { searchStorePage } from '../redux/slices/showPage';

import '../style/components/SearchStore.scss';
import SearchCategory from './SearchCategory';

function SearchStore() {
  const dispatch = useAppDispatch();
  const pageValue = useAppSelector(state => state.page.value);

  return (
    <>
      {pageValue === 'home' ? (
        <>
          <div
            id="searchContainer"
            onClick={() => {
              dispatch(searchStorePage());
            }}
          >
            <input
              type="text"
              name="searchStore"
              id="searchStore"
              placeholder="가맹점을 찾아보세요"
              disabled
            />
          </div>
          <section>
            <ul id="searchCategoryContainer">
              <SearchCategory category="음식점" />
              <SearchCategory category="카페" />
              <SearchCategory category="편의점" />
              <SearchCategory category="마트" />
              <SearchCategory category="주유소" />
              <SearchCategory category="주유소" />
            </ul>
          </section>
        </>
      ) : pageValue === 'searchStorePage' ? (
        <></>
      ) : pageValue === 'prevPage' ? (
        <></>
      ) : pageValue === 'detailPage' ? (
        <></>
      ) : (
        pageValue === 'myPage' && <></>
      )}
    </>
  );
}

export default SearchStore;
