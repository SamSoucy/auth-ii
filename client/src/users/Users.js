import React from 'react';

import axios from 'axios';

import requiresAuth from "../auth/requiresAuth";

class Users extends React.Component{
    state = {
        users: [],
    }

    render() {
        return (
            <div>
                <h2>Users list</h2>
                {this.state.users.map(user => (
                    <div key={user.id}>{user.username}</div>
                ))}
            </div>
        )
    }
    componentDidMount() {
        axios.get("/users").then(res => {
            this.setState({ users: res.data })
        });
    }
}

export default requiresAuth(Users);