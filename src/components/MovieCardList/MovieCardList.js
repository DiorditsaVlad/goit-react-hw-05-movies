import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MovieCardItem from '../MovieCardItem/MovieCardItem';
import s from './MovieCardList.module.css';

const MovieCardList = ({ movies }) => {
  // const navigate = useNavigate();

  return (
    <ul className={s.movieList}>
      {movies.map(movie => {
        return (
          <li key={movie.id} className={s.movieCardItem}>
            <Link to={`/movies/${movie.id}`} className={s.link}>
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
