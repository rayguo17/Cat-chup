import { Container, Row, Col } from "reactstrap";
import WeekIcon from "../components/WeekIcon";
import React, { setState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "../components/EventUtills";
import "../../src/stylesheet/schedulePage.css";

import ScheduleDetail from "../components/ScheduleComponents/ScheduleDetail";

 // const [scheduleList,SetScheduleList] = useState([]);
  // useEffect(() => {
  //   const scheduleData = [
  //     {
  //       type:'schedule',

  //     }
  //   ]
  //   // scheduleList = []
  //   SetScheduleList(scheduleData);
  //   // scheduleList = [{type:'schedule'}]
    
  // }, [])

export default class SchedulePage extends React.Component {
  constructor(props) {
    super(props);
    props = this.props;
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
    console.log("target", document.get);
  };

  handleEventClick = (clickInfo) => {
    // console.log("clickInfo,", clickInfo.el.classList);
    console.log(
      "clickInfo,",
      document.getElementsByClassName("schedule_detail")
    );
    document
      .getElementsByClassName("schedule_detail")[0]
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
              //   dateClick={function (info) {
              //     alert("clicked " + info.dateStr);
              //   }}
              weekends={this.state.weekendsVisible}
              initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
              // select={this.handleDateSelect}
              dateClick={
                this.handleDisplay
                //   function (info) {
                //   alert("clicked " + info.dateStr);
                // }
              }
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

        <div className="col-3 px-0 display-none schedule_detail">
          <ScheduleDetail
            className="schedule_detail"
            postInfo={this.props.postInfo}
          />
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
