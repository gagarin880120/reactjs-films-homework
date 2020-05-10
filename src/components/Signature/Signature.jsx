import { hot } from 'react-hot-loader/root';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './signature.module.scss';

function Signature(props) {
  return (
    <header className={styles.header}>
      <h1>{props.name}</h1>
    </header>
  )
}

export default hot(Signature);

Signature.propTypes = {
  name: PropTypes.string
}
