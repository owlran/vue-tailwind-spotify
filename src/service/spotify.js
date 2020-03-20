import * as spotify from 'spotify-web-sdk';
import axios from 'axios';
import getHashParams from '@/utils/';

export const getAccessToken = () => {
  const {
    access_token: accessToken,
    // refresh_token: refreshToken,
  } = getHashParams();

  return accessToken;
};

export const accessToken = getAccessToken();

const headers = {
  Authorization: `Bearer ${accessToken}`,
  'Content-Type': 'application/json',
};

spotify.init({ token: accessToken });
export const getNewUser = spotify.getCurrentUserProfile;
export const getNewRelease = spotify.getNewReleases;

export const getUser = () => axios.get('https://api.spotify.com/v1/me', { headers });
