import React from 'react';
import ReactDOM from 'react-dom';
import { RecordsProvider } from './recordsContext';
import Routes from './Routes';




ReactDOM.render(
  <React.StrictMode>
    <RecordsProvider>
    <Routes />
    </RecordsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
