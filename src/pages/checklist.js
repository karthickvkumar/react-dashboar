import React, { Component } from 'react';

class Checklist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            date: '',
            description: ''
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onCreateChecklist() {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h4>ToDo - Checklist</h4>
                <input type="text" placeholder="Enter the task Title" name="title" onChange={this.handleInput} />
                <input type="text" placeholder="Enter the task Description" name="description" onChange={this.handleInput} />
                <input type="date" name="date" onChange={this.handleInput} />
                <button className="btn" onClick={() => this.onCreateChecklist()}>Create Checklist</button>
                <div>
                    <table id="checklist">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Due Date</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.title}</td>
                                <td>{this.state.date}</td>
                                <td>{this.state.description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Checklist;