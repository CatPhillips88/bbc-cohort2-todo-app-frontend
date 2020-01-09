import React from "react";

class TaskCount extends React.Component {
  render() {
    return (
      <div className="row taskCountArea">
        <div className="col-12">
          <h3>Tasks left: {this.props.counter.length}</h3>
        </div>
      </div>
    );
  }
}

export default TaskCount;
