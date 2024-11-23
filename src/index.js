import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx'; // Make sure the correct file is being imported
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Add the correct basename for GitHub Pages */}
    <BrowserRouter basename="/Foodie-Delight">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
