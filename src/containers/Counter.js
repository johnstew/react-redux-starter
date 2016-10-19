import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement, incrementDelay } from '../actions/counter';
import IncrementButton from '../components/IncrementButton';
import DecrementButton from '../components/DecrementButton';
import IncrementDelayButton from '../components/IncrementDelayButton';

function Counter(props) {
  const { val } = props;
  return (
    <div className="counter">
      <h2>{val}</h2>
      <br />
      <IncrementButton {...props} />
      <DecrementButton {...props} />
      <IncrementDelayButton {...props} delay={3000} />
    </div>
  );
}

Counter.propTypes = {
  val: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    val: state.counter.val
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ increment, decrement, incrementDelay }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
