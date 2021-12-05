import {
  useParams,
  NavLink,
  useNavigate,
  useLocation,
  Outlet,
} from 'react-router-dom';

import { useEffect, useState, Suspense } from 'react';
import Loader from 'react-loader-spinner';

import * as movieAPI from '../services/apiService';
import MovieDetailsCard from '../components/MovieDetailsCard/MovieDetailsCard';

import s from './pages.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// const Cast = lazy(() => import('./Cast' /*webpackChunkName: 'cast' */));
// const Reviews = lazy(() =>
//   import('./Reviews' /*webpackChunkName: 'reviews' */),
// );

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  // const { url, path } = useRouteMatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [movie, setMovie] = useState(null);

  // const ref = navigate(location.state);

  useEffect(() => {
    movieAPI.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);
  const goToBack = () => {
    navigate(location?.state?.from ?? '/');
  };
  return (
    <div className={s.container}>
      {movie && (
        <>
          <button type="button" className={s.button} onClick={goToBack}>
            Go back
          </button>

          <MovieDetailsCard movie={movie} />
        </>
      )}

      <ul className={s.detailsCardNavList}>
        <li className={s.navListItem}>
          <NavLink
            to={`/movies/${movieId}/cast`}
            state={{ from: location }}
            className={s.link}
          >
            Cast
          </NavLink>
        </li>
        <li className={s.navListItem}>
          <NavLink
            to={`/movies/${movieId}/reviews`}
            state={{ from: location }}
            className={s.link}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
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
        {/* <Routes>
          <Route path="/movies/movieId/cast" element={<Cast />} />

          <Route path="/movies/movieId/reviews" element={<Reviews />} />
        </Routes>
        <Outlet /> */}
      </Suspense>
    </div>
  );
}
