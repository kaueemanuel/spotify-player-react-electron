import React, { useContext, useEffect } from 'react';
import TopBar from 'components/top-bar/top-bar';

import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Login from 'pages/login/Login';
import ContextProvider, { Context } from 'context/Context';
import GlobalStyle from './Global.styles';

function Hello() {
  return <div style={{ color: 'white' }}>Bora codar</div>;
}

export default function App() {
  const {
    context: { token },
    setContext,
  } = useContext(Context);

  useEffect(() => {
    setContext((o) => ({ ...o, user: 'asdfasd' }));
    const { hash } = window.location;
    if (hash.includes('access_token')) {
      const tokenHash = hash.split('&')[0].split('=')[1];
      console.log(tokenHash);
      setContext((o) => ({ ...o, token: tokenHash }));
    }
  }, [setContext]);

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <React.StrictMode>
      <ContextProvider>
        <GlobalStyle />
        <TopBar>
          {!token ? (
            <Login />
          ) : (
            <Router>
              <Routes>
                <Route path="/" element={<Hello />} />
              </Routes>
            </Router>
          )}
        </TopBar>
      </ContextProvider>
    </React.StrictMode>
  );
}
