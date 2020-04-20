import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import NightRegimeToggler from '../components/NightRegimeToggler/NightRegimeToggler';

const PhoneBookPage = () => {
  return (
    <>
      <NightRegimeToggler />
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default PhoneBookPage;
