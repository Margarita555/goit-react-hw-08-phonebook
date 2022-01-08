import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`);
}

export async function register(credentials) {
  const { data } = await axios.post('/users/signup', credentials);
  return data;
}

export async function logIn(credentials) {
  const { data } = await axios.post('/users/login', credentials);
  return data;
}
export async function logOut() {
  const { data } = await axios.post('/users/logout');
  return data;
}

export async function fetchCurrentUser() {
  const { data } = await axios.get('/users/current');
  return data;
}
