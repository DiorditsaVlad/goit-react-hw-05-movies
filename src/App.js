import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route path="/movies">
            <MoviesPage />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
