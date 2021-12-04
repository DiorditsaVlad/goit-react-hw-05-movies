import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../services/apiService';
import s from './pages.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    movieAPI
      .fetchMovieReview(movieId)
      .then(({ results }) => setReviews(results));
  }, [movieId]);

  return reviews.length > 0 ? (
    <ul className={s.reviewsList}>
      {reviews.map(review => (
        <li key={review.id}>
          <p>Author: {review.author}</p>
          <p>"{review.content}"</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>Not found reviews</p>
  );
}
