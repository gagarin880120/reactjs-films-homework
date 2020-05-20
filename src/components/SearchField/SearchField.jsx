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
      value={props.query}
      onKeyDown={(e) => {
        if (query) {
          if (e.key ==='Enter') {
            props.onKeyDownHandler(query);
          }
        }
      }}
    />
  )
}
