import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AppContextProvider from './context/AppContext';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);