import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.phonebook.contacts;
const getFilter = state => state.phonebook.filter;
const getRegime = state => state.phonebook.nightRegime;
const getLoader = state => state.phonebook.loader;
const getError = state => state.phonebook.error;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

export {
  getVisibleContacts,
  getFilter,
  getContacts,
  getRegime,
  getLoader,
  getError,
};
