import React from 'react';
import PropTypes from 'prop-types';

import TrackTemplate from './Track.template';

const TrackPresenter = (props) => {
  const { track, onTrackAction, actionSymbol } = props;
  const artists = track.artists.map(a => a.name).join(', ');
  return (
    <TrackTemplate
      trackTitle={track.name}
      artist={artists}
      albumTitle={track.album.name}
      onTrackAction={() => { onTrackAction(track); }}
      actionSymbol={actionSymbol}
    />
  );
}
TrackPresenter.propTypes = {
  track: PropTypes.object,
};

export default TrackPresenter;
