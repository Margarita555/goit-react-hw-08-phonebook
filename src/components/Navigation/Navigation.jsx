import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import phonebookIcon from '../../images/contacts-book.svg';
import s from './Navigation.module.css';
export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
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
          width="50"
        />
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? `${s.active}` : '')}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
