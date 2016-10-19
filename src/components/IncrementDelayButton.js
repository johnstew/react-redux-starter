import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/raisedbutton';

function IncrementDelayButton(props) {
  const { incrementDelay, delay } = props;
  return (
    <RaisedButton
      className="button"
      label="+1 with delay"
      onClick={() => incrementDelay(delay)}
    />
  );
}

IncrementDelayButton.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementDelay: PropTypes.func.isRequired,
  delay: PropTypes.number.isRequired
};

export default IncrementDelayButton;
