import React from 'react';
import styles from './SearchField.module.scss';

export default function SearchField(props) {
  return (
    <input
      className={styles.searchInput}
      type="search"
      placeholder="🔍"
      onChange={e => {props.setQuery(e.target.value)}}
      value={props.query}
      onKeyDown={props.onKeyDownHandler}
    />
  )
}
