const API_KEY = '203f8b0b3061edeb4224dec7e35e9b80';
const BASE_URL = 'https://api.themoviedb.org/';

function fetchGallery(url) {
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Not found`));
  });
}

export function fetchTrendingMovies() {
  return fetchGallery(`${BASE_URL}3/trending/movie/day?api_key=${API_KEY}`);
}

export function fetchSearchMovies(searchQuery) {
  return fetchGallery(
    `${BASE_URL}3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
  );
}

export function fetchMovieById(movieId) {
  return fetchGallery(
    `${BASE_URL}3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchMovieCastList(movieId) {
  return fetchGallery(
    `${BASE_URL}3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchMovieReview(movieId) {
  return fetchGallery(
    `${BASE_URL}3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
}
