import React from 'react';
import PropTypes from 'prop-types';

import TrackTemplate from './Track.template';

class TrackPresenter extends React.Component {

  render() {
    const { track } = this.props;

    return (
      <TrackTemplate
        trackTitle={track.title}
        artist={track.artist}
        albumTitle={track.album}
        onTrackAction={this.props.onTrackAction}
      />
    );
  }
}
TrackPresenter.propTypes = {
  track: PropTypes.object,
};

export default TrackPresenter;
