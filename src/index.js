import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <footer className='textofoot'>
      <h4> Luciano Pherreira - Copyright © e-Obras 2022</h4>
    </footer>
  </React.StrictMode>
);

