import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/sidebar.css";

import defaultAvatar from "../assets/default-avatar.png";

export default class Sidebar extends Component {
  render() {
    let {
      isDashboardActive = "",
      isCreatetaskActive = "",
      isIncompletedActive = "",
      isCompletedActive = "",
      isStarredActive = "",
      isDeletedActive = "",
    } = this.props;
    return (
      <div class="ui sidebar left inverted vertical visible menu">
        <div class="account-item">
          <div className="account-avatar">
            <img src={defaultAvatar} className="account-avatar-inner" />
          </div>
          <div className="avatar-title">{"{User Name}"}</div>
        </div>
        <Link class={"item " + isDashboardActive} to="/Dashboard">
          <i class="block layout icon"></i>Dashboard
        </Link>
        <Link class={"item " + isCreatetaskActive} to="/Create">
          <i class="book icon"></i>Create Task
        </Link>
        <Link class={"item " + isIncompletedActive} to="/Incomplete">
          <i class="list icon"></i>Incomplete Tasks
        </Link>
        <Link class={"item " + isCompletedActive} to="/Completed">
          <i class="tasks icon"></i>Completed Tasks
        </Link>
        <Link class={"item " + isStarredActive} to="/Starred">
          <i class="star outline icon"></i>Starred Tasks
        </Link>
        <Link class={"item " + isDeletedActive} to="/Deleted">
          <i class="trash alternate outline icon"></i>Deleted Tasks
        </Link>
        <div className="copyright-text">M. Talha Khalid © 2021</div>
      </div>
    );
  }
}
