import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Service from './pages/Service';
import TestPage from './pages/TestPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Service />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </>
  );
}

export default App;
