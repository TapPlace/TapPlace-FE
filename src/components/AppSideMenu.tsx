import React from 'react';

import '../style/components/AppSideMenu.scss';
import SearchStore from './SearchStore';

function AppSideMenu() {
  return (
    <div id="appSideMenu">
      <SearchStore />
    </div>
  );
}

export default AppSideMenu;
