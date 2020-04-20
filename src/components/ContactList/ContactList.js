import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { getVisibleContacts } from '../../redux/phoneBook/phoneBookSelectors';
import { deleteContact } from '../../redux/phoneBook/phonebookOperations';
import Contact from './Contact';

function ContactList({ contactList, deleteItem }) {
  return (
    <ul>
      {contactList.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          removeContact={() => deleteItem(id)}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contactList: T.arrayOf({}).isRequired,
  deleteItem: T.func.isRequired,
};

const mapStateToProps = state => ({
  contactList: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteItem: id => dispatch(deleteContact(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactList);
