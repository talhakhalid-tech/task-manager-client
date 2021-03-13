import React, { Component } from "react";

import "../styles/sidebar.css";

import defaultAvatar from "../assets/default-avatar.png";

export default class Sidebar extends Component {
  render() {
    return (
      <div class="ui sidebar left inverted vertical visible menu">
        <div class="account-item">
          <div className="account-avatar">
            <img src={defaultAvatar} className="account-avatar-inner" />
          </div>
          <div className="avatar-title">{"{User Name}"}</div>
        </div>
        <a class="item active">
          <i class="block layout icon"></i>Dashboard
        </a>
        <a class="item">
          <i class="book icon"></i>Create Task
        </a>
        <a class="item">
          <i class="list icon"></i>Uncompleted Tasks
        </a>
        <a class="item">
          <i class="tasks icon"></i>Completed Tasks
        </a>
        <a class="item">
          <i class="star outline icon"></i>Starred Tasks
        </a>
        <a class="item">
          <i class="caret square down outline icon"></i>Archived Tasks
        </a>
        <div className="copyright-text">M. Talha Khalid © 2021</div>
      </div>
    );
  }
}
