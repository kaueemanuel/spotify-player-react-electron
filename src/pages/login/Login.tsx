import { LOGIN_ENDPOINT } from 'api/Spotify';
import React from 'react';

import SpotifyLogo from '../../../assets/spotify.png';
import { Button, Container, Img } from './Login.styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Img src={SpotifyLogo} alt="spotify logo" />
      <Button href={LOGIN_ENDPOINT} rel="noreferrer">
        ENTRAR COM SPOTIFY
      </Button>
    </Container>
  );
};

export default Login;
