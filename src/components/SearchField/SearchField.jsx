import React, { useState } from 'react';
import styles from './SearchField.module.scss';

export default function SearchField(props) {
  const [query, setQuery] = useState('');

  return (
    <input
      className={styles.searchInput}
      type="search"
      placeholder="🔍"
      onChange={(e) => setQuery(e.target.value)}
      value={query}
      onKeyDown={(e) => {
        if (e.key ==='Enter') {
          props.onSearch(query)
        }
      }}
    />
  )
}
