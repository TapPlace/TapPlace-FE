import React from 'react';

import '../style/components/SearchStore.scss';
import SearchCategory from './SearchCategory';

function SearchStore() {
  return (
    <>
      <div id="searchContainer">
        <input
          type="text"
          name="searchStore"
          id="searchStore"
          placeholder="가맹점을 찾아보세요"
        />
      </div>
      <section>
        <ul id="searchCategoryContainer">
          <SearchCategory category="카페/디저트" />
          <SearchCategory category="음식점" />
          <SearchCategory category="편의점" />
          <SearchCategory category="마트" />
          <SearchCategory category="주유소" />
          <SearchCategory category="주유소" />
        </ul>
      </section>
    </>
  );
}

export default SearchStore;
