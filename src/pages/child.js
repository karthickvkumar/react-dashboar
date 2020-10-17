import React, { Component } from 'react';

class ChildPage extends Component {

    handeleInput = (event) => {
        this.props.sendMessage(event.target.value)
    }
    render() {
        return (
            <div>
                <h2>{this.props.message}</h2>
                <input type="text" placeholder="Enter a value" onChange={this.handeleInput}/>

            </div>
        );
    }
}

export default ChildPage;