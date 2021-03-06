import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import AppBar from '../AppBar/AppBar';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Spinner from '../Spinner/Spinner';
import s from './App.module.css';

const AsyncHomePage = lazy(() => import('../HomePage/HomePage'));
const AsyncRegistration = lazy(() => import('../RegistrationView'));
const AsyncLoginView = lazy(() => import('../LoginView'));
const AsyncContactsView = lazy(() => import('../ContactsView/ContactsView'));

function App() {
  const isFetchingCurrentUser = useSelector(getCurrentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <div className={s.app}>
      {!isFetchingCurrentUser && (
        <>
          <AppBar />
          <div className={s.wrapper}>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path="/" element={<AsyncHomePage />} />

                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute>
                      <AsyncContactsView />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/register"
                  element={
                    <PublicRoute restricted>
                      <AsyncRegistration />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <PublicRoute restricted>
                      <AsyncLoginView />
                    </PublicRoute>
                  }
                />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </div>
        </>
      )}
    </div>
  );
}
export default App;
