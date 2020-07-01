import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovies } from '../../redux/actions';
import SearchField from './SearchField';
import getURL from '../../utils/utils';

export function SearchFieldContainer({ onSearch }) {
  return (
    <SearchField
      onSearch={onSearch}
    />
  );
}

export const mapDispatchToProps = (dispatch) => ({
  onSearch(query) {
    if (query) {
      dispatch(getMovies(getURL('search'), 1, query));
    }
  },
});

SearchFieldContainer.propTypes = {
  onSearch: PropTypes.func,
};

SearchFieldContainer.defaultProps = {
  onSearch: null,
};

export default connect(null, mapDispatchToProps)(SearchFieldContainer);
