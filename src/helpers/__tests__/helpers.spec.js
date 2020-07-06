import { getGenresString, getStars, convertTime } from '../helpers';

describe('getGenresString', () => {
  test('should return string of genres according to their id\'s', () => {
    const genres = [
      {id: 28, name: "Action"},
      {id: 12, name: "Adventure"},
      {id: 16, name: "Animation"},
      {id: 35, name: "Comedy"},
      {id: 80, name: "Crime"},
      {id: 99, name: "Documentary"},
      {id: 18, name: "Drama"},
      {id: 10751, name: "Family"}
    ]
    expect(getGenresString([28, 12], genres)).toStrictEqual('Action, Adventure');
  });
});

describe('getStars', () => {
  test('should return array of objects with type of stars and id\'s, according to received number', () => {
    expect(getStars(8.6)).toStrictEqual([
      { type: 'full', id: 0 },
      { type: 'full', id: 1 },
      { type: 'full', id: 2 },
      { type: 'full', id: 3 },
      { type: 'half', id: 4 },
    ]);
    expect(getStars(5.9)).toStrictEqual([
      { type: 'full', id: 0 },
      { type: 'full', id: 1 },
      { type: 'full', id: 2 },
    ]);
  });
});

describe('convertTime', () => {
  test('should return string with movie duration in hours and minutes according to recieved number of minutes', () => {
    expect(convertTime(120)).toStrictEqual('2h');
  });
});
