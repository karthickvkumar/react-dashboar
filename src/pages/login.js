import React, { Component } from 'react';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    diplayResut() {

    }

    handleUserName = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>Welcome to Login Page</h1>
                <label>Enter your Email ID :</label>
                <input type="text" placeholder="Enter user name..."
                    onChange={this.handleUserName} />
                <br></br>
                <label>Enter your Password:</label>
                <input type="password" placeholder="Enter password..."
                    onChange={this.handlePassword} />
                <br></br>
                <button onClick={() => this.diplayResut()}>Login</button>
                <br></br>
                <h3>The entered user email is {this.state.email}</h3>
                <h3>The entered user password is {this.state.password}</h3>
            </div>
        );
    }
}

export default LoginPage;