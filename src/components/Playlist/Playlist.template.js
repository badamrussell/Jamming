import React from 'react';
import PropTypes from 'prop-types';

import './Playlist.css';

import TrackList from '../TrackList';

const PlaylistTemplate = (props) => (
  <div class="Playlist">
    <input value={props.playlistTitle} onChange={props.onChangePlaylistTitle} />

    <TrackList tracks={props.tracks} onTrackAction={props.onTrackAction} />
  </div>
);
PlaylistTemplate.propTypes = {
  tracks: PropTypes.array.isRequired,
  onTrackAction: PropTypes.func.isRequired,
  playlistTitle: PropTypes.string.isRequired,
  onChangePlaylistTitle: PropTypes.func.isRequired,
};

export default PlaylistTemplate;
