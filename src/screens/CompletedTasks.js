import React, { Component } from "react";
import "../styles/completedtasks.css";

import Sidebar from "../components/Sidebar";
import defaultAvatar from "../assets/default-avatar.png";
import RecentTaskCard from "../components/RecentTaskCard";

export default class completedTasks extends Component {
  state = { filterContentDisplay: "none" };

  rangeClickHandler = () => {
    // this.filterRef.current.style.display = "none";
    this.setState({ filterContentDisplay: "none" });
  };

  filterClickHandler = () => {
    // this.filterRef.current.style.display = "block";
    this.setState({ filterContentDisplay: "block" });
  };

  render() {
    return (
      <div>
        <Sidebar isCompletedActive="active" />
        <div className="pusher incompleted-container">
          <div className="completed-upper-segment">
            <div className="completed-upper-segment-heading">
              Completed Tasks
            </div>
            <div className="completed-upper-segment-right">
              Id: {`{User ID}`}
              <img
                className="completed-upper-segment-avatar"
                src={defaultAvatar}
              />
            </div>
          </div>
          <div className="completed-middle-segment">
            <div class="ui category search completed-searchbar">
              <div class="ui icon input completed-searchbar-input">
                <input
                  class="prompt"
                  type="text"
                  placeholder="Search Task Title..."
                />
                <i class="search icon" style={{ cursor: "pointer" }}></i>
              </div>
              <div class="completed-filter">
                <span
                  className="completed-filter-button"
                  onClick={this.filterClickHandler}
                >
                  <i class="filter icon"></i> Filter Tasks
                </span>
                <div
                  class="completed-filter-content"
                  style={{ display: this.state.filterContentDisplay }}
                  // ref={this.filterRef}
                >
                  <div className="filter-period-heading">
                    Filter periodically:
                  </div>
                  <div className="filter-period-choice">Today Tasks</div>
                  <div className="filter-period-choice">This Week Tasks</div>
                  <div className="filter-period-choice">This Month Tasks</div>
                  <div className="filter-period-heading">
                    Filter Using Date Range:
                  </div>
                  <div className="filter-period-date-area">
                    <div className="filter-period-date-heading">
                      Start Date:
                    </div>
                    <input type="date" className="filter-period-date-input" />
                  </div>
                  <div className="filter-period-date-area">
                    <div className="filter-period-date-heading">End Date:</div>
                    <input type="date" className="filter-period-date-input" />
                  </div>
                  <div
                    className="filter-period-date-button"
                    onClick={this.rangeClickHandler}
                  >
                    Apply Range Filter
                  </div>
                </div>
              </div>
            </div>
            <div className="completed-remaining-text">
              Total Completed Tasks: {10}
            </div>
          </div>
          <div className="completed-lower-segment">
            <div className="completed-tasks-list">
              <RecentTaskCard />
              <RecentTaskCard />
              <RecentTaskCard />
              <RecentTaskCard />
              <RecentTaskCard />
              <RecentTaskCard />
              <RecentTaskCard />
              <RecentTaskCard />
              <RecentTaskCard />
              <RecentTaskCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
