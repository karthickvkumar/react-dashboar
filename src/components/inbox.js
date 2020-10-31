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
            },
            todoValue : ''
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

    addValue(){
        //console.log(this.state.todoValue)
        this.props.actions.sendValue(this.state.todoValue);
        this.setState({
            todoValue: ''
        })
    }

    handleInputBox = (event) => {
        this.setState({
            todoValue: event.target.value
        })
    }   

    render() {
        let userList = this.state.user.data.map((value, index) => {
            return(
                <div key={index}>
                    <span>The usename is {value.first_name} {value.last_name}</span>
                </div>
            )
        });

        let todoList = this.props.todoList.map((value, index) => {
            return (
                <li key={index}>
                    {value}
                </li>
            )
        })
        return (
            <div>
                <h1>This is a INBOX Page</h1>
                <button onClick={() => this.loadUser()}>Load User Infomaton</button>
                <br></br>
                <input type="text" placeholder="Enter the value" value={this.state.todoValue} onChange={this.handleInputBox}/>
                <button onClick={() => this.addValue()}>Add TODO</button>
                <ul>
                    {todoList}
                </ul>
                {/* {userList} */}
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        todoList : state.mailReducer.mailBox
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(mailAction, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(InboxComponent);