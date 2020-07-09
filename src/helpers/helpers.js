function getGenresString(arr, genres) {
  return arr.map((id) => genres[genres.findIndex((v) => v.id === id)].name).join(', ');
}

function getStars(num) {
  const half = num / 2;
  const arr = [];
  arr.length = Math.floor(half);
  const rest = half - Math.floor(half);
  arr.fill({ type: 'full' });
  if (rest > 0.75) {
    arr.push({ type: 'full' });
  } else if (rest > 0.25) {
    arr.push({ type: 'half' });
  }
  return arr.map((v, i) => ({
    ...v,
    id: i,
  }));
}

function getUnique(arr) {
  const map = new Map();
  return arr.filter((el) => {
    const val = map.get(el.title);
    if (val) {
      if (el.id < val) {
        map.delete(el.title);
        map.set(el.title, el.id);
        return true;
      }
      return false;
    }
    map.set(el.title, el.id);
    return true;
  });
}

function convertTime(num) {
  return `${Math.floor(num / 60)}h${num % 60 ? ` ${num % 60}m` : ''}`;
}

export {
  getGenresString, getStars, convertTime, getUnique,
};
