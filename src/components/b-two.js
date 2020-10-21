import React, { Component } from 'react';
import UserContext from '../services/user-context';

class BTwo extends Component {
    render() {
        return(
            <UserContext.Consumer>
            {(context) => {
                console.log(context)
                return (
                    <div>
                        <h3 style={{color: 'red'}}>This is B Two Compoent (Nested Child)</h3>
                        <h3>{this.props.message}</h3>
                        <h3>{context.message}</h3>
                    </div>
                );
            }}
        </UserContext.Consumer>
        
        )
        
    }
}

BTwo.contextType = UserContext;
export default BTwo;