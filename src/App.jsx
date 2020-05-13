import { hot } from 'react-hot-loader/root';
import React from 'react';
// import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MovieListContainer from './components/MovieList/index';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
    <Header />
      {/* <MovieDetailsPage /> */}
    <MovieListContainer />
    </div>
  )
}

export default hot(App);
