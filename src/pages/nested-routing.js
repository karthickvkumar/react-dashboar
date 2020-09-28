import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import InboxComponent from '../components/inbox';
import SentComponent from '../components/sent';
import DraftComponent from '../components/draft';


class NestedRouting extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    Mail BOX
                </div>
                <div className="wapper">
                    <div className="sidebar">
                        <NavLink to="/mail" className="nav-btn">Inbox Page</NavLink>
                        <NavLink to="/mail/sent" className="nav-btn">Sent Page</NavLink>
                        <NavLink to="/mail/draft" className="nav-btn">Draft Page</NavLink>
                    </div>
                    <div className="content">
                        <Switch>
                            <Route path="/mail" exact component={InboxComponent}></Route>
                            <Route path="/mail/sent" component={SentComponent}></Route>
                            <Route path="/mail/draft" component={DraftComponent}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default NestedRouting;