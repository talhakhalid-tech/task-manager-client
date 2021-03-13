import React, { Component } from "react";
import Sidebar from "../components/Sidebar";

import "../styles/dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div class="pusher">Site content</div>
      </div>
    );
  }
}
