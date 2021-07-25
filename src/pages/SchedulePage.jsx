import { Container, Row, Col } from "reactstrap";
import WeekIcon from "../components/WeekIcon";
import React, { setState } from "react";
import ReactDOM from "react-dom";
import FullCalendar, { formatDate } from "@fullcalendar/react"; // must go before plugins
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "../components/EventUtills";
import "../../src/stylesheet/schedulePage.css";

import ScheduleDetail from "../components/ScheduleComponents/ScheduleDetail";
import { ThemeProvider } from "@material-ui/core";
import ScheduleModal from "../components/ScheduleComponents/ScheduleModal";
import "../stylesheet/scheduleModal.css";
import moment from "moment";

export default class SchedulePage extends React.Component {
  constructor(props) {
    super(props);
    props = this.props;
    var local_date = moment().format("YYYY-MM-DD");
    var local_hour = moment().format("HH");
    console.log("local_hour,", local_hour);
    this.state = {
      modal: false,
      caption: "",
      Info: { type: "schedule", content: {} },
      modalInputTitle: "",
      modalInputName2: "",
      modalScheduleStartTime: `${local_hour}:00`,
      modalScheduleEndTime: `${local_hour}:00`,
      modalContent: "",
      nowHour: `${local_hour}:00`,
      modalScheduleDate: local_date,
      today: local_date,
    };
  }
  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }
  handleSubmit(e) {
    const title = this.state.modalInputTitle;
    // this.setState({ caption: title });
    this.setState({
      Info: { ...this.Info, content: { caption: title } },
    });
    this.modalClose();
    console.log("close", this.state);
  }

  modalOpen() {
    this.setState({ modal: true });
    console.log("open", this.state);
  }

  modalClose() {
    this.setState({
      modalInputTitle: "",
      modalInputName2: "",
      modalScheduleStartTime: this.state.nowHour,
      modalScheduleEndTime: this.state.nowHour,
      modalContent: "",
      modalScheduleDate: this.state.today,
      modal: false,
    });
  }

  postInfo = this.props.postInfo;
  state = {
    weekendsVisible: true,
    currentEvents: [],
  };

  //   handleWeekendsToggle = () => {
  //     this.setState({
  //       weekendsVisible: !this.state.weekendsVisible,
  //     });
  //   };

  handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  handleDisplay = (event) => {
    // console.log("target", document.get);
  };

  handleEventClick = (clickInfo) => {
    // console.log("clickInfo,", clickInfo.el.classList);
    // console.log("clickInfo,", clickInfo);
    // console.log("clickInfoID,", clickInfo.event["_def"].publicId);
    // console.log(
    //   "schedule_detail_div,",
    //   document
    //     .getElementsByClassName("schedule_detail")[0]
    //     .getElementsByClassName("schedule_detail_box").length
    // );

    const boxes = document
      .getElementsByClassName("schedule_detail")[0]
      .getElementsByClassName("schedule_detail_box");

    for (var box of boxes) {
      // console.log(box);
      box.classList.add("display-none");
    }
    // const postId = document
    //   .getElementsByClassName("schedule_detail")[0]
    //   .getElementsByClassName(`postId${clickInfo.event["_def"].publicId}`);
    // console.log(postId);
    // document
    //   .getElementsByClassName("schedule_detail")[0]
    //   .classList.remove("display-none");
    document
      .getElementsByClassName("schedule_detail")[0]
      .getElementsByClassName(`postId${clickInfo.event["_def"].publicId}`)[0]
      .classList.remove("display-none");

    // return (clickInfo.el.classList = [
    //   ...clickInfo.el.classList,
    //   "display-none",
    // ]);
    // if (
    //   alert(
    //     `Are you sure you want to delete the event '${clickInfo.event.title}'`
    //   )
    // ) {
    //   clickInfo.event.remove();
    // }
    // console.log("event", this.state.Info);
  };

  handleEvents = (events) => {
    this.setState({
      currentEvents: events,
    });
  };

  render() {
    return (
      <div className="col-9 px-0 mx-0 row">
        <div className="col-9 px-0">
          <div>
            <div
              className="myschedule-header"
              style={{ backgroundColor: "aquamarine", marginBottom: "10px" }}
            >
              <span style={{ fontSize: "50px" }}>Schedule</span>
            </div>
            {/* <WeekIcon /> */}
            <div
              className="myschedule-body"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                padding: "10px 0",
                margin: "20px 0",
              }}
            ></div>
            <div className="App">
              <ScheduleModal
                show={this.state.modal}
                handleClose={(e) => this.modalClose(e)}
              >
                <h2>Create a new schedule</h2>
                <div className="form-group">
                  <label>Schedule Title:</label>
                  <input
                    type="text"
                    value={this.state.modalInputTitle}
                    name="modalInputTitle"
                    onChange={(e) => this.handleChange(e)}
                    className="form-control"
                  />
                  <div>
                    <label>Date:</label>
                    <input
                      type="date"
                      value={this.state.modalScheduleDate}
                      name="modalScheduleDate"
                      id="modalScheduleDate"
                      onChange={(e) => this.handleChange(e)}
                      className="form-control"
                      min={this.state.today}
                    />
                  </div>

                  <label>Time:</label>
                  <div className="scheduleTime-div">
                    <input
                      type="time"
                      value={this.state.modalScheduleStartTime}
                      name="modalScheduleStartTime"
                      id="modalScheduleStartTime"
                      onChange={(e) => this.handleChange(e)}
                      className="form-control"
                    />

                    <div>
                      &nbsp; &nbsp;
                      <img src="https://img.icons8.com/material-outlined/24/000000/horizontal-line.png" />
                      &nbsp; &nbsp;
                    </div>
                    <input
                      type="time"
                      value={this.state.modalScheduleEndTime}
                      name="modalScheduleEndTime"
                      id="modalScheduleEndTime"
                      onChange={(e) => this.handleChange(e)}
                      className="form-control"
                    />
                  </div>

                  <textarea
                    value={this.state.modalContent}
                    name="modalContent"
                    id="modalContent"
                    onChange={(e) => this.handleChange(e)}
                    className="form-control"
                  />
                </div>
                {/* <label>Content:</label> */}
                {/* <input
                    type="textarea"
                    value={this.state.modalInputName2}
                    name="modalInputName2"
                    onChange={(e) => this.handleChange(e)}
                    className="form-control"
                  /> */}
                <div className="form-group">
                  <button onClick={(e) => this.handleSubmit(e)} type="button">
                    Save
                  </button>
                </div>
              </ScheduleModal>
            </div>

            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              // dateClick={function (info) {
              //   alert("clicked " + info.dateStr);
              // }}
              weekends={this.state.weekendsVisible}
              initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
              // select={this.handleDateSelect}
              dateClick={(e) => this.modalOpen(e)}
              // dateClick={function (info) {
              //   alert("clicked " + info.dateStr);
              // }}
              eventContent={this.renderEventContent} // custom render function
              eventClick={this.handleEventClick}
              eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
              /* you can update a remote database when these fire:
                    eventAdd={function(){}}
                    eventChange={function(){}}
                    eventRemove={function(){}}
                    */
            />
          </div>
        </div>

        <div className="col-3 px-0 schedule_detail">
          {this.props.postInfo.map((Info) => {
            // console.log(Info);
            return (
              <ScheduleDetail className={Info.id} Info={Info} Id={Info.id} />
            );
          })}
        </div>
      </div>
    );
  }
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
}
