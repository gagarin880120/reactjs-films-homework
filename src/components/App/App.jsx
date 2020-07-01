import { hot } from 'react-hot-loader/root';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MovieDetailsPageContainer from '../../pages/MovieDetailsPage';
import SearchResultsPageContainer from '../../pages/SearchResultsPage';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <Router>
        <Switch>
          <Route path="/" exact component={SearchResultsPageContainer} />
          <Route path="/movieDetailsPage" exact component={MovieDetailsPageContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default hot(App);
