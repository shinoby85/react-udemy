import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={() => dispatch(counterActions.increment())}>Increment</button>
        <button onClick={() => dispatch(counterActions.increase(10))}>Increase by 5</button>
        <button onClick={() => dispatch(counterActions.decrement())}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
