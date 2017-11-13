import React from 'react';
import PropTypes from 'prop-types';

import TrackTemplate from './Track.template';

class TrackPresenter extends React.Component {

  render() {
    const { track } = this.props;
    const artists = track.artists.map(a => a.name).join(', ');
    return (
      <TrackTemplate
        trackTitle={track.name}
        artist={artists}
        albumTitle={track.album.name}
        onTrackAction={() => { this.props.onTrackAction(track); }}
        actionSymbol={this.props.actionSymbol}
      />
    );
  }
}
TrackPresenter.propTypes = {
  track: PropTypes.object,
};

export default TrackPresenter;
