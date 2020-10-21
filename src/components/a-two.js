import React, { Component } from 'react';
import UserContext from '../services/user-context';

class ATwo extends Component {

    handleInput = (event) => {
        // this.props.getFromChild(event.target.value)
        this.context.informatation(event.target.value)
    }
    render() {
        return (
            <UserContext.Consumer>
                {() => {
                    return(
                        <div>
                            <h3 style={{color: 'red'}}>This is A Two Compoent (Nested Child) --> {this.props.message}</h3>
                            <input type="text" placeholder="Enter a value" onChange={this.handleInput}/>
                        </div>
                    )
                }}
            </UserContext.Consumer>
        );
    }
}

ATwo.contextType = UserContext;
export default ATwo;