import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/raisedbutton';

function IncrementButton(props) {
  const { increment } = props;
  return (
    <RaisedButton
      className="button"
      label="+1"
      onClick={increment}
    />
  );
}

IncrementButton.propTypes = {
  increment: PropTypes.func.isRequired
};

export default IncrementButton;
