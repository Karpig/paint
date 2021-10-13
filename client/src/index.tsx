import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { store } from '@store/index';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import '@assets/styles/index.css';

render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
