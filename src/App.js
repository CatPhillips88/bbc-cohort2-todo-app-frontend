import React from "react";
import "./App.css";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskCount from "./components/TaskCount";
import TaskList from "./components/TaskList";

class App extends React.Component {

  state = {
    tasks: [
      { description: "Buy some milk", completed: false },
      { description: "Eat cheese", completed: true },
      { description: "Walk the dog", completed: false },
      { description: "Drink water", completed: false }
    ]
  }


  render() {
    return (
      <div className="container">
        <Header />
        <AddTask />
        <TaskCount counter={this.state.tasks}/>
        <TaskList jobs={this.state.tasks} />
      </div>
    );
  }
}

export default App;
