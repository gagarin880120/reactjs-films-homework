import React, {useEffect, useState} from 'react';
import styles from './TrailerModal.module.scss';
import getTrailer from '../../services/services';

export default function TrailerModal(props) {
  return (
    <div
      className={styles.modal}
      testid="modal"
      onClick={() => props.closeModal()}
    >
      {props.trailerURL === 'loading' ? null : props.trailerURL ?
        <iframe
          data-testid="video"
          width="800"
          height="450"
          src={`https://www.youtube.com/embed/${props.trailerURL}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> :
        <span testid="noTrailer" className={styles.noTrailer}>
          Trailer is not available
        </span>
      }
    </div>
  )
}
