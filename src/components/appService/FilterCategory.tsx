import React from 'react';

import '../../style/components/appService/FilterCategory.scss';

function FilterCategory({ item, id }: any) {
  const filterToggle = (e: any) => {
    e.target.className === 'filter'
      ? (e.target.className = 'filter active')
      : (e.target.className = 'filter');
  };

  return (
    <>
      <li
        id={id}
        className="filter"
        onClick={(e: any) => {
          filterToggle(e);
        }}
      >
        {item}
      </li>
    </>
  );
}

export default FilterCategory;
