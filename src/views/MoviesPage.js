import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import * as movieAPI from '../services/apiService';
import PageHeading from '../components/PageHeading/PageHeading';
import MovieCardList from '../components/MovieCardList/MovieCardList';
import s from './pages.module.css';

export default function MoviesPage() {
  const location = useLocation();
  const history = useHistory();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState('');

  const storedSearchQuery =
    new URLSearchParams(location.search).get('queryBy') ?? '';

  useEffect(() => {
    if (!storedSearchQuery) {
      return;
    }
    movieAPI.fetchSearchMovies(storedSearchQuery).then(({ results }) => {
      setSearchMovies(results);
    });
  }, [storedSearchQuery]);

  const handleSearchChange = evt => {
    setSearchQuery(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchQuery.trim() === '') {
      return;
    }

    history.push({
      ...location,
      search: `queryBy=${searchQuery}`,
    });

    movieAPI
      .fetchSearchMovies(searchQuery)
      .then(({ results }) => {
        if (results.length === 0) {
          return setError(`Not found ${searchQuery}`);
        }
        setSearchMovies(results);
        setSearchQuery('');
        setError('');
      })
      .catch(error => setError(error));
  };
  return (
    <div className={s.container}>
      <PageHeading text="Advansed movie search" />
      <form onSubmit={handleSubmit} className={s.SearchForm}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </form>
      {error ? (
        <p>{error}</p>
      ) : (
        searchMovies && <MovieCardList movies={searchMovies} />
      )}
    </div>
  );
}
