import React, { Component } from 'react';

import './App.css';

import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleOnSubmitSearch = this.handleOnSubmitSearch.bind(this);
    this.searchResultTrackAction = this.searchResultTrackAction.bind(this);
    this.playlistTrackAction = this.playlistTrackAction.bind(this);
    this.handleOnChangePlaylistTitle = this.handleOnChangePlaylistTitle.bind(this);

    this.state = {
      searchResults: [],
      playlist: [],
      playlistTitle: 'New playlist',
    };
  }

  handleOnSubmitSearch(searchTerm) {

  }

  searchResultTrackAction() {

  }

  playlistTrackAction() {

  }

  handleOnChangePlaylistTitle(event) {
    this.setState({ playlistTitle: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar onSubmitSearch={this.handleOnSubmitSearch} />

          <div class="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onTrackAction={this.searchResultTrackAction}
            />

            <Playlist
              tracks={this.state.playlist}
              onTrackAction={this.playlistTrackAction}
              playlistTitle={this.state.playlistTitle}
              onChangePlaylistTitle={this.handleOnChangePlaylistTitle}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
