import React, { Component } from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };
  }

  activateEditMode = () => {
    this.setState({...this.state, editMode: true})
  };
  
  deActivateEditMode = () => {
    this.setState({...this.state, editMode: false})
  };

  render() {
    return (
      <div>
        {this.state.editMode === true ? (
          <div>
            <input autoFocus={true} onBlur={this.deActivateEditMode} value={this.props.status} />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
