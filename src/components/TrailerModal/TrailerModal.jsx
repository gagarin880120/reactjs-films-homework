import React, {useEffect, useState} from 'react';
import styles from './TrailerModal.module.scss';
import getTrailer from '../../services/services';

export default function TrailerModal(props) {
  const [trailerSource, setTrailerSource] = useState('loading');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTrailer(props.id);
        setTrailerSource(data.videos.results[0].key)
      } catch (error) {
        setTrailerSource(null)
      }
    }

    fetchData();
  }, [props.modalIsOpen])

  return (
    <div
      className={styles.modal}
      testid="modal"
      onClick={() => props.setModalIsOpen(false)}
    >
      {trailerSource === 'loading' ? null : trailerSource ?
        <iframe
          data-testid="video"
          width="800"
          height="450"
          src={`https://www.youtube.com/embed/${trailerSource}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> :
        <span data-testid="noTrailer" className={styles.noTrailer}>
          Trailer is not available
        </span>
      }
    </div>
  )
}
