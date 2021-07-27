import "../stylesheet/scheduleArea.css";
import WeekIcon from "./WeekIcon";
import EventCard from "./EventCard";
import { useSelector } from "react-redux";
import EventCardSchedule from "./PostComponents/EventCardSchedule";

const ScehduleRightBar = (props) => {
  const scheduleListStore = useSelector((state) => state.scheduleListStore);
  const scheduleList = scheduleListStore.scheduleList;
  const username = props.username;
  const postInfo = props.postInfo;
  console.log(scheduleList, "this is scedule list");
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
          {scheduleList.map((event, index) => {
            if (
              event.type === "event" &&
              username !== event.creator &&
              (new Date(event.start) > new Date() ||
                new Date(event.start) == new Date())
            ) {
              return <EventCardSchedule Info={event} key={event.id} />;
            }
          })}
        </div>
      </center>
    </div>
  );
};

export default ScehduleRightBar;
