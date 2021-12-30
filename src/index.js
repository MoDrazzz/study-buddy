import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import { worker } from 'mocks/browser';

worker
  .start({
    onUnhandledRequest: 'bypass',
  })
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <Root />
      </React.StrictMode>,
      document.getElementById('root')
    );
  });
