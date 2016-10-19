
import {
  INCREMENT,
  DECREMENT,
  INCREMENT_DELAY,
  INCREMENT_DELAY_DONE,
  INCREMENT_DELAY_STARTED
} from '../actions/counter';

const initState = {
  val: 0
};

export default function search(state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return _.assign({}, state, {
        val: state.val + 1
      });
    case DECREMENT:
      return _.assign({}, state, {
        val: state.val - 1
      });
    case INCREMENT_DELAY:
      return state;
    case INCREMENT_DELAY_DONE:
      return state;
    case INCREMENT_DELAY_STARTED:
      return state;
    default:
      return state;
  }
}
