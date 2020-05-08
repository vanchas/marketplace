import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/App.jsx';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

const store = configureStore(window.__REDUX_STATE__ || {});

const AppBundle = (
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>
);

window.onload = () => {
  Loadable.preloadReady().then(() => {
    // ReactDOM.hydrate(
    ReactDOM.render(
      AppBundle,
      document.getElementById('root')
    );
  });
};

registerServiceWorker();
