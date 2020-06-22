import React from 'react';
import { connect } from 'react-redux';
import { getResults } from '../../redux/actions';
import SearchField from './SearchField';

export function SearchFieldContainer({ onSearch }) {
  return (
    <SearchField
      onSearch={onSearch}
    />
  )
}

export const mapDispatchToProps = (dispatch) => {
  return {
    onSearch(query) {
      if(query) {
        dispatch(getResults(query));
      }
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchFieldContainer)
