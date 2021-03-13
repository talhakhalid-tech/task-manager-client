import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Chart from "react-apexcharts";

import "../styles/dashboard.css";

import defaultAvatar from "../assets/default-avatar.png";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className="dashboard-container pusher">
          <div className="upper-segment">
            <div className="upper-segment-heading">
              Welcome Back, {`{User Name}`}!
            </div>
            <div className="upper-segment-right">
              Id: {`{User ID}`}{" "}
              <img className="upper-segment-avatar" src={defaultAvatar} />
            </div>
          </div>
          <div className="middle-segment"></div>
          <div className="middle-segment-pieChart">
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
        </div>
      </div>
    );
  }
}
