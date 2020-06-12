import getTrailer from '../services';

describe('getTrailer', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  test('when is called should return data to me', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))

    getTrailer(603).then(res => {
      expect(res.data).toEqual('12345')
    })

    expect(fetch.mock.calls.length).toEqual(1)
  })
})
