import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

const SearchBar = (props) => (
  <div className="SearchBar">
    <input
      placeholder="Enter A Song Title"
      name="search_term"
      onChange={props.onChange}
      value={props.searchTerm}
    />
    <a onClick={props.onSubmitSearch}>SEARCH</a>
  </div>
);
SearchBar.propTypes = {
  searchTerm: PropTypes.string,
  onSubmitSearch: PropTypes.func,
  onChange: PropTypes.func,
};

export default SearchBar;
