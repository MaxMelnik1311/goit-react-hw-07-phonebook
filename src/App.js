import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import PhoneBookPage from './pages/PhoneBookPage';
import Layout from './components/Layout/Layout';
import Loading from './components/Loading/Loading';
import { getLoader, getError } from './redux/phoneBook/phoneBookSelectors';
import { fetchContacts } from './redux/phoneBook/phonebookOperations';

class App extends Component {
  propTypes = {
    onFetchContacts: T.func.isRequired,
    loader: T.bool.isRequired,
    error: T.shape.isRequired,
  };

  componentDidMount() {
    const { onFetchContacts } = this.props;
    return onFetchContacts();
  }

  render() {
    const { loader, error } = this.props;
    return (
      <Layout>
        {loader && <Loading />}
        {error === {} && <h2>There is some error in your last action here!</h2>}
        <PhoneBookPage />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  loader: getLoader(state),
  error: getError(state),
});
const mapDispatchToProps = {
  onFetchContacts: fetchContacts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
