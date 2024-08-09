import {Component} from "react";
import classes from './Counter.module.css';
import {connect} from "react-redux";

// const Counter = () => {
//   const dispatch = useDispatch();
//   const count = useSelector(state => state.counter);
//   const toggleCounterHandler = () => {
//   };
//
//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{count}</div>
//       <div>
//         <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
//         <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

class Counter extends Component {
  toggleCounterHandler() {
  }
  
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.count}</div>
        <div>
          <button onClick={() => this.props.increment()}>Increment</button>
          <button onClick={() => this.props.decrement()}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: 'increment'}),
    decrement: () => dispatch({type: 'decrement'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
