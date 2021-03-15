import React, { Component } from "react";
import Chart from "react-apexcharts";

import "../styles/taskcard.css";

export default class TaskCard extends Component {
  render() {
    let {
      cardHeading = "Card Heading",
      fontColor = "black",
      totalTasks = 0,
      completedTasks = 0,
      incompletedTasks = 0,
    } = this.props;
    return (
      <div class="ui card" style={{ height: "346px" }}>
        <div class="content" style={{ color: fontColor }}>
          <div className="card-heading">{cardHeading}:</div>
          <div className="card-sub-heading">
            Total Tasks: <span>{totalTasks}</span>
          </div>
          <div className="card-sub-heading">
            Completed Tasks: <span>{completedTasks}</span>
          </div>
          <div className="card-sub-heading">
            Incompleted Tasks: <span>{incompletedTasks}</span>
          </div>
          <div className="card-chart">
            <Chart
              options={{
                options: {},
              }}
              series={[
                {
                  name: "Tasks Completed",
                  data: [
                    {
                      x: "14-Mar",
                      y: 3,
                    },
                    {
                      x: "13-Mar",
                      y: 5,
                    },
                    {
                      x: "12-Mar",
                      y: 2,
                    },
                    {
                      x: "11-Mar",
                      y: 7,
                    },
                    {
                      x: "10-Mar",
                      y: 4,
                    },
                    {
                      x: "9-Mar",
                      y: 1,
                    },
                  ],
                },
              ]}
              type="line"
            />
          </div>
        </div>
      </div>
    );
  }
}
