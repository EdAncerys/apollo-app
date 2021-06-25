import React, { useState, useEffect, useMemo } from 'react';

import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Index from './components/Index';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';

export const AppContext = React.createContext();

function App({ client }) {
  const [accessToken, setAccessToken] = useState(false);
  const [page, setPage] = useState(false);
  const [alert, setAlert] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const SESSION_STORAGE_KEY = 'oneTouchPortal.App';

  const manageAppContext = useMemo(
    () => ({
      client,
      accessToken,
      setAccessToken,
      page,
      setPage,
      alert,
      setAlert,
      spinner,
      setSpinner,
    }),
    [client, accessToken, page, alert, spinner]
  );

  useEffect(() => {
    const data = sessionStorage.getItem(SESSION_STORAGE_KEY);
    const userSession = JSON.parse(data);
    if (userSession) setAccessToken(userSession.accessToken);
    if (userSession) setPage(userSession.page);
  }, []); // eslint-disable-line

  return (
    <AppContext.Provider
      value={{
        manageAppContext,
      }}
    >
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
    </AppContext.Provider>
  );
}

export default App;
