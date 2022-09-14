import React from 'react';
import { isBrowser } from 'react-device-detect';

import '../../style/components/appService/SearchCategory.scss';

type categoryProps = {
  category: string;
};

function SearchCategory({ category }: categoryProps) {
  return (
    <li className="categoryLi">
      <button className="searchCategory" type="button">
        {category === '음식점' ? (
          <img
            src={require('../../img/AppPage/restaurant_black.png')}
            alt="categoryLogo"
          />
        ) : category === '카페' ? (
          <img
            src={require('../../img/AppPage/cafe_black.png')}
            alt="categoryLogo"
          />
        ) : category === '편의점' ? (
          <img
            src={require('../../img/AppPage/convenienceStore_black.png')}
            alt="categoryLogo"
          />
        ) : category === '마트' ? (
          <img
            src={require('../../img/AppPage/mart_black.png')}
            alt="categoryLogo"
          />
        ) : (
          category === '주유소' && (
            <img
              src={require('../../img/AppPage/gasStation_black.png')}
              alt="categoryLogo"
            />
          )
        )}
        <p>{category}</p>
      </button>
    </li>
  );
}

export default SearchCategory;
