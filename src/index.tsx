import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import ScrollToTop from 'components/ScrollToTop';

import 'index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ScrollToTop />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
