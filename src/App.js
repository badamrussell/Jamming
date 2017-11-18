import React, { Component } from 'react';

import './App.css';

import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

import spotifyApi from './api/spotify';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleOnSubmitSearch = this.handleOnSubmitSearch.bind(this);
    this.addTrackToPlaylist = this.addTrackToPlaylist.bind(this);
    this.removeTrackFromPlaylist = this.removeTrackFromPlaylist.bind(this);
    this.handleOnChangePlaylistTitle = this.handleOnChangePlaylistTitle.bind(this);
    this.handleOnSavePlaylist = this.handleOnSavePlaylist.bind(this);

    this.state = {
      searchResults: [],
      playlist: [],
      playlistTitle: 'New playlist',
      token: spotifyApi.getAccessTokenFromUrl(),
    };
  }

  handleOnSubmitSearch(searchTerm) {
    if (this.state.token) {
      spotifyApi.search(this.state.token, searchTerm).then((results) => {
        this.setState({
          searchResults: results.tracks.items,
        });
      });
    } else {
      spotifyApi.authenticate();
    }
  }

  addTrackToPlaylist(track) {
    const trackAlreadyInPlaylist = this.state.playlist.findIndex(t => t.id === track.id) > -1;

    if (trackAlreadyInPlaylist) {
      return;
    }

    const playlist = this.state.playlist.map(p => p);
    playlist.push(track);
    this.setState({ playlist });
  }

  removeTrackFromPlaylist(track) {
    const playlist = this.state.playlist.filter(t => t.id !== track.id);
    this.setState({ playlist });
  }

  handleOnChangePlaylistTitle(event) {
    this.setState({ playlistTitle: event.target.value });
  }

  handleOnSavePlaylist() {
    spotifyApi.savePlaylist(this.state.token, this.state.playlistTitle, this.state.playlist)
      .then(() => {
        this.setState({
          playlist: [],
          playlistTitle: 'New playlist',
        });
      }).catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSubmitSearch={this.handleOnSubmitSearch} />

          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onTrackAction={this.addTrackToPlaylist}
            />

            <Playlist
              tracks={this.state.playlist}
              onTrackAction={this.removeTrackFromPlaylist}
              playlistTitle={this.state.playlistTitle}
              onChangePlaylistTitle={this.handleOnChangePlaylistTitle}
              onSavePlaylist={this.handleOnSavePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
