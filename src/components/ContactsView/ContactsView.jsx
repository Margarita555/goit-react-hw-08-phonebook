import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import s from './ContactsView.module.css';

function ContactsView() {
  return (
    <div className={s.contactsContainer}>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
export default ContactsView;
