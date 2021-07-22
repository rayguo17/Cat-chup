import "../../stylesheet/schedulePage.css";
import Button from '@material-ui/core/Button';


const ScheduleDetail = (props) => {
  console.log("SceduleDetail props", props.postInfo[6]);

  //this props.postInfo[6] will change depending on data..example....props.postInfo[selected  schedule/event id]
  const selected = props.postInfo[6];

  console.log("SceduleDetail pic", selected.content.pictures[0].data_url);

  return (
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
        date: <input type="date" value={selected.content.eventDate}></input>
      </div>
      <div
        style={{ textAlign: "start", paddingLeft: "15px", paddingTop: "2px" }}
      >
        time: <input type="time" value={selected.content.startTime}></input>-
        <input type="time" value={selected.content.endTime}></input>
      </div>
      <div
        style={{ textAlign: "start", marginTop: "30px", paddingLeft: "15px" }}
      ><textarea style={{resize:"none", height:"35vh", width:"100%"}}>
        {selected.content.text}</textarea>
      </div>
     <div style={{display:"flex", width:"80%", justifyContent:"space-between"}}> 
      <Button variant="contained" color="primary" type="submit">Save</Button>
      <Button variant="contained" color="secondary">Delete</Button>
      </div>
    </div>
  );
};

export default ScheduleDetail;
