import { useEffect, useState } from 'react';
import * as movieAPI from '../services/apiService';
import MovieCardList from '../components/MovieCardList/MovieCardList';
import PageHeading from '../components/PageHeading/PageHeading';
import s from './pages.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieAPI.fetchTrendingMovies().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <div className={s.container}>
      <PageHeading text="Popular movies" />
      <MovieCardList movies={movies} />
    </div>
  );
}
