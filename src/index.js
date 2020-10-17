import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css'
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import LoginPage from './pages/login';
import Register from './pages/register';
import HomePage from './pages/home';
import Checklist from './pages/checklist';
import NestedRouting from './pages/nested-routing';
import LoginRef from './pages/login-ref';
import ParentPage from './pages/parent';

const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LoginPage}></Route>
                <Route path="/mail" component={NestedRouting}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/home" component={HomePage}></Route>
                <Route path="/list" component={Checklist}></Route>
                <Route path="/login-ref" component={LoginRef}></Route>
                <Route path="/parent" component={ParentPage}></Route>
            </Switch>
        </BrowserRouter>
    )
};


ReactDOM.render(<App></App>, document.getElementById('root'))