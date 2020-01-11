import React from "react";
import "./App.css";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskCount from "./components/TaskCount";
import TaskList from "./components/TaskList";

class App extends React.Component {

  state = {
    tasks: [
      { id: 1, description: "Buy some dog food", completed: false },
      { id: 2, description: "Buy the newspaper", completed: false },
      { id: 3, description: "Add state to my react application", completed: false }
    ]
  }
  
  render() {
    return (
      <div className="container">
        <Header />
        <AddTask />
        <TaskCount taskCount={this.state.tasks.length} />
        <TaskList taskCollection={this.state.tasks} />
      </div>
    );
  }


}

export default App;
