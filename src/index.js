import ReactDOM from 'react-dom';
import React from 'react';
import { store, persistor } from "./redux/store";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <App />
      </PersistGate>
    </Provider>


  </React.StrictMode>,
  document.getElementById('root')
);

