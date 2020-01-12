import React from "react";

class Task extends React.Component {

  deleteClicked = () => {
    alert('You clicked the delete button');
  }


  render() {
    return (
      <div className="row taskRow">
        <div className="col-12 col-md-8">
          {this.props.item.description}
        </div>
        <div className="col-6 col-md-2">
          <button type="button" class="btn btn-success">
            Done
          </button>
        </div>
        <div className="col-6 col-md-2">
          <button type="button" class="btn btn-danger" onClick={this.deleteClicked}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Task;
