import React, { Component } from 'react';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Mr.John',
            age: 25
        }
    }

    updateName() {
        this.setState({
            username: 'Miss.Bloosom'
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome to Login Page</h1>
                <h1>{this.state.username}</h1>
                <button onClick={() => this.updateName()}>Change</button>
            </div>
        );
    }
}

export default LoginPage;