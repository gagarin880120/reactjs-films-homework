import React from 'react';
import { useDispatch } from 'react-redux';
import { getResults } from '../../redux/actions';

import SearchField from './SearchField';

export default function SearchFieldContainer() {
  const dispatch = useDispatch();

  function onKeyDownHandler(query) {
    return dispatch(getResults(query));
  }

  return (
    <SearchField
      onKeyDownHandler={onKeyDownHandler}
    />
  )
}
