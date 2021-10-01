import React from 'react';
import { Button, Input} from 'antd';
import 'antd/dist/antd.css';
import {RedoOutlined, PlusSquareOutlined} from '@ant-design/icons';
import * as api from "../api/TasksApi";

class TodoFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        task: "",
        description: ""
    };
  }
  addTask(){
    let task = {task: this.state.task, description: this.state.description, status:"ACTIVE"}
    api.addTask(task, {
        onSuccess: (response) => {
          console.error(response);
        },
        onErorr: (error) => {
          console.error(error);
        }
    })
}
  render () {
    return (
      <div id="task_footer">
        <div id="footer_input_group">
          <Button type="primary" icon={<RedoOutlined />} style={{marginInline: "3em"}} size="middle" onClick={() => this.props.reload()}>Reload</Button>
          <Input placeholder="Task name" style={{marginRight: "1em", width: "50%"}} onChange={e => this.setState({task: e.target.value})}/>
          <Input placeholder="Task description" style={{marginRight: "1em"}} onChange={e => this.setState({description: e.target.value})}/>
          <Button type="primary" icon={<PlusSquareOutlined />} style={{marginRight: "3em"}} size="middle" onClick={() => this.addTask()} disabled={!this.state.task}>Add</Button>
        </div>
      </div>
    );
  }
}
export default TodoFooter;
