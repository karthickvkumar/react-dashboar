import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            gender: '',
            hobbies: [],
            city: '',
            dob: '',
            address: ''
        }
    }

    onRegister() {
        console.log(this.state)
    }

    handleChange = (event) => {
        if (Array.isArray(this.state[event.target.name])) {
            if (event.target.checked) {
                this.state.hobbies.push(event.target.value);
                this.setState({
                    hobbies: this.state.hobbies
                })
            }
            else {
                let index = this.state.hobbies.findIndex((value, index) => {
                    return value == event.target.value
                });
                this.state.hobbies.splice(index, 1);
                this.setState({
                    hobbies: this.state.hobbies
                })
            }

        }
        else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
        // console.log(event.target.name, event.target.value)

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
                <label>Select your gender: </label>

                <input className="radio-checkbox" type="radio" name="gender" value="male" onChange={this.handleChange} />Male

                <input className="radio-checkbox" type="radio" name="gender" value="female" onChange={this.handleChange} />Female

                <input className="radio-checkbox" type="radio" name="gender" value="others" onChange={this.handleChange} />Others
                <br></br>
                <label>Select your hobbies</label>
                <input type="checkbox" className="radio-checkbox" value="cricket" name="hobbies" onChange={this.handleChange} />Cricket
                <input type="checkbox" className="radio-checkbox" value="football" name="hobbies" onChange={this.handleChange} />Football
                <input type="checkbox" className="radio-checkbox" value="vollyball" name="hobbies" onChange={this.handleChange} />Vollyball
                <input type="checkbox" className="radio-checkbox" value="chess" name="hobbies" onChange={this.handleChange} />Chess
                <input type="checkbox" className="radio-checkbox" value="basketball" name="hobbies" onChange={this.handleChange} />BasketBall
                <input type="checkbox" className="radio-checkbox" value="hockey" name="hobbies" onChange={this.handleChange} />Hockey

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