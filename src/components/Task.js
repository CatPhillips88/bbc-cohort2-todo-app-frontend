import React from "react";

class Task extends React.Component {

  deleteClicked = () => {
    this.props.deleteTaskFunc(this.props.item.id);
  }

  doneClicked = () => {
    this.props.completedTaskFunc(this.props.item.id);
  }


  render() {
    return (
      <div className="row taskRow">
        <div className="col-12 col-md-8">
          {this.props.item.description}
        </div>
        <div className="col-6 col-md-2">
          <button type="button" className="btn btn-success" onClick={this.doneClicked}>
            Done
          </button>
        </div>
        <div className="col-6 col-md-2">
          <button type="button" className="btn btn-danger" onClick={this.deleteClicked}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Task;
