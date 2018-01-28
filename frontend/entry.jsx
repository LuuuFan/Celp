import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  const store = configureStore(preloadedState);
  window.store = store;
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});
