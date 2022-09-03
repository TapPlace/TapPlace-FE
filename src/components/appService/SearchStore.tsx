import React from 'react';

import '../../style/components/appService/SearchStore.scss';

function SearchStore() {
  return (
    <>
      <div id="searchContainer">
        <img
          id="searchIcon"
          src={require('../../img/AppPage/search.png')}
          alt="searchIcon"
        />
        <input
          type="text"
          name="searchStore"
          id="searchStore"
          placeholder="가맹점을 찾아보세요"
        />
      </div>
    </>
  );
}

export default SearchStore;
