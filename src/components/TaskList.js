import React from "react";
import Task from "./Task";

class TaskList extends React.Component {
  render() {
    return (
      <div>
        <Task />
        <Task />
      </div>
    );
  }
}

export default TaskList;
