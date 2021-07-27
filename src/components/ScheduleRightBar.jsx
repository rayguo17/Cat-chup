import "../stylesheet/scheduleArea.css";
import WeekIcon from "./WeekIcon";
import EventCard from "./EventCard";
import { useSelector } from "react-redux";
import EventCardSchedule from "./PostComponents/EventCardSchedule";

const ScehduleRightBar = (props) => {
  const postListStore = useSelector((state) => state.postListStore);
  const postList = postListStore.postList;
  const username = props.username;
  const postInfo = props.postInfo;
  // console.log(postInfo, "hihi");
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
          {/* <WeekIcon /> */}
          <hr
            style={{
              height: 5,
            }}
          />
        </div>

        <div>
          {postList.map((event, index) => {
            if (event.type === "event" && username !== event.owner_name) {
              return <EventCardSchedule Info={event} key={event.id} />;
            }
          })}
        </div>
      </center>
    </div>
  );
};

export default ScehduleRightBar;
