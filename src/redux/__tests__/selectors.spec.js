import {
  resultsSelector, modalSelector, movieDetailsSelector, trailerSelector, isTrailerLoadedSelector,
  genresSelector, currentPageSelector, totalPagesSelector, querySelector, areMoviesLoadedSelector,
  currentURLSelector, currentGenreSelector,
} from '../selectors';

const state = {
  results: [
    {
      "poster_path":"/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      "id":603,
      "genre_ids":[28,878],
      "title":"The Matrix",
      "vote_average":8.1,
      "overview":"Set in the 22nd century, The Matrix tells the story of a computer hacker...",
    },
    {
      "poster_path":"/aA5qHS0FbSXO8PxcxUIHbDrJyuh.jpg",
      "id":604,
      "genre_ids":[28,12,878,53],
      "title":"The Matrix Reloaded",
      "vote_average":6.9,
      "overview":"Six months after the events depicted in The Matrix, Neo has proved...",
    }
  ],
  query: 'request',
  genres: [
    {id: 28, name: 'Adventure'},
    {id: 878, name: 'Science Fiction'},
    {id: 12, name: 'Action'},
    {id: 53, name: 'Thriller'}
  ],
  isModalOpen: false,
  trailerURL: 'path-to-trailer',
  isTrailerLoaded: true,
  movieDetails: {
    "genres": [
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "id": 419704,
    "overview": "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
    "poster_path": "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
    "runtime": 123,
    "title": "Ad Astra",
    "vote_average": 6.1,
  },
  currentPage: 1,
  totalPages: 0,
  areMoviesLoaded: false,
  currentURL: 'url',
  currentGenre: 'Action',
};

describe('Selector', () => {
  test('resultsSelector should return results', () => {
    expect(resultsSelector(state)).toStrictEqual(
      [
        {
          poster_path: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
          id: 603,
          genre_ids: [ 28, 878 ],
          title: 'The Matrix',
          vote_average: 8.1,
          overview: 'Set in the 22nd century, The Matrix tells the story of a computer hacker...',
          genres: 'Adventure, Science Fiction'
        },
        {
          poster_path: '/aA5qHS0FbSXO8PxcxUIHbDrJyuh.jpg',
          id: 604,
          genre_ids: [ 28, 12, 878, 53 ],
          title: 'The Matrix Reloaded',
          vote_average: 6.9,
          overview: 'Six months after the events depicted in The Matrix, Neo has proved...',
          genres: 'Adventure, Action, Science Fiction, Thriller'
        }
      ]
    )
  });

  test('querySelector should return query', () => {
    expect(querySelector(state)).toStrictEqual(state.query)
  });

  test('genresSelector should return genres', () => {
    expect(genresSelector(state)).toStrictEqual(state.genres)
  });

  test('modalSelector should return isModalOpen', () => {
    expect(modalSelector(state)).toStrictEqual(state.isModalOpen)
  });

  test('trailerSelector should return trailerURL', () => {
    expect(trailerSelector(state)).toStrictEqual(state.trailerURL)
  });

  test('isTrailerLoadedSelector should return isTrailerLoaded', () => {
    expect(isTrailerLoadedSelector(state)).toStrictEqual(state.isTrailerLoaded)
  });

  test('movieDetailsSelector should return movieDetails', () => {
    expect(movieDetailsSelector(state)).toStrictEqual(
      {
        "genres": "Science Fiction, Drama",
        "id": 419704,
        "overview": "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        "poster_path": "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
        "runtime": "2h 3m",
        "stars": [
         {
            "id": 0,
            "type": "full",
          },
          {
            "id": 1,
            "type": "full",
          },
          {
            "id": 2,
            "type": "full",
          },
        ],
        "title": "Ad Astra",
        "vote_average": 6.1,
      }
    )
  });

  test('movieDetailsSelector should return null if is not movieDetails', () => {
    expect(movieDetailsSelector({movieDetails: null})).toStrictEqual(null)
  });

  test('currentPageSelector should return currentPage', () => {
    expect(currentPageSelector(state)).toStrictEqual(state.currentPage)
  });

  test('totalPagesSelector should return totalPages', () => {
    expect(totalPagesSelector(state)).toStrictEqual(state.totalPages)
  });

  test('areMoviesLoadedSelector should return areMoviesLoaded', () => {
    expect(areMoviesLoadedSelector(state)).toStrictEqual(state.areMoviesLoaded)
  });

  test('currentURLSelector should return currentURL', () => {
    expect(currentURLSelector(state)).toStrictEqual(state.currentURL)
  });

  test('currentGenreSelector should return currentGenre', () => {
    expect(currentGenreSelector(state)).toStrictEqual(state.currentGenre)
  });
});

