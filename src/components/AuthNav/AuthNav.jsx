import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
export default function AuthNav() {
  return (
    <div className={s.box}>
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
    </div>
  );
}
