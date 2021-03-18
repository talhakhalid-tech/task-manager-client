import React, { Component } from "react";
import Chart from "react-apexcharts";

import "../styles/dashboard.css";

import defaultAvatar from "../assets/default-avatar.png";
import Sidebar from "../components/Sidebar";
import TaskCard from "../components/TaskCard";
import IncompleteTaskCard from "../components/IncompleteTaskCard";
import history from "../history";

export default class Dashboard extends Component {
  render() {
    if (localStorage.getItem("auth-token")) {
      return (
        <div>
          <Sidebar isDashboardActive="active" />
          <div className="dashboard-container pusher">
            <div className="dashboard-upper-segment">
              <div className="dashboard-upper-segment-heading">
                Welcome Back, {`{User Name}`}!
              </div>
              <div className="dashboard-upper-segment-right">
                Id: {`{User ID}`}{" "}
                <img
                  className="dashboard-upper-segment-avatar"
                  src={defaultAvatar}
                />
              </div>
            </div>
            <div className="dashboard-middle-segment">
              <div className="dashboard-middle-segment-pieChart">
                <Chart
                  options={{
                    labels: ["This Month", "This Week", "Today"],
                    title: {
                      text: "Tasks Completed Chart:",
                    },
                    plotOptions: {
                      radialBar: {
                        dataLabels: {
                          name: {
                            show: true,
                          },
                          value: {
                            show: true,
                            fontSize: "14px",
                            formatter: function (val) {
                              return val + "%";
                            },
                          },
                          total: {
                            show: true,
                            label: "Total Completed",
                            formatter: function (val) {
                              val =
                                val.globals.seriesTotals.reduce((a, b) => {
                                  return a + b;
                                }, 0.0) / 3.0;
                              return val.toFixed(2) + "%";
                            },
                          },
                        },
                      },
                    },
                  }}
                  series={[30, 40, 45]}
                  type="radialBar"
                />
              </div>
              <TaskCard cardHeading="Daily Tasks Analysis" />
              <TaskCard cardHeading="Weekly Tasks Analysis" />
              <TaskCard cardHeading="Monthly Tasks Analysis" />
            </div>
            <div className="dashboard-lower-segment">
              <div className="dashboard-lower-segment-header">
                <div className="dashboard-lower-segment-heading">
                  Next Tasks:
                </div>
                {/* <i
                  className="plus circle icon"
                ></i> */}
              </div>

              <IncompleteTaskCard />
              <IncompleteTaskCard />
              <IncompleteTaskCard />
              <IncompleteTaskCard />
            </div>
          </div>
        </div>
      );
    }
    return <>{history.push("/Login")}</>;
  }
}
