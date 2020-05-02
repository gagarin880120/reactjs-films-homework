import React from 'react';
import PropTypes from 'prop-types';
import styles from './signature.module.scss';

export default function Signature(props) {
  return (
    <header className={styles.header}>
      <h1>{props.name}</h1>
    </header>
  )
}

Signature.propTypes = {
  name: PropTypes.string
}
