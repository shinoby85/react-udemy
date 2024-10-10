import {configureStore, createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {counter: 0, showCounter: true},
  reducers: {
    increment: (state) => {
      ++state.counter;
    },
    decrement: (state) => {
      --state.counter;
    },
    increase: (state, action) => {
      state.counter += action.payload;
    },
    toggleCounter: (state) => {
      state.showCounter = !state.showCounter;
    }
  }
});

const authSlice = createSlice({
  name: "authentication",
  initialState: {isAuthenticated: false},
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  }
});

// const counterReducer = (state = {counter: 0, showCounter: true}, action) => {
//   switch (action.type) {
//     case 'increment': {
//       return {
//         ...state,
//         counter: state.counter + 1,
//       }
//     }
//     case 'increase': {
//       return {
//         ...state,
//         counter: state.counter + action.payload,
//       }
//     }
//     case 'decrement': {
//       return {
//         ...state,
//         counter: state.counter - 1,
//       }
//     }
//     case 'toggle': {
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       }
//     }
//     default:
//       return state;
//   }
// }

// const store = createStore(counterReducer);
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  }
});
export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;