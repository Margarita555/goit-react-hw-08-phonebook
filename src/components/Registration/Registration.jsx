import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import s from './Registration.module.css';
export default function Registration() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const isDuplicateContact = contacts.find(
    //   contact => contact.name === name,
    // );
    // if (isDuplicateContact) {
    //   alert(`${name} is already in contacts`);
    //   return;
    // }
    dispatch(authOperations.register({ name, email, password }));
    resetState();
  };

  const resetState = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h2>Registration</h2>
      <form
        className={s.registrationForm}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label style={s.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label style={s.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label style={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
