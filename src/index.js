import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './components/application';

import './index.css';
import ItemsProvider from './lib/context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ItemsProvider>
    <Application />
    </ItemsProvider>
  </React.StrictMode>,
);
