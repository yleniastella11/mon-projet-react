import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Assurez-vous que le chemin est correct
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);