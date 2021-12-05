import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={s.navList}>
      <li className={s.navListItem}>
        <NavLink to="/" className={s.link}>
          Home
        </NavLink>
      </li>
      <li className={s.navListItem}>
        <NavLink to="/movies" className={s.link}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
