import React from 'react';
import PropTypes from 'prop-types';

import SearchBarTemplate from './SearchBar.template';

class SearchBarPresenter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  render() {
    return (
      <SearchBarTemplate
        searchTerm={this.state.searchTerm}
        onSubmitSearch={() => { this.props.onSubmitSearch(this.state.searchTerm); }}
        onChange={(event) => {
          this.setState({ searchTerm: event.target.value });
        }}
      />
    );
  }
}
SearchBarPresenter.propTypes = {
  onSubmitSearch: PropTypes.func,
};

export default SearchBarPresenter;
