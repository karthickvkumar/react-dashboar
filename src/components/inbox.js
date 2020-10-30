import React, { Component } from 'react';
import APIService from '../services/api';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as mailAction from '../redux/actions/mail-action';

class InboxComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            user : {
                data : []
            }
        }
    }

    async loadUser(){
        let url = "https://reqres.in/api/users?page=2";
        let response = await APIService.getAPI(url);
        this.setState({
            user : response.data
        })
        // APIService.getAPI(url)
        //         .then((response) => {
        //             this.setState({
        //                 user : response.data
        //             })
        //         })
        //         .catch((error) => {
        //             console.log(error)
        //         })
   
    }

    triggerAction(){
        this.props.actions.mailAction();
    }

    render() {
        console.log(this.state.user)
        let userList = this.state.user.data.map((value, index) => {
            return(
                <div key={index}>
                    <span>The usename is {value.first_name} {value.last_name}</span>
                </div>
            )
        })
        return (
            <div>
                <h1>This is a INBOX Page</h1>
                <button onClick={() => this.loadUser()}>Load User Infomaton</button>
                <button onClick={() => this.triggerAction()}>Load Redux Action</button>
                {userList}
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(mailAction, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(InboxComponent);