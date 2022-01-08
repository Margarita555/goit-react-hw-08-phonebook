import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
export default function AuthNav() {
  return (
    <nav>
      <NavLink
        to="/register"
        end
        className={({ isActive }) => (isActive ? `${s.active}` : '')}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? `${s.active}` : '')}
      >
        Login
      </NavLink>
    </nav>
  );
}
