import React from "react";

class AddTask extends React.Component {

  addTask = () => {
    this.props.addTaskFunc("Pickup the shopping");
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Task to add...."
            />
            <div className="input-group-append">
              <button className="btn btn-outline-primary" type="button" onClick={this.addTask}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTask;
