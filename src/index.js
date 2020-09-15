import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import LoginPage from './pages/login';
import Register from './pages/register';

const App = () => {

    return (
        <div>
            {/* <HeaderComponent></HeaderComponent> */}
            {/* <LoginPage></LoginPage> */}
            <Register></Register>
            {/* <FooterComponent></FooterComponent> */}
        </div>
    )
};


ReactDOM.render(<App></App>, document.getElementById('root'))