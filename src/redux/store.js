import { configureStore } from '@reduxjs/toolkit';
import phoneBookReducer from './phoneBook/phoneBookReducer';

const store = configureStore({
  reducer: { phonebook: phoneBookReducer },
});

export default store;
