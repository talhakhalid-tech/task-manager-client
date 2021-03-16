import React, { Component } from "react";

import "../styles/completedtaskcard.css";

export default class CompletedTaskCard extends Component {
  state = { isStarred: this.props.isStarred };

  starTask = () => {
    this.setState({ isStarred: !this.state.isStarred });
  };

  render() {
    let {
      taskTitle = "Task Title",
      completionPeriod = "completion period",
      completedAgo = "time ago",
    } = this.props;
    return (
      <div className="completed-recent-task-card">
        <div className="completed-task-heading">{taskTitle}</div>
        <div className="completed-task-time">
          Completion Period:<p>{completionPeriod}</p>
        </div>
        <div className="completed-task-time">
          Completed:<p>{completedAgo}</p>
        </div>
        <div className="completed-task-buttons">
          {this.state.isStarred ? (
            <i class="star icon completed-starred" onClick={this.starTask}></i>
          ) : (
            <i
              class="star outline icon completed-starred"
              onClick={this.starTask}
            ></i>
          )}
          <div className="completed-view-button">View</div>
          <div className="completed-delete-button">Delete</div>
          {/* <div className="completed-complete-button">Complete</div> */}
        </div>
      </div>
    );
  }
}
