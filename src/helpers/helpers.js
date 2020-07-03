export default function getGenresString(arr, genres) {
  return arr.map((id) => genres[genres.findIndex((v) => v.id === id)].name).join(', ');
}
