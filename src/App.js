import React from 'react';

import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Index from './components/Index';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';

export const AppContext = React.createContext();

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="features">
          <div className="flex-container-50">
            <div style={{ textAlign: 'center' }}>
              Skylark Apollo Training App
            </div>
          </div>
        </div>
        <Login />
        <CreateAccount />
        <Index />
      </div>
    </div>
  );
}

export default App;
