import ReactGA from 'react-ga';
import React from 'react';
import './App.css';
import Search from './Search/Search';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import configureStore from './configureStore'
const { store, persistor } = configureStore();

function initializeReactGA() {
  const trackingId = "UA-149932352-1"; // Replace with your Google Analytics tracking ID
  ReactGA.initialize(trackingId);
}

function App() {
  initializeReactGA();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Search />
      </PersistGate>
    </Provider>
  );
}

export default App;
