import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import LoginPage from './pages/login';

const App = () => {

    return (
        <div>
            {/* <HeaderComponent></HeaderComponent> */}
            <LoginPage></LoginPage>
            {/* <FooterComponent></FooterComponent> */}
        </div>
    )
};


ReactDOM.render(<App></App>, document.getElementById('root'))