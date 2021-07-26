import "../stylesheet/scheduleArea.css";
import WeekIcon from "./WeekIcon";
import EventCard from "./EventCard";
import { MyscheduleButton } from "./ScheduleComponents/MyScheduleButton";

const ScehduleRightBarPerosnal = (props) => {
  const postInfo = props.postInfo;
  // console.log(postInfo, "hihi");
  return (
    <div>
      <center>
        <div
          // className="Schedule-header"
          style={{
            position: "sticky",
            top: "0",
            zIndex: "10",
            backgroundColor: "white",
          }}
        >
          <MyscheduleButton />
          <WeekIcon />
          <hr
            style={{
              height: 5,
            }}
          />
        </div>

        <div>
          {/* {postInfo.map((Info, index) => {
            if (Info.type === "event") {
              return <EventCard Info={Info} />;
            }
          })} */}
        </div>
      </center>
    </div>
  );
};

export default ScehduleRightBarPerosnal;
