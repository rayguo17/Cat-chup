import { Container, Row, Col } from "reactstrap";
import WeekIcon from "../components/WeekIcon";
import React, { setState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "../components/EventUtills";

// const SchedulePage = (props) => {
//   const postInfo = props.postInfo;

//   //   const handleDateClick = (arg) => {
//   //     // bind with an arrow function
//   //     alert(arg.dateStr);
//   //   };

//   const state = {
//     weekendsVisible: true,
//     currentEvents: [],
//   };

//   const handleWeekendsToggle = () => {
//     setState({
//       weekendsVisible: !state.weekendsVisible,
//     });
//   };

//   const handleDateSelect = (selectInfo) => {
//     let title = prompt("Please enter a new title for your event");
//     let calendarApi = selectInfo.view.calendar;

//     calendarApi.unselect(); // clear date selection

//     if (title) {
//       calendarApi.addEvent({
//         id: createEventId(),
//         title,
//         start: selectInfo.startStr,
//         end: selectInfo.endStr,
//         allDay: selectInfo.allDay,
//       });
//     }
//   };

//   //   const handleEventClick = (clickInfo) => {
//   //     if (
//   //       confirm(
//   //         `Are you sure you want to delete the event '${clickInfo.event.title}'`
//   //       )
//   //     ) {
//   //       clickInfo.event.remove();
//   //     }
//   //   };

//   const handleEvents = (events) => {
//     setState({
//       currentEvents: events,
//     });
//   };

//   function renderEventContent(eventInfo) {
//     return (
//       <>
//         <b>{eventInfo.timeText}</b>
//         <i>{eventInfo.event.title}</i>
//       </>
//     );
//   }

//   function renderSidebarEvent(event) {
//     return (
//       <li key={event.id}>
//         <b>
//           {formatDate(event.start, {
//             year: "numeric",
//             month: "short",
//             day: "numeric",
//           })}
//         </b>
//         <i>{event.title}</i>
//       </li>
//     );
//   }

//   return (
//     <div className="col-9 px-0 mx-0 row">
//       <div className="col-9 px-0">
//         <div>
//           <div
//             className="myschedule-header"
//             style={{ backgroundColor: "aquamarine", marginBottom: "10px" }}
//           >
//             <span style={{ fontSize: "50px" }}>Schedule</span>
//           </div>
//           {/* <WeekIcon /> */}
//           <div
//             className="myschedule-body"
//             style={{
//               display: "flex",
//               justifyContent: "space-evenly",
//               padding: "10px 0",
//               margin: "20px 0",
//             }}
//           >
//             {/* <div className="">
//               <button>left</button>
//               <button>right</button>
//               <button>today</button>
//             </div>
//             <div className="">{"Jun 27 - Jul 3,2021"}</div>
//             <div className="">
//               <button>month</button>
//               <button>week</button>
//               <button>day</button>
//             </div> */}
//           </div>
//           <FullCalendar
//             plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//             headerToolbar={{
//               left: "prev,next today",
//               center: "title",
//               right: "dayGridMonth,timeGridWeek,timeGridDay",
//             }}
//             initialView="dayGridMonth"
//             editable={true}
//             selectable={true}
//             selectMirror={true}
//             dayMaxEvents={true}
//             weekends={state.weekendsVisible}
//             initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
//             select={handleDateSelect}
//             eventContent={renderEventContent} // custom render function
//             // eventClick={handleEventClick}
//             eventsSet={handleEvents} // called after events are initialized/added/changed/removed
//             /* you can update a remote database when these fire:
//             eventAdd={function(){}}
//             eventChange={function(){}}
//             eventRemove={function(){}}
//             */
//           />
//           {/* <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               margin: "10px 0",
//             }}
//           >
//             <p>Sunday</p>
//             <p>June 27,2021</p>
//           </div> */}

//           {/* <div
//             style={{
//               display: "flex",
//               margin: "10px 0",
//             }}
//           >
//             <div
//               style={{ width: "20%,", textAlign: "start", marginLeft: "10px" }}
//             >
//               {"07:00am ~ 07:00pm"}
//             </div>
//             <div
//               style={{ width: "80%", textAlign: "start", marginLeft: "30px" }}
//             >
//               {"Running in the morning"}
//               <button style={{ float: "right" }} onclick={{}}>
//                 Edit
//               </button>
//             </div>
//           </div> */}
//         </div>
//       </div>

//       <div className="col-3 px-0">
//         <div style={{ fontSize: "50px", backgroundColor: "antiquewhite" }}>
//           Details
//         </div>
//         <div style={{ textAlign: "center", backgroundColor: "grey" }}>
//           {"Running in the morning"}
//         </div>
//         <div>
//           <div style={{ textAlign: "start" }}>{"Date:2021-07-01"}</div>
//           <div style={{ textAlign: "start" }}>{"Time: 07:00am ~ 07:00pm"}</div>
//           <div style={{ textAlign: "start", marginTop: "30px" }}>
//             {
//               "Running in humans is associated with improved health and life expectancy.I plan to run every morning.Would you join me?"
//             }
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SchedulePage;

export default class SchedulePage extends React.Component {
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
    console.log("clickInfo,", clickInfo.el.classList);
    if (
      alert(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
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

        <div className="col-3 px-0">
          <div style={{ fontSize: "50px", backgroundColor: "antiquewhite" }}>
            Details
          </div>
          <div style={{ textAlign: "center", backgroundColor: "grey" }}>
            {"Running in the morning"}
          </div>
          <div>
            <div style={{ textAlign: "start" }}>{"Date:2021-07-01"}</div>
            <div style={{ textAlign: "start" }}>
              {"Time: 07:00am ~ 07:00pm"}
            </div>
            <div style={{ textAlign: "start", marginTop: "30px" }}>
              {
                "Running in humans is associated with improved health and life expectancy.I plan to run every morning.Would you join me?"
              }
            </div>
          </div>
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
