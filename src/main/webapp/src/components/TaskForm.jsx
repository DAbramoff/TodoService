import React from 'react';
import * as api from "../api/TasksApi";
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button'
import { Col, Image, ListGroup, Row} from 'react-bootstrap';
import NewTask from './NewTask';

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
        this.loadTasks = this.loadTasks.bind(this);
    }
    componentDidMount(){
        this.loadTasks();
    }
    loadTasks(){
        api.getAlltasks({
            onSuccess: (response) => {
                this.setState({tasks: response})
            },
            onErorr: (error) => {
                console.error(error);
            }
        })
    }
    deleteTask(id){
        api.deleteTask(id, {
            onSuccess: (response) => {
                this.loadTasks()
            },
            onErorr: (error) => {
                console.error(error);
            }
        })
    }
    deleteAllTasks(){
        api.deleteAllTasks({
            onSuccess: () => {
                this.setState({tasks: []})
            },
            onErorr: (error) => {
                console.error(error);
            }
        })
    }
    render() {
        return (
            <div>
                <Card>
                    <Card.Header as="h1" >Simple Todo Service</Card.Header>
                    <Card.Header as="h4" >Sinergy of Java, Groovy + Spring Boot and React JS</Card.Header>
                    <Card.Body>
                        <Card.Title style={{ marginBottom: '2em'}}>
                            <Row>
                                <Col>
                                    <Image src="java.svg" roundedCircle />
                                </Col>
                                <Col>
                                    <Image src="groovy.svg" roundedCircle />
                                </Col>
                                <Col>
                                    <Image src="spring.svg" roundedCircle />
                                </Col>
                                <Col>
                                    <Image src="reactjs.svg" roundedCircle />
                                </Col>
                            </Row>
                        </Card.Title>
                        <Row xs={2} md={8} className="g-4">
                            {
                                this.state.tasks.map(task => {
                                    return (
                                        <Col  key={task.id} style={{ width: '18rem', margin: '1em'}}>
                                            <Card>
                                                <Card.Body>
                                                    <Card.Title>Todo task {task.id}</Card.Title>
                                                    <ListGroup variant="flush">
                                                        <ListGroup.Item>Action: {task.task}</ListGroup.Item>
                                                        <ListGroup.Item>Status: {task.completed ? "Completed" : "Not completed"}</ListGroup.Item>
                                                    </ListGroup>
                                                </Card.Body>
                                                <Button variant="primary" onClick={() => this.deleteTask(task.id)}>Delete</Button>
                                                <Card.Footer className="text-muted">2 days ago</Card.Footer>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                        <Row>
                            <Col sm={1}>
                                <Button variant="primary" onClick={() => this.loadTasks()}>Load all</Button>
                            </Col>
                            <Col sm={10}>
                                <NewTask reload={this.loadTasks}/>
                            </Col>
                            <Col sm={1}>
                                <Button variant="primary" onClick={() => this.deleteAllTasks()}>Delete all</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        );
    }
  }
export default TaskForm;