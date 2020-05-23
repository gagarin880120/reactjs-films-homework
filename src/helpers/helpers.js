function getGenresString(arr, genres) {
  return arr.map((id) => genres[genres.findIndex((v) => v.id === id)].name).join(', ');
}

function getTrailer(id) {
  const API_KEY = '306b98213f954f1d07d1d09517898f10';
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`,
  )
    .then((res) => res.json());
}

export { getGenresString, getTrailer };
