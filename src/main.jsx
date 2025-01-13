// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";

// Get the root element from the HTML
const rootElement= document.getElementById('root');

// Render the App component to the root element
const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);