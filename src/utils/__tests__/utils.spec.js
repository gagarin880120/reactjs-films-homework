import getURL from '../utils';

describe('utils', () => {
  test('getURL should return url', () => {
    expect(getURL('trending')).toBe(
      'https://api.themoviedb.org/3/movie/popular?api_key=306b98213f954f1d07d1d09517898f10&language=en-US'
    )
  })
})
