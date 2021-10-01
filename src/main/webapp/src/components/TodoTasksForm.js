import { Tabs } from 'antd';
import React from 'react';
import '../App.css';
import { AimOutlined, CarryOutOutlined, DeleteOutlined} from '@ant-design/icons';
import ActiveTasksForm from './tabs/ActiveTasksForm';
import CompletedTasksForm from './tabs/CompletedTasksForm';
import DeletedTasksForm from './tabs/DeletedTasksForm';
const { TabPane } = Tabs;

class TodoTasksForm extends React.Component {
  constructor(props) {
    super(props);
    this.activeTasksForm = React.createRef();
    this.completedTasksForm = React.createRef();
    this.deletedTasksForm = React.createRef();
  }
  render () {
    return (
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab={<span style={{color: "blue"}}><AimOutlined />Active</span>} key="1">
          <ActiveTasksForm ref={this.activeTasksForm}/>
        </TabPane>
        <TabPane tab={<span style={{color: "green"}}><CarryOutOutlined  />Completed</span>} key="2">
          <CompletedTasksForm ref={this.completedTasksForm}/>
        </TabPane>
        <TabPane tab={<span style={{color: "red"}}><DeleteOutlined/>Deleted</span>} key="3" forceRender={true}>
          <DeletedTasksForm ref={this.deletedTasksForm}/>
        </TabPane>
      </Tabs>
    );
  }
}
export default TodoTasksForm;
