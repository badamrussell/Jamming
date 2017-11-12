import React from 'react';
import PropTypes from 'prop-types';

import './SearchResults.css';

import Track from '../Track';

const SearchResultsTemplate = (props) => (
  <div class="SearchResults">
    <h2>Results</h2>

    {
      props.searchResults.map((result, index) => (
        <Track key={index} track={result} onTrackAction={props.onTrackAction} />
      ))
    }
  </div>
);
SearchResultsTemplate.propTypes = {
  searchResults: PropTypes.string.isRequired,
  onTrackAction: PropTypes.func.isRequired,
};

export default SearchResultsTemplate;
