import React, { Component } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../../redux/phoneBook/phonebookOperations';
import { getContacts } from '../../redux/phoneBook/phoneBookSelectors';
import isNameAvailable from '../../functions/isNameAvailable';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  propTypes = {
    submitContactInfo: T.func.isRequired,
    contacts: T.arrayOf.isRequired,
  };

  handleInputChange = e => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (isNameAvailable(this.props.contacts, this.state.name)) {
      return alert(`${this.state.name} is already exists in contacts!`);
    }
    this.props.submitContactInfo(this.state);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Name</h3>
          <input
            type="name"
            value={name}
            onChange={this.handleInputChange}
            name="name"
          />
          <h3>Number</h3>
          <input
            type="number"
            value={number}
            onChange={this.handleInputChange}
            name="number"
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = {
  submitContactInfo: addContact,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactForm);
