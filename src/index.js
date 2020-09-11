import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';

const App = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <h1 className="header">Welcome to React</h1>
            <FooterComponent></FooterComponent>
        </div>
    )
};


ReactDOM.render(<App></App>, document.getElementById('root'))