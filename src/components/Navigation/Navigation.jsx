import { NavLink } from 'react-router-dom';
import phonebookIcon from '../../images/phonebook-icon.ico';
import s from './Navigation.module.css';
export default function Navigation() {
  return (
    <nav className={s.navBox}>
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? `${s.active}` : '')}
      >
        <img
          className={s.image}
          src={phonebookIcon}
          alt="phonebook"
          width="40"
        />
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) => (isActive ? `${s.active}` : '')}
      >
        Contacts
      </NavLink>
    </nav>
  );
}
