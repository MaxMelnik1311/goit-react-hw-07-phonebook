import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('сontacts/addRequest');
const addContactSuccess = createAction('сontacts/addSuccess');
const addContactError = createAction('сontacts/addError');

const fetchContactsRequest = createAction('сontacts/fetchRequest');
const fetchContactsSuccess = createAction('сontacts/fetchSuccess');
const fetchContactsError = createAction('сontacts/fetchError');

const deleteContactRequest = createAction('сontacts/deleteRequest');
const deleteContactSuccess = createAction('сontacts/deleteSuccess');
const deleteContactError = createAction('сontacts/deleteError');

const filteredContacts = createAction('phoneBook/filteredContacts');
const clearFilterValue = createAction('phoneBook/clearFilterValue');

const nightRegimeToggle = createAction('phoneBook/nightRegimeToggle');

export {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  clearFilterValue,
  filteredContacts,
  nightRegimeToggle,
};
