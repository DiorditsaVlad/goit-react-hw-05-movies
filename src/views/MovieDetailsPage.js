import {
  useParams,
  NavLink,
  Route,
  Switch,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';

import { useEffect, useState, lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';

import * as movieAPI from '../services/apiService';
import MovieDetailsCard from '../components/MovieDetailsCard/MovieDetailsCard';

import s from './pages.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Cast = lazy(() => import('./Cast' /*webpackChunkName: 'cast' */));
const Reviews = lazy(() =>
  import('./Reviews' /*webpackChunkName: 'reviews' */),
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();

  const [movie, setMovie] = useState(null);

  const { ref, search } = history.location.state;

  useEffect(() => {
    movieAPI.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <div className={s.container}>
      {movie && (
        <>
          <NavLink to={`${ref}${search}` ?? '/'}>
            <button type="button" className={s.button}>
              Go back
            </button>
          </NavLink>

          <MovieDetailsCard movie={movie} />
        </>
      )}

      <ul className={s.detailsCardNavList}>
        <li className={s.navListItem}>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: {
                ref: ref,
                search: search,
              },
            }}
            className={s.link}
            activeClassName={s.activeLink}
          >
            Cast
          </NavLink>
        </li>
        <li className={s.navListItem}>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: {
                ref: ref,
                search: search,
              },
            }}
            className={s.link}
            activeClassName={s.activeLink}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
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
          <Route path={`${path}/cast`}>
            <Cast />
          </Route>

          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
