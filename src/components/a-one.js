import React, { Component } from 'react';
import ATwo from "./a-two";

class AOne extends Component {

    receiveValue = (value) => {
        this.props.passValueToRoot(value)
    }

    render() {
        return (
            <div>
                <h3>This is A One Compoent (Immediate Child)</h3>
                <ATwo message={this.props.message} getFromChild={this.receiveValue}></ATwo>
            </div>
        );
    }
}

export default AOne;