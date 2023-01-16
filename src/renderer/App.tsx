import React, { useContext, useEffect } from 'react';
import TopBar from 'components/top-bar/top-bar';

import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Login from 'pages/login/Login';
import { Context } from 'context/Context';
import './Fonts.css';
import useServices from 'hooks/use-services';
import { getAccessToken, getRefreshAccessToken, getUser } from 'api/Spotify';
import GlobalStyle from './Global.styles';

function Hello() {
  return <div style={{ color: 'white' }}>Bora codar</div>;
}

export default function App() {
  const {
    context: { credentials },
    setContext,
  } = useContext(Context);
  const [{ value }, getToken] = useServices(getAccessToken);
  const [{ value: refreshTokenData }, getRefreshToken] = useServices(
    getRefreshAccessToken
  );
  const [{ value: userData }, getUserData] = useServices(getUser);

  useEffect(() => {
    if (!credentials) {
      const { search } = window.location;
      if (search.includes('code')) {
        const code = search.split('=')[1];
        getToken({ code });
      }
    }
  }, [getToken, setContext, credentials]);

  useEffect(() => {
    if (value) {
      setContext((o) => ({ ...o, credentials: value }));
    }
  }, [setContext, value]);

  useEffect(() => {
    if (credentials) {
      getUserData();
    }
  }, [credentials, getUserData]);

  useEffect(() => {
    let timeoutRefresToken = setInterval(() => {}, 0);

    if (
      credentials?.access_token &&
      credentials?.expires_in &&
      credentials?.refresh_token
    ) {
      timeoutRefresToken = setInterval(() => {
        getRefreshToken({ refresh_token: credentials?.refresh_token });
      }, credentials.expires_in * 1000);
    }

    return () => {
      clearInterval(timeoutRefresToken);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [credentials?.access_token, getRefreshToken]);

  useEffect(() => {
    if (refreshTokenData) {
      setContext((o) => ({
        ...o,
        user: {
          ...o.user,
          access_token: refreshTokenData?.access_token,
          expires_in: refreshTokenData?.expires_in,
        },
      }));
    }
  }, [refreshTokenData, setContext]);

  useEffect(() => {
    if (userData) {
      setContext((o) => ({ ...o, user: userData }));
    }
  }, [userData, setContext]);

  return (
    <React.StrictMode>
      <GlobalStyle />
      <TopBar>
        {!credentials ? (
          <Login />
        ) : (
          <Router>
            <Routes>
              <Route path="/" element={<Hello />} />
            </Routes>
          </Router>
        )}
      </TopBar>
    </React.StrictMode>
  );
}
