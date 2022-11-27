import React from 'react';

import '../../style/components/appService/FilterCategory.scss';

const FilterCategory = ({ item, id }: any) => {
  // 필터 활성화 토글
  const filterToggle = (e: any) => {
    e.target.className === 'filter'
      ? (e.target.className = 'filter active')
      : (e.target.className = 'filter');
  };

  return (
    <>
      <li
        id={id}
        className='filter'
        onClick={(e: any) => {
          filterToggle(e);
        }}
      >
        {item}
      </li>
    </>
  );
};

export default FilterCategory;
