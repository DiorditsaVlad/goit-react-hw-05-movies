import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import Navigation from './components/Navigation/Navigation';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const HomePage = lazy(() =>
  import('./views/HomePage' /*webpackChunkName: 'home-page' */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /*webpackChunkName: 'movies-page' */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /*webpackChunkName: 'movie-details-page' */
  ),
);
const Cast = lazy(() => import('./views/Cast' /*webpackChunkName: 'cast' */));
const Reviews = lazy(() =>
  import('./views/Reviews' /*webpackChunkName: 'reviews' */),
);

function App() {
  return (
    <>
      <Navigation />

      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={3000}
          />
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />} /> */}
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
