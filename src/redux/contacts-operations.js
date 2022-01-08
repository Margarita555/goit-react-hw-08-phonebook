import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import * as contactsApi from '../services/contacts-api.js';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (credentials, { rejectWithValue }) => {
    try {
      const contact = await contactsApi.addContact(credentials);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async credentials => {
//     try {
//       const { data } = await axios.post('/contacts', credentials);
//       return data;
//     } catch (error) {
//       // return error;
//     }
//   },
// );
// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async ({ name, number }, { rejectWithValue }) => {
//     const newContact = {
//       name,
//       number,
//     };
//     try {
//       const { data } = await contactsApi.addContact(newContact);
//       console.log(contact);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await contactsApi.deleteContact(id);
      dispatch(deleteContact.fulfilled(id));
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
