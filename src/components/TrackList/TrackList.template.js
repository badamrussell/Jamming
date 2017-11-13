import React from 'react';
import PropTypes from 'prop-types';

import './TrackList.css';

import Track from '../Track';

const TrackListTemplate = (props) => (
  <div className="TrackList">
    {
      props.tracks.map((track, index) => (
        <Track key={index} track={track} onTrackAction={props.onTrackAction} actionSymbol={props.actionSymbol} />
      ))
    }
  </div>
);
TrackListTemplate.propTypes = {
  tracks: PropTypes.array.isRequired,
  onTrackAction: PropTypes.func.isRequired,
};

export default TrackListTemplate;
