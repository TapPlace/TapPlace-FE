import React from 'react';

import '../style/components/StoreArticle.scss';

function StoreArticle() {
  return (
    <article className="storeArticle">
      <div className="storeLine1">
        <h4 className="storeName">이마트</h4>
        <p className="storeCategory">마트</p>
      </div>
      <div className="storeLine2">
        <p className="storeMeter">50m</p>
        <p className="storeAddress">서울 강서구 양천로 66길 21</p>
      </div>
    </article>
  );
}

export default StoreArticle;
