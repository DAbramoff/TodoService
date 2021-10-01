import './App.css';
import React from 'react';
import TodoHeader from './components/TodoHeader';
import TodoTasksForm from './components/TodoTasksForm';
import TodoFooter from './components/TodoFooter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.refreshTaskForm = this.refreshTaskForm.bind(this);
  }
  refreshTaskForm(){
    this.taskForm.activeTasksForm?.current?.loadTasks()
    this.taskForm.deletedTasksForm?.current?.loadTasks()
    this.taskForm.completedTasksForm?.current?.loadTasks()
  }
  render () {
    return (
      <div className="main">
        <TodoHeader/>
        <TodoTasksForm ref={instance => { this.taskForm = instance}}/>
        <TodoFooter reload={this.refreshTaskForm}/>
      </div>
    );
  }
}
export default App;
