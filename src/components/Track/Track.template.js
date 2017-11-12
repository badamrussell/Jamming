import React from 'react';
import PropTypes from 'prop-types';

import './Track.css';

const TrackTemplate = (props) => (
  <div class="Track">
    <div class="Track-information">
      <h3>{props.trackTitle}</h3>
      <p>{props.artist} | {props.albumTitle}</p>
    </div>
    <a class="Track-action" onTrackAction={props.onTrackAction}>+</a>
  </div>
);
TrackTemplate.propTypes = {
  trackTitle: PropTypes.string,
  artist: PropTypes.string,
  albumTitle: PropTypes.string,
  onTrackAction: PropTypes.func,
};

export default TrackTemplate;
