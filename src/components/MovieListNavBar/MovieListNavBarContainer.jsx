import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieListNavBar from './MovieListNavBar';
import {
  getTrendingMovies, getTopRatedMovies, getUpcomingMovies, setCurrentGenre,
  filterResultsByGenre,
} from '../../redux/actions';
import { genresSelector, resultsSelector, currentGenreSelector } from '../../redux/selectors';

export function MovieListNavBarContainer({
  onTrending, onTopRated, onUpcoming, genres, onGenreChange, results, currentGenre
}) {
  useEffect(() => {
    onTrending(0);
  }, []);

  return (
    <MovieListNavBar
      onTrending={onTrending}
      onTopRated={onTopRated}
      onUpcoming={onUpcoming}
      onGenreChange={onGenreChange}
      genres={genres}
      results={results}
      currentGenre={currentGenre}
    />
  );
}

export const mapStateToProps = (state) => ({
  genres: genresSelector(state),
  results: resultsSelector(state),
  currentGenre: currentGenreSelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onTrending(genre) {
    dispatch(getTrendingMovies(genre));
  },
  onTopRated(genre) {
    dispatch(getTopRatedMovies(genre));
  },
  onUpcoming(genre) {
    dispatch(getUpcomingMovies(genre));
  },
  onGenreChange(results, genreId) {
    dispatch(setCurrentGenre(genreId));
    dispatch(filterResultsByGenre(results, genreId));
  }
});

MovieListNavBarContainer.propTypes = {
  onTrending: PropTypes.func,
  onTopRated: PropTypes.func,
  onUpcoming: PropTypes.func,
  onGenreChange: PropTypes.func,
  genres: PropTypes.instanceOf(Array),
  results: PropTypes.instanceOf(Array),
  currentGenre: PropTypes.number,
};

MovieListNavBarContainer.defaultProps = {
  onTrending: null,
  onTopRated: null,
  onUpcoming: null,
  onGenreChange: null,
  genres: [],
  results: [],
  currentGenre: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListNavBarContainer);
