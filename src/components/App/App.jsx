// import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

// import ContactForm from '../ContactForm/ContactForm';
// import ContactList from '../ContactList/ContactList';
// import Filter from '../Filter/Filter';
import Registration from '../Registration/Registration';
import LoginView from '../LoginView/LoginView';
import AppBar from '../AppBar/AppBar';
import HomePage from '../HomePage/HomePage';
import ContactsView from '../ContactsView/ContactsView';
import authOperations from '../../redux/auth/auth-operations';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import s from './App.module.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <div className={s.app}>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsView />
            </PrivateRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute restricted>
              <Registration />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute restricted>
              <LoginView />
            </PublicRoute>
          }
        />

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
}
export default App;
