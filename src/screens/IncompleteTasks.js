import React, { Component } from "react";
import "../styles/incompletetasks.css";

import Sidebar from "../components/Sidebar";
import defaultAvatar from "../assets/default-avatar.png";
import IncompleteTaskCard from "../components/IncompleteTaskCard";
import history from "../history";

export default class IncompleteTasks extends Component {
  render() {
    if (localStorage.getItem("auth-token")) {
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
                <IncompleteTaskCard />
                <IncompleteTaskCard />
                <IncompleteTaskCard />
                <IncompleteTaskCard />
                <IncompleteTaskCard />
                <IncompleteTaskCard />
                <IncompleteTaskCard />
                <IncompleteTaskCard />
                <IncompleteTaskCard />
                <IncompleteTaskCard />
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
    return <>{history.push("/Login")}</>;
  }
}
