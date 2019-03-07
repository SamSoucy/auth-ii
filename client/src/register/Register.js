import React from 'react';
import axios from 'axios';

class Register extends React.Component{
    state = {
        username: "",
        password: "",
        department: ""
    };


render(){
    return (
        <>
            <h2>Register</h2>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <lable htmlFor="username" />
                    <input
                        name="username"
                        id="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        placeholder="username"
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="password" />
                    <input
                        name="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        placeholder="password"
                        type="password"
                    />
                </div>
                <div>
                    <label htmlFor="department" />
                    <input
                        name="department"
                        id="department"
                        value={this.state.department}
                        onChange={this.handleInputChange}
                        placeholder="department"
                        type="text"
                    />
                </div>
                    
                <div>
                    <button type="submit">Register</button>
                </div>

            </form>
        </>
    );
}

handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const endpoint = 'http://localhost:5000/api/auth/register';

    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);

        this.props.history.push('/users');
      })
      .catch(error => console.error(error));
  };
}

export default Register;

