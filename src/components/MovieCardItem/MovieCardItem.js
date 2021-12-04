import PropTypes from 'prop-types';
import s from './MovieCardItem.module.css';

export default function MovieCardItem({ movie }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.original_title}
        className={s.movieCardItemImage}
      />
      <h3 className={s.title}>{movie.original_title}</h3>
    </div>
  );
}

MovieCardItem.propTypes = {
  movie: PropTypes.objectOf(PropTypes.shape),
};
