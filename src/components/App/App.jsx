// import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import ContactForm from '../ContactForm/ContactForm';
// import ContactList from '../ContactList/ContactList';
// import Filter from '../Filter/Filter';
import Registration from '../Registration/Registration';
import LoginView from '../LoginView/LoginView';
import AppBar from '../AppBar/AppBar';
import HomePage from '../HomePage/HomePage';
import s from './App.module.css';
import Contacts from '../Contacts/Contacts';

function App() {
  return (
    <div className={s.app}>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<LoginView />} />
        {/* <Registration /> */}
        {/* <LoginView /> */}
        {/* <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList /> */}
        
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
}
export default App;
