import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import MovieCardItem from '../MovieCardItem/MovieCardItem';
import s from './MovieCardList.module.css';

const MovieCardList = ({ movies }) => {
  const history = useHistory();

  return (
    <ul className={s.movieList}>
      {movies.map(movie => {
        return (
          <li key={movie.id} className={s.movieCardItem}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  ref: history.location.pathname,
                  search: history.location.search,
                },
              }}
              className={s.link}
            >
              <MovieCardItem movie={movie} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MovieCardList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieCardList;
