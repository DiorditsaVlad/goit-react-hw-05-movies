import PropTypes from 'prop-types';
import s from './MovieDetailsCard.module.css';

export default function MovieDetailsCard({ movie }) {
  return (
    <div className={s.wrapper}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.original_title}
        className={s.image}
      />

      <div>
        <h2 className={s.title}>{movie.original_title}</h2>
        <p className={s.descr}> {movie.overview} </p>
        <p className={s.descr}>Release date: {movie.release_date}</p>
        <p className={s.descr}>Rating: {movie.vote_average} </p>
      </div>
    </div>
  );
}

MovieDetailsCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
