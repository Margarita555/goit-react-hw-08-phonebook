import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div className="navBox">
      <NavLink
        to="/register"
        end
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Login
      </NavLink>
    </div>
  );
}
