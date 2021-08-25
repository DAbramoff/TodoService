import React from 'react';
import * as api from "../api/TasksApi";
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button'
import { ButtonGroup, Col, Image, InputGroup, ListGroup, Row} from 'react-bootstrap';
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
                    <Card.Title>
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
                    <Card.Body style={{overflowY: "auto", maxHeight: window.innerHeight * 0.7}}>
                        <Row xs={1} md={3} lg={6} className="g-4">
                            {
                                this.state.tasks.map(task => {
                                    return (
                                        <Col  key={task.id} >
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
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                            <Col><Button variant="primary" onClick={() => this.loadTasks()}>Load all</Button></Col>
                            <Col  xs={6} sm={7} md={8} lg={9} xl={10}><NewTask reload={this.loadTasks}/></Col>
                            <Col><Button variant="secondary" onClick={() => this.deleteAllTasks()}>Delete all</Button></Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
  }
export default TaskForm;