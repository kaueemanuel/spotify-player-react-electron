import axios from 'axios';

const CLIENT_ID = '829b5f4529f049d88b31ff1c4dbd36a2';
const AUTH_URL = 'https://accounts.spotify.com/authorize?';
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

const PATH_URL = '';

export const LOGIN_ENDPOINT = `${AUTH_URL}client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join(
  '%20'
)}&response_type=token&show_dialog=true`;

const clientAxios = axios.create({
  baseURL: PATH_URL,
});

export default clientAxios;
