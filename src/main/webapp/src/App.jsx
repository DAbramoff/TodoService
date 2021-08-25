import './App.css';
import React from 'react';
import TaskForm from './components/TaskForm';

class App extends React.Component {
  render () {
    return (
      <div className="main">
        <TaskForm/>
      </div>
    );
  }
}
export default App;
