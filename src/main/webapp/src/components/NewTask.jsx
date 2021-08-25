import React from 'react';
import * as api from "../api/TasksApi";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

class NewTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
        };
        this.addTask = this.addTask.bind(this);
    }
    addTask(todo){
        api.addTask(todo, {
            onSuccess: (response) => {
                this.props.reload()
            },
            onErorr: (error) => {
                console.error(error);
            }
        })
    }
    render() {
        return (
            <InputGroup>
                <InputGroup.Text>Enter new task:</InputGroup.Text>
                <FormControl aria-label="Task" value={this.state.task} onChange={e => this.setState({ task: e.target.value })}/>
                <Button variant="primary" id="button-add" onClick={() => {
                    if(this.state.task){
                        this.addTask({task: this.state.task})
                    }
                }}>Add todo</Button>
            </InputGroup>
        );
    }
  }
export default NewTask;