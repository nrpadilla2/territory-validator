import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import './index.css';
import configureStore from './redux/configureStore';
import defaultConfig from './redux/reducers/initialConfig';
import * as storageUtils from './util/storageUtils';

const initialState = storageUtils.loadConfig() || defaultConfig;
const store = configureStore(initialState);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>
);
