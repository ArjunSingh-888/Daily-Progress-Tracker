import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Enable cyberpunk dark mode by default
document.body.classList.add('dark-mode');

// Register service worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      (registration) => {
        console.log('ServiceWorker registration successful');
      },
      (error) => {
        console.log('ServiceWorker registration failed:', error);
      }
    );
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
