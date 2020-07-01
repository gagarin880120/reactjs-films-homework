const API_KEY = '306b98213f954f1d07d1d09517898f10';
const URLs = {
  search: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`
  + '&language=en-US&include_adult=false&video=true&query=',
  trending: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  upComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  byGenre: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
  + '&language=en-US&sort_by=popularity.desc&include_adult=false'
  + '&include_video=false&with_genres=',
};

export default function getURL(requestType) {
  return URLs[requestType];
}
