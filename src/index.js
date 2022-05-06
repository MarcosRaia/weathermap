import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Head from './Components/Header/headSearch';
import Body from './Components/body/bodyContent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head />
    <Body />
  </React.StrictMode>
);


