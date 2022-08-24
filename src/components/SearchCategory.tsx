import React from 'react';

import '../style/components/SearchCategory.scss';

type categoryProps = {
  category: string;
};

function SearchCategory({ category }: categoryProps) {
  return (
    <li className="categoryLi">
      <button className="searchCategory" type="button">
        {category === '음식점' ? (
          <img
            src={require('../img/AppPage/restaurant.png')}
            alt="categoryLogo"
          />
        ) : category === '카페' ? (
          <img src={require('../img/AppPage/cafe.png')} alt="categoryLogo" />
        ) : category === '편의점' ? (
          <img
            src={require('../img/AppPage/convenienceStore.png')}
            alt="categoryLogo"
          />
        ) : category === '마트' ? (
          <img src={require('../img/AppPage/mart.png')} alt="categoryLogo" />
        ) : (
          category === '주유소' && (
            <img
              src={require('../img/AppPage/gasStation.png')}
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
