import React, { Component } from "react";
import { DateRangePicker } from "react-date-range";

import "../styles/createtask.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import Sidebar from "../components/Sidebar";
import defaultAvatar from "../assets/default-avatar.png";

export default class CreateTask extends Component {
  state = {
    range: [
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ],
    startTime: "",
    endTime: "",
  };

  addTaskHandler = () => {
    console.log(
      "Start Date:" + this.state.range[0].startDate,
      "End Date:" + this.state.range[0].endDate,
      "Start Time:" + this.state.startTime,
      "End Time:" + this.state.endTime
    );
  };

  render() {
    const now = new Date();
    return (
      <div>
        <Sidebar isCreatetaskActive="active" />
        <div className="pusher create-container">
          <div className="create-upper-segment">
            <div className="create-upper-segment-heading">
              Create a New Task
            </div>
            <div className="create-upper-segment-right">
              Id: {`{User ID}`}
              <img
                className="create-upper-segment-avatar"
                src={defaultAvatar}
              />
            </div>
          </div>
          <div className="create-form">
            <div className="create-input-area">
              <div className="create-input-label">Task Title:</div>
              <input
                className="create-input"
                placeholder="Title..."
                required={true}
                maxLength={100}
              />
            </div>
            <div className="create-input-area">
              <div className="create-input-label">Task Description:</div>
              <textarea
                // className="create-input"
                placeholder="Description..."
                required={true}
                rows={3}
                maxLength={1000}
              />
            </div>
            <div className="create-input-area">
              <div className="create-input-label">
                Set Due Date and Time (Max 30 Days):
              </div>
              <div className="create-duedate">
                <div className="create-datepick">
                  <div className="create-datePick-label">Set Date: </div>
                  <DateRangePicker
                    ranges={this.state.range}
                    onChange={(data) =>
                      this.setState({ range: [data.selection] })
                    }
                    rangeColors={["#333"]}
                    months={2}
                    direction="horizontal"
                    showMonthAndYearPickers={false}
                    showDateDisplay={false}
                    showPreview={false}
                    minDate={now}
                    maxDate={new Date(new Date().setDate(now.getDate() + 30))}
                  />
                </div>
              </div>
              <div className="create-timepick">
                <div className="create-starttimepick">
                  <div className="create-starttimepick-label">
                    Set Start Date Time:
                  </div>
                  <input
                    type="time"
                    className="create-time-input"
                    value={this.state.startTime}
                    onChange={(elem) =>
                      this.setState({ startTime: elem.target.value })
                    }
                  />
                </div>
                <div className="create-endtimepick">
                  <div className="create-endtimepick-label">
                    Set End Date Time:
                  </div>
                  <input
                    type="time"
                    className="create-time-input"
                    value={this.state.endTime}
                    onChange={(elem) =>
                      this.setState({ endTime: elem.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="create-button" onClick={this.addTaskHandler}>
              Add Task
            </div>
          </div>
        </div>
      </div>
    );
  }
}
