import axios from 'axios';
import getHashParams from '@/utils/';

export const getServerURL = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://vue-tailwind-css-spotify-serve.herokuapp.com';
  }
  return 'http://localhost:8890';
};

const authServer = axios.create({
  baseURL: getServerURL(),
});

const ONE_HOUR_IN_MILLISECONDS = 3600 * 1000;
const EXPIRATION_TIME = ONE_HOUR_IN_MILLISECONDS;

const setTokenTimestamp = () => window.localStorage.setItem('spotify_token_timestamp', Date.now());

const setLocalAccessToken = (token) => {
  setTokenTimestamp();
  window.localStorage.setItem('spotify_access_token', token);
};

const setLocalRefreshToken = (token) => window.localStorage.setItem('spotify_refresh_token', token);

const getTokenTimestamp = () => window.localStorage.getItem('spotify_token_timestamp');
const getLocalAccessToken = () => window.localStorage.getItem('spotify_access_token');
const getLocalRefreshToken = () => window.localStorage.getItem('spotify_refresh_token');

const refreshAccessToken = async () => {
  try {
    const { data } = await authServer.get(`/refresh_token?refresh_token=${getLocalRefreshToken()}`);
    const { access_token: accessToken } = data;

    setLocalAccessToken(accessToken);
    window.location.reload();
  } catch (e) {
    console.log(e); // eslint-disable-line no-console
  }
};

export const getAccessToken = () => {
  const {
    access_token: accessToken,
    error,
    refresh_token: refreshToken,
  } = getHashParams();

  if (error) {
    console.error(error); // eslint-disable-line no-console
    refreshAccessToken();
  }

  const hasTokenExpired = () => Date.now() - getTokenTimestamp() > EXPIRATION_TIME;

  if (hasTokenExpired()) {
    refreshAccessToken();
  }

  const localAccessToken = getLocalAccessToken();
  const localRefreshToken = getLocalRefreshToken();

  const checkTokenPersistence = (token) => (!token || token === 'undefined');

  if (checkTokenPersistence(localRefreshToken)) {
    setLocalRefreshToken(refreshToken);
  }

  if (checkTokenPersistence(localAccessToken)) {
    setLocalAccessToken(accessToken);
    return accessToken;
  }

  return localAccessToken;
};

export const token = getAccessToken();

export const logout = () => {
  window.localStorage.removeItem('spotify_token_timestamp');
  window.localStorage.removeItem('spotify_access_token');
  window.localStorage.removeItem('spotify_refresh_token');
  window.location.reload();
};
