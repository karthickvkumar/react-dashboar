import React, { Component } from 'react';
import LoginPage from '../pages/login';

class LayoutComponent extends Component {
    render() {
        return (
            <div>
                <h2>This is a Layout</h2>
                <LoginPage></LoginPage>
            </div>
        );
    }
}

export default LayoutComponent;