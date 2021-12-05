import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../services/apiService';
import s from './pages.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    movieAPI.fetchMovieCastList(movieId).then(({ cast }) => setActors(cast));
  }, [movieId]);

  return (
    actors && (
      <ul className={s.castList}>
        {actors.map(actor => {
          return (
            <li key={actor.id} className={s.castListItem}>
              <div>
                <div className={s.imgBack}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                    alt={''}
                    className={s.actorImg}
                  />
                </div>
                <p className={s.actorName}>{actor.name}</p>
              </div>
            </li>
          );
        })}
      </ul>
    )
  );
}
