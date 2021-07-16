import "../stylesheet/scheduleArea.css";
import WeekIcon from "./WeekIcon";
import EventCard from "./EventCard";

const ScehduleRightBar = (props) => {
  const postInfo = props.postInfo;
  console.log(postInfo, "hihi");
  return (
    <div style={{ position: "fixed" }}>
      <center>
        <div className="Schedule-header">
          <h3>Available Event</h3>
          <WeekIcon />
          <hr
            style={{
              height: 5,
            }}
          />
        </div>
        {/* {postInfo.map((Info, index) => {
          Info.type == "event" && <EventCard postInfo={postInfo} />;
        })} */}
        {postInfo.map((Info, index) => {
          if (Info.type === "event") {
            return <EventCard postInfo={postInfo} />;
          }
        })}
      </center>
    </div>
  );
};

export default ScehduleRightBar;
