import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filteredContacts,
  clearFilterValue,
  nightRegimeToggle,
} from './phoneBookActions';

const contacts = createReducer([], {
  [addContactSuccess.type]: (state, { payload }) => [...state, payload],
  [fetchContactsSuccess]: (state, { payload }) => payload,
  [deleteContactSuccess.type]: (state, { payload }) =>
    state.filter(contact => payload !== contact.id),
});

const filter = createReducer('', {
  [clearFilterValue.type]: (state, action) => '',
  [filteredContacts.type]: (state, { payload }) => payload,
});

const nightRegime = createReducer(true, {
  [nightRegimeToggle]: state => !state,
});

const loader = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(
  {},
  {
    [addContactError]: (state, { payload }) => payload,
    [fetchContactsError]: (state, { payload }) => payload,
    [deleteContactError]: (state, { payload }) => payload,
  },
);
export default combineReducers({
  contacts,
  nightRegime,
  filter,
  loader,
  error,
});
