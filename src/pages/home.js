import React, { Component } from 'react';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userlist: [
                {
                    name: 'Mr.A',
                    location: 'Chennai',
                    designation: 'UI developer'
                },
                {
                    name: 'Mr.B',
                    location: 'Mysore',
                    designation: 'PHP developer'
                },
                {
                    name: 'Mr.C',
                    location: 'Banglore',
                    designation: 'Java developer'
                }, {
                    name: 'Mr.D',
                    location: 'Madurai',
                    designation: '.Net developer'
                }, {
                    name: 'Mr.E',
                    location: 'Jaipur',
                    designation: 'HTML developer'
                }
            ]
        }
    }
    render() {
        let users = this.state.userlist.map((user, index) => {
            return (
                <div key={index}>
                    <h3>The user name is {user.name}</h3>
                    <h3>The user designation is {user.designation}</h3>
                    <h3>The user location is {user.location}</h3>
                    <h3>------------------------</h3>
                </div>
            )
        })

        return (
            <div>
                <h2>Welcome to Home page</h2>
                {users}
            </div>
        );
    }
}

export default HomePage;