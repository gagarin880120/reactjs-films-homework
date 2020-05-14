import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchResultsAction } from '../../redux/actions';
import SearchField from './SearchField';

export default function SearchFieldContainer() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  function getResults(str) {
    return () => {
      const url = new URL('https://api.themoviedb.org/3/search/movie');
      url.searchParams.set('api_key', '306b98213f954f1d07d1d09517898f10');
      url.searchParams.set('language', 'en-US');
      url.searchParams.set('query', str);
      url.searchParams.set('page', '1');
      url.searchParams.set('include_adult', 'false');
      url.searchParams.set('video', 'true');
      fetch(url)
        .then(res => res.json())
        .then(data => dispatch(searchResultsAction(data.results)))
        .catch(e => console.log(e))
    }
  }

  function onKeyDownHandler(e) {
    if (query) {
      if (e.key ==='Enter') {
        return getResults(query)()
      }
    }
  }

  return (
    <SearchField
      query={query}
      setQuery={setQuery}
      onKeyDownHandler={onKeyDownHandler}
    />
  )
}
