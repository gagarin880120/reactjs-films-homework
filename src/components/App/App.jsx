import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';
import MovieDetailsPageContainer from '../../pages/MovieDetailsPage';
import SearchResultsPageContainer from '../../pages/SearchResultsPage';
import styles from './App.module.scss';
import Spinner from '../Spinner/Spinner';

function App({
  onAppLoad, genres, onReload, currentAPIRequest,
}) {
  const location = useLocation();
  useEffect(() => {
    if (!genres) {
      onAppLoad();
    }
    if (location.pathname.length > 1) {
      onReload(location.pathname);
    }
  }, [location]);

  return (
    genres
      ? (
        <div className={styles.wrapper}>
          <Switch>
            <Route exact path="/">
              <Redirect to={`/${currentAPIRequest}`} />
            </Route>
            <Route path={`/${currentAPIRequest}`} exact component={SearchResultsPageContainer} />
            <Route path="/movie/:id" exact component={MovieDetailsPageContainer} />
          </Switch>
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
  currentAPIRequest: PropTypes.string,
  onReload: PropTypes.func,
};

App.defaultProps = {
  onAppLoad: null,
  genres: [],
  currentAPIRequest: '',
  onReload: null,
};
