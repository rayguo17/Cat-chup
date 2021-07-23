import { Container, Row, Col } from "reactstrap";
import WeekIcon from "../components/WeekIcon";
import React from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import ScheduleDetail from '../components/ScheduleComponents/ScheduleDetail'

const SchedulePage = (props) => {
  const postInfo = props.postInfo;

  const handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };

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
          >
            {/* <div className="">
              <button>left</button>
              <button>right</button>
              <button>today</button>
            </div>
            <div className="">{"Jun 27 - Jul 3,2021"}</div>
            <div className="">
              <button>month</button>
              <button>week</button>
              <button>day</button>
            </div> */}
          </div>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
          // initialView="dayGridMonth"
          // editable={true}
          // selectable={true}
          // selectMirror={true}
          // dayMaxEvents={true}
          // weekends={this.state.weekendsVisible}
          // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          // select={this.handleDateSelect}
          // eventContent={renderEventContent} // custom render function
          // eventClick={this.handleEventClick}
          // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
          />
          {/* <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px 0",
            }}
          >
            <p>Sunday</p>
            <p>June 27,2021</p>
          </div> */}

          {/* <div
            style={{
              display: "flex",
              margin: "10px 0",
            }}
          >
            <div
              style={{ width: "20%,", textAlign: "start", marginLeft: "10px" }}
            >
              {"07:00am ~ 07:00pm"}
            </div>
            <div
              style={{ width: "80%", textAlign: "start", marginLeft: "30px" }}
            >
              {"Running in the morning"}
              <button style={{ float: "right" }} onclick={{}}>
                Edit
              </button>
            </div>
          </div> */}
        </div>
      </div>

      <div className="col-3 px-0">
        <ScheduleDetail postInfo={postInfo} />
      </div>
    </div>
  );
};

export default SchedulePage;
