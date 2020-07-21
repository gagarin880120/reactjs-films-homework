import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './SearchField.module.scss';

export default function SearchField({ onSearch }) {
  const [query, setQuery] = useState('');
  const history = useHistory();
  return (
    <input
      className={styles.searchInput}
      type="search"
      placeholder="&#61442;"
      onChange={(e) => setQuery(e.target.value)}
      value={query}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          history.location.pathname = '/';
          history.push(`search=${query}`);
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
