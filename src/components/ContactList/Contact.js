import React from 'react';
import T from 'prop-types';

const Contact = ({ name, number, removeContact, id }) => (
  <li>
    <p>
      {name}: {number}
    </p>
    <button type="button" onClick={() => removeContact(id)}>
      Delete {name} from contact list
    </button>
  </li>
);

Contact.propTypes = {
  name: T.string.isRequired,
  number: T.string.isRequired,
  removeContact: T.func.isRequired,
  id: T.string.isRequired,
};

export default Contact;
