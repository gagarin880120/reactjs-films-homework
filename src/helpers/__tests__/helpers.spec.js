import getGenresString from '../helpers';

test('function getGenresString must return string of genres according to their id\'s', () => {
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
