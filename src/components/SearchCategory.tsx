import React from 'react';

import '../style/components/SearchCategory.scss';

type categoryProps = {
  category: string;
};

function SearchCategory({ category }: categoryProps) {
  return (
    <li className="categoryLi">
      <button className="searchCategory" type="button">
        {category}
      </button>
    </li>
  );
}

export default SearchCategory;
