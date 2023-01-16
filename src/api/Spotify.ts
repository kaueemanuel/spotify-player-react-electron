/* eslint-disable camelcase */
import axios from 'axios';
import { getLocalStorage } from 'utils/storage';

const CLIENT_ID = '829b5f4529f049d88b31ff1c4dbd36a2';
const CLIENT_SECRET = '3978dcd306b24686acb2be7bed7af15a';
const AUTH_URL = 'https://accounts.spotify.com/authorize';
const REDIRECT_URI = 'http://localhost:1212';
const SCOPES = [
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'app-remote-control',
  'streaming',
  'user-read-private',
  'user-read-email',
  'playlist-read-private',
  'playlist-read-collaborative',
  'playlist-modify-private',
  'playlist-modify-public',
  'user-library-read',
  'user-library-modify',
];

const ACCOUNTS_API_URL = 'https://accounts.spotify.com/api';
const API_URL = 'https://api.spotify.com/v1';

export const LOGIN_ENDPOINT = `${AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join(
  '%20'
)}&response_type=code&show_dialog=true`;

const clientAxios = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

clientAxios.interceptors.request.use(async (config) => {
  config.headers = {
    Authorization: `Bearer ${
      getLocalStorage('context').credentials?.access_token
    }`,
  };
  return config;
});

export const getAccessToken = async ({
  code,
  redirect_uri = REDIRECT_URI,
  grant_type = 'authorization_code',
}: {
  code: string;
  redirect_uri: string;
  grant_type: string;
}) => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
  };
  const response = axios.post(
    `${ACCOUNTS_API_URL}/token`,
    { code, redirect_uri, grant_type },
    {
      headers,
    }
  );

  return response;
};

export const getRefreshAccessToken = async ({
  refresh_token,
  grant_type = 'refresh_token',
}: {
  refresh_token: string;
  grant_type: string;
}) => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
  };
  const response = axios.post(
    `${ACCOUNTS_API_URL}/token`,
    { refresh_token, grant_type },
    {
      headers,
    }
  );

  return response;
};

export const getUser = async () => {
  const response = clientAxios.get('me');

  return response;
};
