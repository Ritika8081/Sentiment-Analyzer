import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure this path is correct
import App from './App'; // Ensure this path is correct

const rootElement = document.getElementById('root');

// Check if rootElement is found
if (!rootElement) {
    console.error('Root element not found');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
