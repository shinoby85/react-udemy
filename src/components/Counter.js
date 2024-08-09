import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter);
  const toggleCounterHandler = () => {
  };
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <div>
        <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
