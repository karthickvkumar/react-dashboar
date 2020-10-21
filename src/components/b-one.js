import React, { Component } from 'react';
import BTwo from './b-two';

class BOne extends Component {
    render() {
        return (
            <div>
                <h3>This is B One Compoent (Immediate Child)</h3>
                <BTwo message={this.props.textValue}></BTwo>
            </div>
        );
    }
}

export default BOne;