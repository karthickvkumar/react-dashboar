import React, { Component } from 'react';
import axios from 'axios';

class SentComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            job: ''
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onSubmit(){
        console.log(this.state)
        let url = "https://reqres.in/api/users/2";
        axios.put(url, this.state)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <h2>This is SENT Page</h2>
                <div>
                    <label>Enter Name:</label>
                    <input type="text" placeholder="Enter name.." name="name" onChange={this.handleInput}/>
                    <br></br>
                    <label>Enter Job Description:</label>
                    <input type="text" placeholder="Enter job desc.." name="job" onChange={this.handleInput}/>
                    <button onClick={() => this.onSubmit()}>Submit</button>
                </div>
            </div>
        );
    }
}

export default SentComponent;