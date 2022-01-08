import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
export default function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? `${s.active}` : '')}
      >
        Home
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
