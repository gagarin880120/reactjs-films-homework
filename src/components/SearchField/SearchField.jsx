import React, { useState } from 'react';
import styles from './SearchField.module.scss';
import { getResults } from '../../redux/actions';

export default function SearchField(props) {
  const [query, setQuery] = useState('');
  function onKeyDownHandler(query) {
    if (query) {
      return props.dispatch(getResults(query));
    }
  }
  return (
    <input
      className={styles.searchInput}
      type="search"
      placeholder="🔍"
      onChange={(e) => setQuery(e.target.value)}
      value={props.query}
      onKeyDown={(e) => {
        if (e.key ==='Enter') {
          onKeyDownHandler(query);
        }
      }}
    />
  )
}
