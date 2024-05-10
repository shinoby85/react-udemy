import {Component} from 'react';

import classes from './Users.module.css';
import User from "./User";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: false,
      mare: 'Test'
    };
  }
  
  toggleUsersHandler = () => {
    this.setState((curState) => ({
      showUsers: !curState.showUsers,
    }));
  };
  
  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name}/>
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
