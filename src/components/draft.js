import React, { Component } from 'react';
import axios from 'axios';

class DraftComponent extends Component {
    onDelete() {
        let url = "https://reqres.in/api/users/2";
        axios.delete(url)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return ( <div>
            <h1> This is a DRAFT Page </h1> 

            <button onClick={() => this.onDelete()}> Delete User </button> 
            </div>
        );
    }
}

export default DraftComponent;