import React, { Component } from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      status: this.props.status
    };
  }

  activateEditMode = () => {
    this.setState({...this.state, editMode: true})
  };
  
  deActivateEditMode = () => {
    this.setState({...this.state, editMode: false})
    this.props.updateStatus(this.state.status)
  };

  onStatusChange = (e) => {
    this.setState({...this.state, status: e.currentTarget.value})
  }

  componentDidUpdate(prevProps, prevState) {
    debugger
    if(prevProps.status !== this.props.status){
      this.setState({status: this.props.status})
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode === true ? (
          <div>
            <input autoFocus={true}
                   onBlur={this.deActivateEditMode}
                   onChange={this.onStatusChange}
                   value={this.state.status} />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
