import React, { Component } from "react";
import { DateRangePicker } from "react-date-range";

import "../styles/createtask.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import Sidebar from "../components/Sidebar";
import defaultAvatar from "../assets/default-avatar.png";
import history from "../history";
import Tasks from "../API/Tasks";
import AppModal from "../components/AppModal";

export default class CreateTask extends Component {
  state = {
    title: "",
    titleError: null,
    description: "",
    descriptionError: null,
    range: [
      {
        startDate: new Date(),
        endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
        key: "selection",
      },
    ],
    startTime:
      ("0" + new Date().getHours()).slice(-2) +
      ":" +
      ("0" + new Date().getMinutes()).slice(-2),
    startTimeError: "",
    endTime:
      ("0" + new Date().getHours()).slice(-2) +
      ":" +
      ("0" + new Date().getMinutes()).slice(-2),
    endTimeError: "",
    modalIsOpen: false,
    successModal: false,
    successModalConfig: {
      iconClass: "check circle outline icon",
      iconColor: "#65E340",
      modalText: "Congratulations! Task Added Successfully",
      buttonText: "Continue",
    },
    failModal: false,
    failModalConfig: {
      iconClass: "times circle outline icon",
      iconColor: "tomato",
      modalText: "Oops! An Error Occured",
      buttonText: "Try Again",
    },
  };

  addTaskHandler = async () => {
    if (this.state.title.trim().length <= 0) {
      return this.setState({ titleError: "Title is required field" });
    }
    if (this.state.title.trim().length < 10) {
      return this.setState({
        titleError: "Title length must be minimum 10 characters",
      });
    }
    if (this.state.description.trim().length <= 0) {
      return this.setState({
        descriptionError: "Description is required field",
      });
    }
    if (this.state.description.trim().length < 30) {
      return this.setState({
        descriptionError: "Description length must be minimum 30 characters",
      });
    }

    const now = new Date();

    if (
      this.state.range[0].startDate.toLocaleDateString() ===
      now.toLocaleDateString()
    ) {
      if (this.state.startTime < now.getHours() + ":" + now.getMinutes())
        return this.setState({ startTimeError: "Invalid start time" });
    }

    if (
      this.state.range[0].endDate.toLocaleDateString() ===
      now.toLocaleDateString()
    ) {
      if (this.state.endTime <= this.state.startTime)
        return this.setState({ endTimeError: "Invalid End time" });
    }

    if (
      !this.state.titleError &&
      !this.state.descriptionError &&
      !this.state.startTimeError &&
      !this.state.endTimeError
    ) {
      let startDateTime = new Date();
      let endDateTime = new Date();
      startDateTime.setDate(this.state.range[0].startDate.getDate());
      startDateTime.setHours(this.state.startTime.split(":")[0]);
      startDateTime.setMinutes(this.state.startTime.split(":")[1]);
      endDateTime.setDate(this.state.range[0].endDate.getDate());
      endDateTime.setHours(this.state.endTime.split(":")[0]);
      endDateTime.setMinutes(this.state.endTime.split(":")[1]);

      try {
        const res = await Tasks.post(
          "",
          {
            title: this.state.title,
            description: this.state.description,
            startDateTime,
            endDateTime,
          },
          { headers: { Authorization: localStorage.getItem("auth-token") } }
        );
        if (res.status === 201) {
          this.setState({
            modalIsOpen: true,
            successModal: true,
            failModal: false,
          });
        }
      } catch (e) {
        this.setState({
          modalIsOpen: true,
          successModal: false,
          failModal: true,
        });
      }
    }
  };

  handleCloseModal = () => {
    if (this.state.successModal) {
      this.setState({
        modalIsOpen: false,
        successModal: false,
      });
      history.push("/Dashboard");
    } else {
      this.setState({
        modalIsOpen: false,
        failModal: false,
      });
    }
  };

  render() {
    if (localStorage.getItem("auth-token")) {
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
                  value={this.state.title}
                  onChange={(elem) =>
                    this.setState({
                      titleError: null,
                      title: elem.target.value,
                    })
                  }
                />
                <div className="create-input-error">
                  {this.state.titleError}
                </div>
              </div>
              <div className="create-input-area">
                <div className="create-input-label">Task Description:</div>
                <textarea
                  // className="create-input"
                  placeholder="Description..."
                  required={true}
                  rows={3}
                  maxLength={1000}
                  value={this.state.description}
                  onChange={(elem) =>
                    this.setState({
                      descriptionError: null,
                      description: elem.target.value,
                    })
                  }
                />
                <div className="create-input-error">
                  {this.state.descriptionError}
                </div>
              </div>
              <div className="create-input-area">
                <div className="create-input-label">
                  Set Due Date and Time (Max 30 Days):
                </div>
                <div className="create-duedate">
                  <div className="create-datepick">
                    <div className="create-datePick-label">Set Date: </div>
                    {/* <div
                      className="create-input-error"
                      style={{ marginBottom: "0px" }}
                    >
                      hey error
                    </div> */}
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
                        this.setState({
                          startTimeError: null,
                          startTime: elem.target.value,
                        })
                      }
                    />
                    <div className="create-input-error">
                      {this.state.startTimeError}
                    </div>
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
                        this.setState({
                          endTimeError: null,
                          endTime: elem.target.value,
                        })
                      }
                    />
                    <div className="create-input-error">
                      {this.state.endTimeError}
                    </div>
                  </div>
                </div>
              </div>
              <div className="create-button" onClick={this.addTaskHandler}>
                Add Task
              </div>
            </div>
          </div>
          {this.state.successModal ? (
            <AppModal
              showModal={this.state.modalIsOpen}
              handleCloseModal={this.handleCloseModal}
              {...this.state.successModalConfig}
            />
          ) : (
            <AppModal
              showModal={this.state.modalIsOpen}
              handleCloseModal={this.handleCloseModal}
              {...this.state.failModalConfig}
            />
          )}
        </div>
      );
    }
    return <>{history.push("/Login")}</>;
  }
}
