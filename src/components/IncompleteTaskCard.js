import React, { Component } from "react";

import "../styles/incompletetaskcard.css";

export default class IncompleteTaskCard extends Component {
  render() {
    let {
      taskTitle = "Task Title",
      createdAt = "time created",
      remainingTime = "time remaining",
    } = this.props;
    return (
      <div className="incomplete-recent-task-card">
        <div className="incomplete-task-heading">{taskTitle}</div>
        <div className="incomplete-task-time">
          Time Remaining:<p>{remainingTime}</p>
        </div>
        <div className="incomplete-task-time">
          Created At:<p>{createdAt}</p>
        </div>
        <div className="incomplete-task-buttons">
          <div className="incomplete-view-button">View</div>
          <div className="incomplete-delete-button">Delete</div>
          <div className="incomplete-complete-button">Complete</div>
        </div>
      </div>
    );
  }
}
