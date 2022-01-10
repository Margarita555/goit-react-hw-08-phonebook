import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';
// import ContactsView from './ContactsView/ContactsView';
// import LoginView from './LoginView/LoginView';

export default function PrivateRoute({ children }) {
  console.log(children);
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" />;
}

// export default function PrivateOutlet() {
//   const isLoggedIn = useSelector(getIsLoggedIn);
//   return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
// }
