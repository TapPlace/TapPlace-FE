import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import MobilePage from './pages/AppMain';
import Service from './pages/Service';
import AppMain from './pages/AppMain';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Service />} />
        <Route path="/tapplaceapp" element={<AppMain />} />
      </Routes>
    </>
  );
}

export default App;
