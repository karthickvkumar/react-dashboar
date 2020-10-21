import React, { Component } from 'react';
import AOne from '../components/a-one';
import BOne from '../components/b-one';
import UserContext from '../services/user-context';

class RootParent extends Component {
    constructor(props){
        super(props);
        this.state = {
            message : 'React JS web applicaiton',
            textValue : '',
            contextTextValue: ''
        }
    }

    getValue = (value) => {
        //console.log(value)
        this.setState({
            textValue: value
        })
    }

    receiveInformation  = (value) =>{
        // console.log(value)
        this.setState({
            contextTextValue: value
        })
    }

    render() {
        return(
            <UserContext.Provider value={{
                informatation: this.receiveInformation,
                message: this.state.contextTextValue
            }}>
                <div>
                    <h2 style={{color: 'blue'}}>This is a Root Parent Component</h2>
                    <AOne message={this.state.message} passValueToRoot={this.getValue}></AOne>
                    <BOne textValue={this.state.textValue}></BOne>
                </div>
            </UserContext.Provider>
        )
    }
}

export default RootParent;