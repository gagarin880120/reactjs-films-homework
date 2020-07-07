import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchField.module.scss';

export default function SearchField({ onSearch }) {
  const [query, setQuery] = useState('');

  return (
    <input
      className={styles.searchInput}
      type="search"
      placeholder="&#61442;"
      onChange={(e) => setQuery(e.target.value)}
      value={query}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onSearch(query);
        }
      }}
    />
  );
}

SearchField.propTypes = {
  onSearch: PropTypes.func,
};

SearchField.defaultProps = {
  onSearch: null,
};
