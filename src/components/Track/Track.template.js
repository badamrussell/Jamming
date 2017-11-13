import React from 'react';
import PropTypes from 'prop-types';

import './Track.css';

const TrackTemplate = (props) => (
  <div className="Track">
    <div className="Track-information">
      <h3>{props.trackTitle}</h3>
      <p>{props.artist} | {props.albumTitle}</p>
    </div>
    <a className="Track-action" onClick={props.onTrackAction}>{props.actionSymbol}</a>
  </div>
);
TrackTemplate.propTypes = {
  trackTitle: PropTypes.string,
  artist: PropTypes.string,
  albumTitle: PropTypes.string,
  onTrackAction: PropTypes.func,
  actionSymbol: PropTypes.string,
};

export default TrackTemplate;
