import React from "react";
import "./App.css";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskCount from "./components/TaskCount";
import TaskList from "./components/TaskList";
import uuidv4 from 'uuid/v4';

class App extends React.Component {

  state = {
    tasks: [
      { id: uuidv4(), description: "Buy some dog food", completed: false },
      { id: uuidv4(), description: "Buy the newspaper", completed: false },
      { id: uuidv4(), description: "Add state to my react application", completed: false }
    ]
  }

  deleteTask = (taskId) => {
    // Tasks will be deleted when this function executes

    // Firstly get the list of tasks from state
    const tasks = this.state.tasks;

    // Next, identify the task that matches the given task Id and remove it
    const updatedTasks = tasks.filter(item => item.id !== taskId);

    // Update the state with the new collection of tasks (IE. Without the one we deleted)
    this.setState({
      tasks: updatedTasks
    });
  }

  addTask = (taskDescription) => {

    // Firstly define the task that is being added
    const taskToAdd = { id: uuidv4(), description: taskDescription, completed: false };

    console.log("Adding task");
    console.log(taskToAdd);

    // Get the current list of tasks from state
    const currentTasks = this.state.tasks;

    // add the 'taskToAdd' to the array of tasks in state
    currentTasks.push(taskToAdd);
    // update the state
    this.setState({
      tasks: currentTasks
    });

  }
  
  render() {
    return (
      <div className="container">
        <Header />
        <AddTask addTaskFunc={this.addTask} />
        <TaskCount taskCount={this.state.tasks.length} />
        <TaskList taskCollection={this.state.tasks} deleteTaskFunc={this.deleteTask} />
      </div>
    );
  }


}

export default App;
