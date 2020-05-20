import React from 'react';
import styles from './TrailerModal.module.scss';

export default function TrailerModal(props) {
  return (
    <div
      className={styles.modal}
      style={{display: props.modalIsOpen ? 'flex' : 'none'}}
      data-testid="modal"
      onClick={() => props.setIsOpen(false)}
    >
      {props.isTrailerLoading ? null : props.trailerSource ?
        <iframe
        width="800"
        height="450"
        src={`https://www.youtube.com/embed/${props.trailerSource}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
        </iframe> :
        <span className={styles.noTrailer}>
          Trailer is not available
        </span>
      }
    </div>
  )
}
