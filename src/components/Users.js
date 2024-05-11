import {Component} from 'react';

import User from './User';
import classes from './Users.module.css';
import {ERROR_IS_NOT_DATA} from "./ErrorBoundary";

class Users extends Component {
    constructor() {
        super();
        this.state = {
            showUsers: true,
            more: 'Test',
        };
    }

    componentDidUpdate() {
        // try {
        //   someCodeWhichMightFail()
        // } catch (err) {
        //   // handle error
        // }
        if (this.props.users.length === 0) {
            throw new Error(ERROR_IS_NOT_DATA);
        }

    }

    toggleUsersHandler() {
        // this.state.showUsers = false; // NOT!
        this.setState((curState) => {
            return {showUsers: !curState.showUsers};
        });
    }

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
