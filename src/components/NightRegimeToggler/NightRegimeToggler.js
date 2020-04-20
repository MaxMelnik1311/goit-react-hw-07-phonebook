import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { getRegime } from '../../redux/phoneBook/phoneBookSelectors';
import { nightRegimeToggle } from '../../redux/phoneBook/phoneBookActions';

const NightRegimeToggler = ({ nightRegime, onToggle }) => (
  <>
    <button type="button" onClick={() => onToggle()}>
      {nightRegime ? 'Night Regime' : 'Day Regime'}
    </button>
  </>
);

NightRegimeToggler.propTypes = {
  nightRegime: T.bool.isRequired,
  onToggle: T.func.isRequired,
};

const mapStateToProps = state => ({
  nightRegime: getRegime(state),
});

const mapDispatchToProps = { onToggle: nightRegimeToggle };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NightRegimeToggler);
