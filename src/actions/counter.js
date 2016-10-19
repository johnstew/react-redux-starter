export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_DELAY = 'INCREMENT_DELAY';
export const INCREMENT_DELAY_DONE = 'INCREMENT_DELAY_DONE';
export const INCREMENT_DELAY_STARTED = 'INCREMENT_DELAY_STARTED';

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function incrementDelayStarted() {
  return {
    type: INCREMENT_DELAY_STARTED
  };
}

export function incrementDelayDone() {
  return {
    type: INCREMENT_DELAY_DONE
  }
};

export function incrementDelay(delay) {
  return (dispatch) => {
    dispatch(incrementDelayStarted);
    setTimeout(() => {
      dispatch(increment());
      dispatch(incrementDelayDone());
    }, delay);
  };
}
