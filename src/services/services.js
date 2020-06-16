export default async function getTrailer(id) {
  const API_KEY = '306b98213f954f1d07d1d09517898f10';
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`,
  );

  return res.json();
}
