import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './App.scss';
import Service from './pages/Service';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Service />} />
      </Routes>
    </>
  );
}

export default App;
