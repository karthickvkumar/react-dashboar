import React, { Component } from 'react';
import ChildPage from './child';

class ParentPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: 'Hello, Mr.John',
            textValue: ''
        }
    }
    receivedData = (value) => {
        console.log(value)
        this.setState({
            textValue: value
        })
    }

    render() {
        return (
            <div>
                <h2>This is a parent Component</h2>
        <h2>Value from child - {this.state.textValue}</h2>
                <ChildPage message={this.state.message} sendMessage={this.receivedData}></ChildPage>
            </div>
        );
    }
}

export default ParentPage;