import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import Registration from '../Registration/Registration';
import s from './App.module.css';
import LoginView from './LoginView/LoginView';

function App() {
  return (
    <div className={s.app}>
      <Registration />
      <LoginView />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
export default App;
