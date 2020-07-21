import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';

export default function Footer({
  results, onIntersect, currentPage, areMoviesLoaded, currentAPIRequest, totalPages,
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
          onIntersect(currentAPIRequest, currentPage + 1, results);
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
  areMoviesLoaded: PropTypes.bool,
  totalPages: PropTypes.number,
  currentAPIRequest: PropTypes.string,
};

Footer.defaultProps = {
  results: [],
  currentPage: 1,
  onIntersect: null,
  areMoviesLoaded: false,
  totalPages: 0,
  currentAPIRequest: '',
};
