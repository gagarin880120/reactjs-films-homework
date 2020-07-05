import React from 'react';
import PropTypes from 'prop-types';
import styles from './TrailerModal.module.scss';

export default function TrailerModal({ closeModal, trailerURL, isTrailerLoaded }) {
  return (
    <div
      className={styles.modal}
      onClick={() => closeModal()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.code === 'Escape') {
          closeModal();
        }
      }}
    >
      {
        !isTrailerLoaded ? null
          : (
            <>
              {
              trailerURL
              && (
                <iframe
                  title="video"
                  width="800"
                  height="450"
                  src={`https://www.youtube.com/embed/${trailerURL}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )
            }
              {
              !trailerURL && (
              <span className={styles.noTrailer}>
                Trailer is not available
              </span>
              )
            }
            </>
          )
      }
    </div>
  );
}

TrailerModal.propTypes = {
  closeModal: PropTypes.func,
  trailerURL: PropTypes.string,
  isTrailerLoaded: PropTypes.bool,
};

TrailerModal.defaultProps = {
  closeModal: null,
  trailerURL: '',
  isTrailerLoaded: false,
};
