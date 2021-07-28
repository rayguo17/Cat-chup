import "../stylesheet/scheduleArea.css";
import { useSelector } from "react-redux";
import EventCardSchedule from "./PostComponents/EventCardSchedule";

const ScehduleRightBar = (props) => {
  const postListStore = useSelector((state) => state.postListStore);
  const username = props.username;
  const postList = postListStore.postList;
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
            if (
              event.type === "event" &&
              username !== event.username &&
              (new Date(event.content.start) > new Date() ||
                new Date(event.content.start) == new Date())
            ) {
              return <EventCardSchedule Info={event} key={event.id} />;
            }
            // return <EventCardSchedule Info={event} key={event.id} />;
          })}
        </div>
      </center>
    </div>
  );
};

export default ScehduleRightBar;
