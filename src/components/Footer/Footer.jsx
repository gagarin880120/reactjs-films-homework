import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';

export default function Footer({
  results, onIntersect, currentPage, query, areMoviesLoaded, url, totalPages,
}) {
  const footer = useRef();
  useEffect(() => {
    if (currentPage === totalPages) {
      return;
    }
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
          onIntersect(url, currentPage + 1, query, results);
          observer = observer.disconnect();
        }
      });
    });
    observer.observe(footer.current);
  }, [areMoviesLoaded]);

  return (
    <div className={styles.wrapper} ref={footer}>

      <div className={styles.header}>
        films
      </div>
      <p className={styles.text}>
        Copyright © 2020 FILMS. Andrei Mandryk
      </p>
    </div>
  );
}

Footer.propTypes = {
  results: PropTypes.instanceOf(Array),
  currentPage: PropTypes.number,
  onIntersect: PropTypes.func,
  query: PropTypes.string,
  areMoviesLoaded: PropTypes.bool,
  url: PropTypes.string,
  totalPages: PropTypes.number,
};

Footer.defaultProps = {
  results: [],
  currentPage: 1,
  onIntersect: null,
  query: '',
  areMoviesLoaded: false,
  url: '',
  totalPages: 0,
};
