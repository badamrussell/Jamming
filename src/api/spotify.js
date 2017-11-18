const client_id = 'aac2a06fae1d46559c580b5abc193582';
const redirect_uri = 'http://localhost:3001/callback';

function authenticate() {
  const params = [
    `client_id=${client_id}`,
    'response_type=token',
    `redirect_uri=${encodeURI(redirect_uri)}`,
    'scope=playlist-modify-public',
  ];
  const url = `https://accounts.spotify.com/authorize/?${params.join('&')}`;

  window.location.replace(url);
}

function search(token, searchTerm) {
  const searchTermUri = 'q=' + encodeURI((searchTerm));
  const searchType = 'type=track';
  const headers = new Headers({ Authorization: 'Bearer ' + token });

  const searchConfig = {
    method: 'GET',
    headers,
  };

  return fetch(`https://api.spotify.com/v1/search?${searchTermUri}&${searchType}`, searchConfig)
  .then(res => res.json());
}

function getProfile(token) {
  const headers = new Headers({ Authorization: 'Bearer ' + token });

  const requestConfig = {
    method: 'GET',
    headers,
  };

  return fetch('https://api.spotify.com/v1/me', requestConfig).then(res => res.json());
}

function createPlaylist(token, userId, playlistName) {
  const bodyData = {
    name: playlistName,
  }

  const requestConfig = {
    method: 'POST',
    headers: new Headers({
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(bodyData),
  };

  return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, requestConfig).then(res => res.json());
}

function addTracksToPlaylist(token, userId, playlistId, tracks) {
  const bodyData = {
    uris: tracks.map(t => t.uri),
  };

  const requestConfig = {
    method: 'POST',
    headers: new Headers({
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(bodyData),
  };

  return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, requestConfig).then(res => res.json());
}

function savePlaylist(token, playlistName, playlistTracks) {
  let userId = '';

  return getProfile(token).then((profile) => {
    userId = profile.id;
    return createPlaylist(token, userId, playlistName)
  }).then((playlist) => {
    const playlistId = playlist.id;
    return addTracksToPlaylist(token, userId, playlistId, playlistTracks);
  });
}

function getAccessTokenFromUrl() {
  let hashFragment = window.location.hash;
  hashFragment = hashFragment[0] === '#' ? hashFragment.slice(1, hashFragment.length) : hashFragment;
  const hashLookup = {};
  hashFragment.split('&').forEach((v) => {
    const pair = v.split('=');
    hashLookup[pair[0]] = pair[1];
  });

  return hashLookup.access_token || '';
}

const spotifyApi = {
  search,
  authenticate,
  savePlaylist,
  getAccessTokenFromUrl,
};

export default spotifyApi;
