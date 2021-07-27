import "../../stylesheet/schedulePage.css";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import { Info } from "@material-ui/icons";
import { useEffect } from "react";
import { ThemeProvider, TextareaAutosize, TextField } from "@material-ui/core";

const ScheduleDetail = (props) => {
  // console.log("SceduleDetail props", props.postInfo[6]);

  //this props.postInfo[6] will change depending on data..example....props.postInfo[selected  schedule/event id]
  const selected = props.scheduleList;
  const schedule = props.scheduleList;
  // console.log("selected,", selected);

  // console.log("SceduleDetail pic", selected.content.pictures[0].data_url);
  const [selectedDate, setSelectedDate] = useState(selected.content.eventDate);
  const [selectedText, setSelectedText] = useState(selected.content.caption);
  const [selectedStartTime, setselectedStartTime] = useState(
    new Date(Date(selected.content.start)).toISOString().slice(0, -5)
  );
  const [selectedEndTime, setselectedEndTime] = useState(
    new Date(Date(selected.content.end)).toISOString().slice(0, -5)
  );
  const [scheduleList, SetScheduleList] = useState([]);

  useEffect(() => {
    const scheduleData = [
      {
        type: "schedule",
      },
    ];
    // this moment : scheduleList = []
    SetScheduleList(scheduleData);
    // this moment : scheduleList = [{type:'schedule'}]
  }, []);

  const handleChange = (e) => {
    if (e.target.name == "start") {
      console.log(e.target);
      setselectedStartTime(e.target.value);
    }
    if (e.target.name == "end") {
      console.log(e.target);
      setselectedEndTime(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newSchedule = {};
    SetScheduleList([...scheduleList, newSchedule]);
    // => [{type:'schedule'}, {}, {}]

    //gets the input data here
    // console.log("selected date",selectedDate)
    // console.log("selected text",selectedText)
    // console.log("selected StartTime",selectedStartTime)
    // console.log("selected endtime",selectedEndTime)
  };
  console.log(schedule);
  // console.log(selected.content.pictures);
  console.log(new Date(schedule.end).toLocaleString().slice(0, -10));
  return (
    <div
      className={
        "postId" +
        selected.id +
        " " +
        "schedule_detail_box" +
        " " +
        "display-none"
      }
    >
      <form onSubmit={handleSubmit}>
        <div>
          <div style={{ fontSize: "32px", backgroundColor: "#96d9ff" }}>
            {props.schedule.content.title}
          </div>

          {/* //if event conditional render */}
          {/* //Event */}
          {/* //Schedule */}

          {selected.type === "event" ? (
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "black", backgroundColor: "grey" }}>
                Event by {selected.creator}
              </p>
              <div>
                {/* <img
                  style={{ width: "80%" }}
                  src={selected.content.pictures[0].data_url}
                  alt="pic"
                ></img> */}
              </div>
            </div>
          ) : null}

          <div
            style={{
              textAlign: "start",
              paddingLeft: "15px",
              paddingTop: "10px",
            }}
          >
            {" "}
            {/* {selected.content.eventDateWeek} */}
          </div>

          <TextField
            id="start"
            name="start"
            label="start time"
            type="datetime-local"
            value={selectedStartTime}
            // onBlur={formik.handleBlur}
            // className={classes.textField}
            onChange={handleChange}
          />
          <TextField
            id="end"
            name="end"
            label="end time"
            type="datetime-local"
            value={selectedEndTime}
            onChange={handleChange}
            // onBlur={formik.handleBlur}
            // className={classes.textField}
          />
          <div
            style={{
              textAlign: "start",
              marginTop: "30px",
              paddingLeft: "15px",
            }}
          >
            <textarea
              required
              onChange={(e) => setSelectedText(e.target.value)}
              value={selectedText}
              style={{ resize: "none", height: "35vh", width: "100%" }}
            ></textarea>
          </div>
          {/* <p>{selectedText}</p> */}
          <div
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "space-between",
            }}
          >
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
            <Button variant="contained" color="secondary">
              Delete
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ScheduleDetail;
