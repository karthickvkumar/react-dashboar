import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            dob: '',
            address: ''
        }
    }

    onRegister() {
        console.log(this.state)
    }

    handleChange = (event) => {
        // console.log(event.target.name, event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Welcome to Register Page</h3>
                <label>Enter your First Name: </label>
                <input type="text" name="firstName" placeholder="Enter your first name.." onChange={this.handleChange} />
                <br></br>
                <label>Enter your Last Name: </label>
                <input type="text" name="lastName" placeholder="Enter your last name.." onChange={this.handleChange} />
                <br></br>
                <label>Enter your Email Id: </label>
                <input type="text" name="email" placeholder="Enter your email id.." onChange={this.handleChange} />
                <br></br>
                <label>Enter your Password: </label>
                <input type="password" name="password" placeholder="Enter your password.." onChange={this.handleChange} />
                <br></br>
                <label>Enter Date of Birth: </label>
                <input type="date" name="dob" onChange={this.handleChange} />
                <br></br>
                <label>Enter your Address: </label>
                <textarea name="address" placeholder="Enter your address.." onChange={this.handleChange}></textarea>
                <br></br>
                <button onClick={() => this.onRegister()}>Register</button>
            </div>
        );
    }
}

export default Register;