import React from 'react';
import { useDispatch } from 'react-redux';


import SearchField from './SearchField';

export default function SearchFieldContainer() {
  const dispatch = useDispatch();

  return (
    <SearchField
      dispatch={dispatch}
    />
  )
}
