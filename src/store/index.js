import {createStore} from "redux";

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      return {
        counter: state.counter + 1,
      }
    }
    case 'decrement': {
      return {
        counter: state.counter - 1,
      }
    }
  }
  return state;
}

const store = createStore(counterReducer);

export default store;