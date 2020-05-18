import { getGenresString, getTrailer } from '../helpers';

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

describe('testing getTrailer', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('calls getTrailer and returns data to me', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))

    getTrailer(603).then(res => {
      expect(res.data).toEqual('12345')
    })

    expect(fetch.mock.calls.length).toEqual(1)
  })
})
