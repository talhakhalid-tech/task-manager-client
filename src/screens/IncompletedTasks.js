import React, { Component } from "react";
import "../styles/incompletedtasks.css";

import Sidebar from "../components/Sidebar";
import defaultAvatar from "../assets/default-avatar.png";
import RecentTaskCard from "../components/RecentTaskCard";

export default class IncompletedTasks extends Component {
  render() {
    return (
      <div>
        <Sidebar isIncompletedActive="active" />
        <div className="pusher incompleted-container">
          <div className="incompleted-upper-segment">
            <div className="incompleted-upper-segment-heading">
              Incomplete Tasks
            </div>
            <div className="incompleted-upper-segment-right">
              Id: {`{User ID}`}
              <img
                className="incompleted-upper-segment-avatar"
                src={defaultAvatar}
              />
            </div>
          </div>
          <div className="incompleted-middle-segment">
            <div class="ui category search incompleted-searchbar">
              <div class="ui icon input incompleted-searchbar-input">
                <input
                  class="prompt"
                  type="text"
                  placeholder="Search Task Title..."
                />
                <i class="search icon" style={{ cursor: "pointer" }}></i>
              </div>
            </div>
            <div className="incompleted-remaining-text">
              Total Incomplete Tasks: {10}
            </div>
          </div>
          <div className="incompleted-lower-segment">
            <div className="incompleted-tasks-list">
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
          {/* <div class="ui top attached tabular menu">
            <div class="item">Tab1</div>
            <div class="active item">Tab2</div>
          </div>
          <div class="ui bottom attached active tab segment">
            <p>hello</p>
            <p>tab</p>
          </div> */}
        </div>
      </div>
    );
  }
}
