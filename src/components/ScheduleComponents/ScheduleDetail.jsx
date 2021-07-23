import "../../stylesheet/schedulePage.css";
import Button from '@material-ui/core/Button';
import React, {useState} from "react"


const ScheduleDetail = (props) => {
  console.log("SceduleDetail props", props.postInfo[6]);

  //this props.postInfo[6] will change depending on data..example....props.postInfo[selected  schedule/event id]
  const selected = props.postInfo[6];
  

  console.log("SceduleDetail pic", selected.content.pictures[0].data_url);
  const [selectedDate, setSelectedDate] = useState(selected.content.eventDate);
  const [selectedText, setSelectedText] = useState(selected.content.text);
  const [selectedStartTime, setselectedStartTime] = useState(selected.content.startTime);
  const [selectedEndTime, setselectedEndTime] = useState(selected.content.endTime);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //gets the input data here
    console.log("selected date",selectedDate)
    console.log("selected text",selectedText)
    console.log("selected StartTime",selectedStartTime)
    console.log("selected endtime",selectedEndTime)
    
  }

  return (
    <form onSubmit={handleSubmit}>
    
    <div>
      <div style={{ fontSize: "32px", backgroundColor: "#96d9ff" }}>
        {selected.content.caption}
      </div>

      
      {/* //if event conditional render */}
      {/* //Event */}
      {/* //Schedule */}

      {selected.type === "Event" ? (
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "black", backgroundColor: "grey" }}>
            Event by {selected.userInfo.userName}
          </p>
          <div>
            <img
              style={{ width: "80%" }}
              src={selected.content.pictures[0].data_url}
              alt="pic"
            ></img>
          </div>
        </div>
      ) : null}

      <div
        style={{ textAlign: "start", paddingLeft: "15px", paddingTop: "10px" }}
      >
        {" "}
        {selected.content.eventDateWeek}
      </div>

      <div
        style={{ textAlign: "start", paddingLeft: "15px", paddingTop: "2px" }}
      >
        date: <input required type="date" onChange={(e)=>{setSelectedDate(e.target.value)}} value={selectedDate}></input>
      </div>
      <div
        style={{ textAlign: "start", paddingLeft: "15px", paddingTop: "2px" }}
      >
        time: <input required type="time" value={selectedStartTime} onChange={(e)=>{setselectedStartTime(e.target.value)}}></input>-
        <input required type="time" value={selectedEndTime} onChange={(e)=>{setselectedEndTime(e.target.value)}}></input>
      </div>
      <div
        style={{ textAlign: "start", marginTop: "30px", paddingLeft: "15px" }}
      ><textarea required onChange={(e)=> setSelectedText(e.target.value)} value={selectedText} style={{resize:"none", height:"35vh", width:"100%"}}>
        </textarea>
      </div>
      <p>{selectedText}</p>
     <div style={{display:"flex", width:"80%", justifyContent:"space-between"}}> 
      <Button variant="contained" color="primary" type="submit">Save</Button>
      <Button variant="contained" color="secondary">Delete</Button>
      </div>
    </div>
    </form>
  );
};

export default ScheduleDetail;
