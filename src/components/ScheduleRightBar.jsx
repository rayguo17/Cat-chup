import "../stylesheet/scheduleArea.css";
import WeekIcon from "./WeekIcon";
import EventCard from "./EventCard";

const ScehduleRightBar = (props) => {
  const postInfo = props.postInfo;
  console.log(postInfo, "hihi");
  return (
    <div>
      <center>
        <div
          className="Schedule-header"
          style={{
            position: "sticky",
            top: "0",
            zIndex: "10",
            backgroundColor: "white",
          }}
        >
          <h3>Available Event</h3>
          <WeekIcon />
          <hr
            style={{
              height: 5,
            }}
          />
        </div>

        <div>
          {postInfo.map((Info, index) => {
            if (Info.type === "event") {
              return <EventCard postInfo={postInfo} />;
            }
          })}
        </div>
      </center>
    </div>
  );
};

export default ScehduleRightBar;
