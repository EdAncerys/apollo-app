import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { AuthProvider } from './Context/Auth';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
