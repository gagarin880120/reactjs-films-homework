import { hot } from 'react-hot-loader/root';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MovieDetailsPageContainer from '../../pages/MovieDetailsPage';
import SearchResultsPage from '../../pages/SearchResultsPage/SearchResultsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SearchResultsPage} />
        <Route path="/movieDetailsPage" exact component={MovieDetailsPageContainer} />
      </Switch>
    </Router>
  );
}

export default hot(App);
