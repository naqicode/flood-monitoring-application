import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
/* The Provider component makes the redux store available to any nested components which are APP.js and
other nested components within the App.js file */
import { Provider } from 'react-redux';
//Importing store from the reduc folder
import {store } from './redux/store' 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* The provider component is at the top and the App.js file with its nested
    components at the bottom means that they will be able to use the redux store
    and make it available for future components as long as they nested within the App.js file */}
    <App />
    </Provider>
  </React.StrictMode>
);


