import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../../services/contacts-api';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const user = await contactsApi.register(credentials);
    token.set(user.token);
    return user;
  } catch (error) {}
});

const logIn = createAsyncThunk('auth/logIn', async credentials => {
  try {
    const user = await contactsApi.logIn(credentials);
    token.set(user.token);
    return user;
  } catch (error) {}
});
const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await contactsApi.logOut();
    token.unset();
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const currentUser = await contactsApi.fetchCurrentUser();
      return currentUser;
    } catch (error) {}
  },
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default authOperations;
