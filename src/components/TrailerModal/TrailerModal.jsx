import React from 'react';
import PropTypes from 'prop-types';
import styles from './TrailerModal.module.scss';

export default function TrailerModal({ closeModal, trailerURL }) {
  return (
    <div
      className={styles.modal}
      testid="modal"
      onClick={() => closeModal()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.code === 'Escape') {
          closeModal();
        }
      }}
    >
      {trailerURL === 'loading' ? null
        : (
          <>
            {
          trailerURL
            ? (
              <iframe
                title="video"
                testid="video"
                width="800"
                height="450"
                src={`https://www.youtube.com/embed/${trailerURL}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <span testid="noTrailer" className={styles.noTrailer}>
                Trailer is not available
              </span>
            )
        }

          </>
        )}
    </div>
  );
}

TrailerModal.propTypes = {
  closeModal: PropTypes.func,
  trailerURL: PropTypes.string,
};

TrailerModal.defaultProps = {
  closeModal: null,
  trailerURL: '',
};
