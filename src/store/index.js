import {configureStore} from "@reduxjs/toolkit";
import counterSliceReducer from './counter';
import authSliceReducer from './auth';
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
        counter: counterSliceReducer,
        auth: authSliceReducer,
    }
});
export default store;