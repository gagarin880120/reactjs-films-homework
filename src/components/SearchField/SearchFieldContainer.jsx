import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrentAPIRequest } from '../../redux/actions';
import SearchField from './SearchField';

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
      dispatch(setCurrentAPIRequest(`search=${query}`));
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
