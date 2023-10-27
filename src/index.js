import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';

import App from './App';

import { store, persister } from './store/store';

import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <BrowserRouter>
                <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);