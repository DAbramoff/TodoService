import React from 'react';
import 'antd/dist/antd.css';
import { message, Card, Col, Divider, Row} from 'antd';
import * as api from "../../api/TasksApi";
import '../../App.css';
import { DeleteOutlined, CheckOutlined } from '@ant-design/icons';
import moment from 'moment';

class ActiveTasksForm extends React.Component {
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
        api.getAlltasks("ACTIVE", {
            onSuccess: (response) => {
                this.setState({tasks: response})
            },
            onErorr: (error) => {
                message.error(`Fail tp load tasks - ${error.message}`);
            }
        })
    }
    deleteTask(id){
        api.deleteTask(id, true, {
            onSuccess: (response) => {
                message.success(`Task ${id} moved to DELETED. You can restore it.`);
                this.loadTasks();
            },
            onErorr: (error) => {
                message.error(`Fail to delete task - ${error.message}`);
            }
        })
    }
    updateTask(task){
        api.updateTask(task, "COMPLETED", {
            onSuccess: (response) => {
                message.success(`Task ${task.id} moved to COMPLETED`);
                this.loadTasks();
            },
            onErorr: (error) => {
                message.error(`Fail to update task - ${error.message}`);
            }
        })
    }
    render () {
        return (
            <div id="task_form">
                <Row gutter={[16, 16]}>
                    {
                        this.state.tasks.sort(function (a, b) {
                                if (a.updateDate < b.updateDate) {
                                    return 1;
                                }
                                if (a.updateDate > b.updateDate) {
                                    return -1;
                                }
                                return 0;
                            })
                          .map(task => {
                            return (
                            <Col span={6} key={"col_" + task.id}>
                                <Card hoverable key={"card_" + task.id}
                                    title={"Task " + task.id} 
                                    actions={[
                                        <CheckOutlined key="complete" onClick={() => this.updateTask(task)} style={{color: "green"}}/>,
                                        <DeleteOutlined key="delete" onClick={() => this.deleteTask(task.id)} style={{color: "red"}}/>
                                    ]}>
                                    <p><b>Task:</b> {task.task}</p>
                                    <p><b>Description:</b> {task.description}</p>
                                    <Divider/>
                                    <p><b>Created: </b>{moment(task.creationDate).format('LLLL')}</p>
                                    <p><b>Updated: </b>{moment(task.updateDate).format('LLLL')}</p>
                                </Card>
                            </Col> 
                            )
                        })
                    }
                </Row>
            </div>
        );
    }
}
export default ActiveTasksForm;
