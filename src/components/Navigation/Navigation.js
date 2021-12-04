import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={s.navList}>
      <li className={s.navListItem}>
        <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
          Home
        </NavLink>
      </li>
      <li className={s.navListItem}>
        <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
