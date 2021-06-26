import React from 'react';
import { useAuthState } from './Context/Auth/index';

import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Index from './components/Index';
import UserAuth from './components/UserAuth';

function App() {
  const { user, jwt } = useAuthState();
  console.log(jwt);
  console.log(user);

  return (
    <div className="app">
      <div className="container">
        <div className="features">
          <div className="flex-container-50">
            <div
              style={{ textAlign: 'center', color: jwt ? 'tomato' : 'white' }}
            >
              Skylark Apollo Training App
            </div>
          </div>
        </div>
        {!jwt && <UserAuth />}
        {jwt && <Index />}
      </div>
    </div>
  );
}

export default App;
