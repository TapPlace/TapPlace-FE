import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Service from './pages/Service';
import Notice from './pages/Notice';
import AppMain from './pages/AppMain';
import Faq from './pages/Faq';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main id="mainContainer">
        <Routes>
          <Route path="/" element={<Service />} />
          {/* <Route path="/notice" element={<Notice />} /> */}
          {/* <Route path="/faq" element={<Faq />} /> */}
          {/* <Route path="/tapplaceapp" element={<AppMain />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
