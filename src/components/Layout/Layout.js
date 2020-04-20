import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import styles from '../../styles.module.css';

const Layout = ({ children, nightRegime }) => (
  <div className={nightRegime ? styles.layoutDay : styles.layoutNight}>
    <div className={styles.container}>{children}</div>
  </div>
);

Layout.propTypes = {
  children: T.shape.isRequired,
  nightRegime: T.bool.isRequired,
};

const mapStateToProps = state => ({
  nightRegime: state.phonebook.nightRegime,
});

export default connect(mapStateToProps)(Layout);
