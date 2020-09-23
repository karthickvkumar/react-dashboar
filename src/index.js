import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import LoginPage from './pages/login';
import Register from './pages/register';
import HomePage from './pages/home';
import Checklist from './pages/checklist';

const App = () => {

    return (
        <div>
            {/* <HeaderComponent></HeaderComponent> */}
            <Checklist></Checklist>
            {/* <LoginPage></LoginPage> */}
            {/* <Register></Register> */}
            {/* <HomePage></HomePage> */}
            {/* <FooterComponent></FooterComponent> */}
        </div>
    )
};


ReactDOM.render(<App></App>, document.getElementById('root'))