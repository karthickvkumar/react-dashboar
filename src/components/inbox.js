import React, { Component } from 'react';
import axios from 'axios';

class InboxComponent extends Component {

    loadUser(){
        let url = "https://reqres.in/api/users?page=2";
        axios.get(url)
            .then( (response) => {
                console.log(response)
            })
            .catch( (error) => {
                console.log(error)
            } )
    }

    render() {
        return (
            <div>
                <h1>This is a INBOX Page</h1>
                <button onClick={() => this.loadUser()}>Load User Infomaton</button>
            </div>
        );
    }
}

export default InboxComponent;