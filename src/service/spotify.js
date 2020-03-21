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

// API CALLS ***************************************************************************************

const headers = {
  Authorization: `Bearer ${accessToken}`,
  'Content-Type': 'application/json',
};

/**
 * Get Current User's Profile
 * https://developer.spotify.com/documentation/web-api/reference/users-profile/get-current-users-profile/
 */
export const getUser = () => axios.get('https://api.spotify.com/v1/me', { headers });

/**
 * Get User's Followed Artists
 * https://developer.spotify.com/documentation/web-api/reference/follow/get-followed/
 */
export const getFollowing = () => axios.get('https://api.spotify.com/v1/me/following?type=artist', { headers });

/**
 * Get Current User's Recently Played Tracks
 * https://developer.spotify.com/documentation/web-api/reference/player/get-recently-played/
 */
export const getRecentlyPlayed = () => axios.get('https://api.spotify.com/v1/me/player/recently-played', { headers });

/**
 * Get a List of Current User's Playlists
 * https://developer.spotify.com/documentation/web-api/reference/playlists/get-a-list-of-current-users-playlists/
 */
export const getPlaylists = () => axios.get('https://api.spotify.com/v1/me/playlists', { headers });

/**
 * Get a User's Top Artists
 * https://developer.spotify.com/documentation/web-api/reference/personalization/get-users-top-artists-and-tracks/
 */
export const getTopArtistsShort = () => axios.get('https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term', {
  headers,
});

export const getTopArtistsMedium = () => axios.get('https://api.spotify.com/v1/me/top/artists?limit=50&time_range=medium_term', {
  headers,
});

export const getTopArtistsLong = () => axios.get('https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term', { headers });

/**
 * Get a User's Top Tracks
 * https://developer.spotify.com/documentation/web-api/reference/personalization/get-users-top-artists-and-tracks/
 */
export const getTopTracksShort = () => axios.get('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=short_term', { headers });

export const getTopTracksMedium = () => axios.get('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=medium_term', {
  headers,
});

export const getTopTracksLong = () => axios.get('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term', { headers });

/**
 * Get an Artist
 * https://developer.spotify.com/documentation/web-api/reference/artists/get-artist/
 */
export const getArtist = (artistId) => axios.get(`https://api.spotify.com/v1/artists/${artistId}`, { headers });

/**
 * Follow an Artist
 * https://developer.spotify.com/documentation/web-api/reference/follow/follow-artists-users/
 */
export const followArtist = (artistId) => {
  const url = `https://api.spotify.com/v1/me/following?type=artist&ids=${artistId}`;
  return axios({
    method: 'put',
    url,
    headers,
  });
};

/**
 * Check if Current User Follows Artists
 * https://developer.spotify.com/documentation/web-api/reference/follow/follow-artists-users/
 */
export const doesUserFollowArtist = (artistId) => axios.get(`https://api.spotify.com/v1/me/following/contains?type=artist&ids=${artistId}`, {
  headers,
});

/**
 * Check if Users Follow a Playlist
 * https://developer.spotify.com/documentation/web-api/reference/follow/follow-artists-users/
 */
export const doesUserFollowPlaylist = (playlistId, userId) => axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/followers/contains?ids=${userId}`, {
  headers,
});

/**
 * Create a Playlist
 * https://developer.spotify.com/documentation/web-api/reference/playlists/create-playlist/
 */
export const createPlaylist = (userId, name) => {
  const url = `https://api.spotify.com/v1/users/${userId}/playlists`;
  const data = JSON.stringify({ name });

  return axios({
    method: 'post', url, headers, data,
  });
};

/**
 * Add Tracks to a Playlist
 * https://developer.spotify.com/documentation/web-api/reference/playlists/add-tracks-to-playlist/
 */
export const addTracksToPlaylist = (playlistId, uris) => {
  const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=${uris}`;
  return axios({ method: 'post', url, headers });
};

/**
 * Follow a Playlist
 * https://developer.spotify.com/documentation/web-api/reference/follow/follow-playlist/
 */
export const followPlaylist = (playlistId) => {
  const url = `https://api.spotify.com/v1/playlists/${playlistId}/followers`;
  return axios({ method: 'put', url, headers });
};

/**
 * Get a Playlist
 * https://developer.spotify.com/documentation/web-api/reference/playlists/get-playlist/
 */
export const getPlaylist = (playlistId) => axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, { headers });

/**
 * Get a Playlist's Tracks
 * https://developer.spotify.com/documentation/web-api/reference/playlists/get-playlists-tracks/
 */
export const getPlaylistTracks = (playlistId) => axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, { headers });

/**
 * Return a comma separated string of track IDs from the given array of tracks
 */
const getTrackIds = (tracks) => tracks.map(({ track }) => track.id).join(',');

/**
 * Get Audio Features for Several Tracks
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-several-audio-features/
 */
export const getAudioFeaturesForTracks = (tracks) => {
  const ids = getTrackIds(tracks);
  return axios.get(`https://api.spotify.com/v1/audio-features?ids=${ids}`, { headers });
};

/**
 * Get Recommendations Based on Seeds
 * https://developer.spotify.com/documentation/web-api/reference/browse/get-recommendations/
 */
export const getRecommendationsForTracks = (tracks) => {
  const shuffledTracks = tracks.sort(() => 0.5 - Math.random());
  const seedTracks = getTrackIds(shuffledTracks.slice(0, 5));
  const seedArtists = '';
  const seedGenres = '';

  return axios.get(
    `https://api.spotify.com/v1/recommendations?seed_tracks=${seedTracks}&seed_artists=${seedArtists}&seed_genres=${seedGenres}`,
    {
      headers,
    },
  );
};

/**
 * Get a Track
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-track/
 */
export const getTrack = (trackId) => axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, { headers });

/**
 * Get Audio Analysis for a Track
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/
 */
export const getTrackAudioAnalysis = (trackId) => axios.get(`https://api.spotify.com/v1/audio-analysis/${trackId}`, { headers });

/**
 * Get Audio Features for a Track
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-features/
 */
export const getTrackAudioFeatures = (trackId) => axios.get(`https://api.spotify.com/v1/audio-features/${trackId}`, { headers });

export const getUserInfo = () => axios
  .all([getUser(), getFollowing(), getPlaylists(), getTopArtistsLong(), getTopTracksLong()])
  .then(
    axios.spread((user, followedArtists, playlists, topArtists, topTracks) => ({
      user: user.data,
      followedArtists: followedArtists.data,
      playlists: playlists.data,
      topArtists: topArtists.data,
      topTracks: topTracks.data,
    })),
  );

export const getTrackInfo = (trackId) => axios
  .all([getTrack(trackId), getTrackAudioAnalysis(trackId), getTrackAudioFeatures(trackId)])
  .then(
    axios.spread((track, audioAnalysis, audioFeatures) => ({
      track: track.data,
      audioAnalysis: audioAnalysis.data,
      audioFeatures: audioFeatures.data,
    })),
  );
