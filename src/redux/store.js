import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts-reducer';
import authSlice from './auth/auth-slice';
// console.log(authSlice);

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = () => {
  let store = configureStore({
    reducer: {
      auth: persistReducer(persistConfig, authSlice),
      // contacts: persistReducer(persistConfig, contactsReducer),
      contacts: contactsReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    devTools: process.env.NODE_ENV === 'development',
  });
  let persistor = persistStore(store);
  return { store, persistor };
};

export default store;
