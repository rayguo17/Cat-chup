import { Container, Row, Col } from "reactstrap";
import WeekIcon from "../components/WeekIcon";
import React, { setState } from "react";
import ReactDOM from "react-dom";
import FullCalendar, { formatDate } from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "../components/EventUtills";
import "../../src/stylesheet/schedulePage.css";

import ScheduleDetail from "../components/ScheduleComponents/ScheduleDetail";
import {
  ThemeProvider,
  TextareaAutosize,
  Button,
  TextField,
} from "@material-ui/core";
import ScheduleModal from "../components/ScheduleComponents/ScheduleModal";
import "../stylesheet/scheduleModal.css";
import moment from "moment";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import MoodIcon from "../img//moodIcon.png";
import IncognitoIcon from "../img//incognitoIcon.png";
import EventsIcon from "../img//eventsIcon.png";
import PostEmoji from "../img//post_smile-emoji_icon.png";
import UploadImageIcon from "../img/upload_imageIcon.png";
import ReactImageUploading from "react-images-uploading";
import { PostImageShowcase } from "../components/WhatsOnYourMindComponents/PostImageShowcase";
import { EmojiPopper } from "../components/WhatsOnYourMindComponents/EmojiPopper";
import { useRef } from "react";
import { addNewPostThunk } from "../redux/post/action";
import FriendGroupSelector from "../components/WhatsOnYourMindComponents/FriendGroupSelector";
import { makeStyles } from "@material-ui/core";
import toEventIcon from "../img/toEvent.png";
import notEventIcon from "../img/notEvent.png";

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

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    marginBottom: 10,
  },
  title: {
    border: "none",
    width: "100%",
    marginBottom: "5px",
  },
}));

var currentScheduleList = [];
const SchedulePage = (props) => {
  const scheduleListStore = useSelector((state) => state.scheduleListStore);
  const scheduleList = scheduleListStore.scheduleList;
  const [INITIAL_EVENTS, setINITIAL_EVENTS] = useState([]);
  const classes = useStyles();
  var local_date = moment().format("YYYY-MM-DD");
  var local_hour = moment().format("HH");
  console.log("local_hour,", local_hour);
  const [modal, setModal] = useState(false);
  const [caption, setCaption] = useState("");
  const [Info, setInfo] = useState({ type: "schedule", content: {} });
  const [modalInputTitle, setModalInputTitle] = useState("");
  const [modalScheduleStartTime, setModalScheduleStartTime] = useState(``);
  const [modalScheduleEndTime, setModalScheduleEndTime] = useState(``);
  const [modalContent, setModalContent] = useState("");
  const [nowHour, setNowHour] = useState(`${local_hour}:00`);
  const [modalScheduleDate, setModalScheduleDate] = useState(local_date);
  const [today, setToday] = useState(local_date);
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [dataPassed, setDataPassed] = useState(false);
  const [currentEvents, setCurrentEvents] = useState(INITIAL_EVENTS);
  useEffect(() => {
    async function PassEventData() {
      try {
        if (scheduleList.length) {
          setDataPassed(true);
          console.log("hihgjhfkfkfkugkgkjgkjgkjgkjgjk", scheduleList);
          scheduleList.map((schedule, index) => {
            console.log(
              "sadhjasgdijhasdlbkasjfdgoaghpondsaglgdsoigpsodhgosdnvsdhgipohsdpods"
            );
            currentScheduleList.push({
              id: schedule.id,
              title: schedule.content.title,
              start: "2021-07-26" + "T12:00:00",
              end: "2021-07-26" + "T15:00:00",
            });
          });
        }
        await setINITIAL_EVENTS(currentScheduleList);
      } catch (error) {
        console.log("INITIAL_EVENTS DATA error", error);
      }
    }
    PassEventData();
  }, [scheduleList]);
  console.log(INITIAL_EVENTS);
  // PassEventData();
  // console.log(currentScheduleList);

  // const state = {
  //   modal: false,
  //   caption: "",
  //   Info: { type: "schedule", content: {} },
  //   modalInputTitle: "",
  //   modalInputName2: "",
  //   modalScheduleStartTime: `${local_hour}:00`,
  //   modalScheduleEndTime: `${local_hour}:00`,
  //   modalContent: "",
  //   nowHour: `${local_hour}:00`,
  //   modalScheduleDate: local_date,
  //   today: local_date,
  //   weekendsVisible: true,
  //   currentEvents: [],
  // };

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setState({
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const title = modalInputTitle;
    // this.setState({ caption: title });
    setState({
      Info: { ...props.Info, content: { caption: title } },
    });
    modalClose();
    // console.log("close", state);
  };

  const modalOpen = () => {
    setModal(true);
  };

  const modalClose = () => {
    setModalInputTitle("");
    setModalScheduleStartTime(nowHour);
    setModalScheduleEndTime(nowHour);
    setModalContent("");
    setModalScheduleDate(today);
    setModal(false);
  };

  const postInfo = props.postInfo;

  //   handleWeekendsToggle = () => {
  //     this.setState({
  //       weekendsVisible: !this.state.weekendsVisible,
  //     });
  //   };

  const handleDateSelect = (selectInfo) => {
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

  const handleDisplay = (event) => {
    // console.log("target", document.get);
  };

  const handleEventClick = (clickInfo) => {
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

  const handleEvents = (events) => {
    setCurrentEvents({
      currentEvents: events,
    });
  };

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
            <ScheduleModal show={modal} handleClose={(e) => modalClose(e)}>
              <h2>Create a new schedule</h2>
              <div
                style={{
                  marginTop: "7px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <TextField
                  id="start"
                  name="start"
                  label="start time"
                  type="datetime-local"
                  // value={formik.values.start}
                  // onBlur={formik.handleBlur}
                  className={modalScheduleStartTime}
                  // onChange={formik.handleChange}
                  required
                />
                <TextField
                  id="end"
                  name="end"
                  label="end time"
                  type="datetime-local"
                  // value={formik.values.end}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  className={modalScheduleEndTime}
                  required
                />
              </div>
              <div className="form-group">
                <label>Schedule Title:</label>
                <input
                  type="text"
                  value={modalInputTitle}
                  name="modalInputTitle"
                  onChange={(e) => handleChange(e)}
                  className="form-control"
                  required
                />

                <textarea
                  value={modalContent}
                  name="modalContent"
                  id="modalContent"
                  onChange={(e) => handleChange(e)}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <button onClick={(e) => handleSubmit(e)} type="button">
                  Save
                </button>
              </div>
            </ScheduleModal>
          </div>

          {dataPassed ? (
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
              weekends={weekendsVisible}
              // alternatively, use the `events` setting to fetch from a feed
              initialEvents={INITIAL_EVENTS}
              // select={this.handleDateSelect}
              dateClick={(e) => modalOpen(e)}
              // dateClick={function (info) {
              //   alert("clicked " + info.dateStr);
              // }}
              eventContent={renderEventContent} // custom render function
              eventClick={handleEventClick}
              eventsSet={handleEvents} // called after events are initialized/added/changed/removed
              /* you can update a remote database when these fire:
                      eventAdd={function(){}}
                      eventChange={function(){}}
                      eventRemove={function(){}}
                      */
            />
          ) : null}
        </div>
      </div>

      <div className="col-3 px-0 schedule_detail">
        {scheduleList.map((Info) => {
          // console.log(Info);
          return (
            <ScheduleDetail
              className={Info.id}
              Info={Info}
              Id={Info.id}
              scheduleList={Info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SchedulePage;
