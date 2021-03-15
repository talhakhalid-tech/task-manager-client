import React, { Component } from "react";

import "../styles/recenttaskcard.css";

export default class RecentTaskCard extends Component {
  render() {
    let {
      taskTitle = "Task Title",
      createdAt = "time created",
      remainingTime = "time remaining",
    } = this.props;
    return (
      <div className="recent-task-card">
        <div className="task-heading">{taskTitle}</div>
        <div className="task-time">
          Time Remaining:<p>{remainingTime}</p>
        </div>
        <div className="task-time">
          Created At:<p>{createdAt}</p>
        </div>
        <div className="task-buttons">
          <div className="view-button">View</div>
          <div className="delete-button">Delete</div>
          <div className="complete-button">Complete</div>
        </div>
      </div>
    );
  }
}
