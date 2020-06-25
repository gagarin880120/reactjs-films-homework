import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieDetailsPage from './MovieDetailsPage';
import { movieDetailsSelector } from '../../redux/selectors';

export function MovieDetailsPageContainer({ movie }) {
  return (
    movie
      ? (
        <MovieDetailsPage
          background={movie.backdrop_path}
        />
      ) : <>Loading...</>
  );
}

export const mapStateToProps = (state) => ({
  movie: movieDetailsSelector(state),
});

MovieDetailsPageContainer.propTypes = {
  movie: PropTypes.instanceOf(Object),
};

MovieDetailsPageContainer.defaultProps = {
  movie: {},
};

export default connect(mapStateToProps)(MovieDetailsPageContainer);
