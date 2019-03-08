import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Register from "./register/Register";
import Login from './login/Login';
import Users from "./users/Users";

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="nav">
          <nav>
            <NavLink className="nav" to="/register">Register</NavLink>
            &nbsp; |&nbsp;
            <NavLink className="nav" to="/login">Login</NavLink>
            &nbsp; |&nbsp;
            <NavLink className="nav" to="/users">Users</NavLink>
            &nbsp; |&nbsp;
            <button className= "navButton" onClick={this.logout}>Logout</button>
          </nav>
        </header>
        <main>
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path="/users" component={Users} />
        </main>
      </div>
     
    );
  }
  logout = () => {
    localStorage.removeItem("jwt");
    this.props.history.push("/login");
  }
}

export default withRouter(App);
