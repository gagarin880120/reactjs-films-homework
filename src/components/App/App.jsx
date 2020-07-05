import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MovieDetailsPageContainer from '../../pages/MovieDetailsPage';
import SearchResultsPageContainer from '../../pages/SearchResultsPage';
import styles from './App.module.scss';
import Spinner from '../Spinner/Spinner';

function App({ onAppLoad, genres }) {
  useEffect(() => {
    if (!genres) {
      onAppLoad();
    }
  }, []);
  return (
    genres
      ? (
        <div className={styles.wrapper}>
          <Router>
            <Switch>
              <Route path="/" exact component={SearchResultsPageContainer} />
              <Route path="/movieDetailsPage" exact component={MovieDetailsPageContainer} />
            </Switch>
          </Router>
        </div>
      ) : (
        <div className={styles.loading}>
          <Spinner />
        </div>
      )
  );
}

export default hot(App);

App.propTypes = {
  onAppLoad: PropTypes.func,
  genres: PropTypes.instanceOf(Array),
};

App.defaultProps = {
  onAppLoad: null,
  genres: [],
};
