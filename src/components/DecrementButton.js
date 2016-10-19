import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/raisedbutton';

function DecrementButton(props) {
  const { decrement } = props;
  return (
    <RaisedButton
      className="button"
      label="-1"
      onClick={decrement}
    />
  );
}

DecrementButton.propTypes = {
  decrement: PropTypes.func.isRequired
};

export default DecrementButton;
