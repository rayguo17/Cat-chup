import "../stylesheet/scheduleArea.css";
import WeekIcon from "./WeekIcon";
import EventCard from "./EventCard";
import { MyscheduleButton } from "./ScheduleComponents/MyScheduleButton";
import { useSelector } from "react-redux";
import MyEventCardSchedule from "./PostComponents/MyEventCardSchedule";

const ScehduleRightBarPerosnal = (props) => {
  const postInfo = props.postInfo;
  const scheduleListStore = useSelector((state) => state.scheduleListStore);
  const scheduleList = scheduleListStore.scheduleList;
  const username = props.username;
  // console.log(postInfo, "hihi");
  console.log("name", username);
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
          {/* <WeekIcon /> */}
          <hr
            style={{
              height: 5,
            }}
          />
        </div>

        <div>
          {scheduleList.map((event, index) => {
            console.log('event card',event);
            if (
              
              (new Date(event.start) > new Date() ||
                new Date(event.start) == new Date())
            ) {
              return <MyEventCardSchedule Info={event} key={event.id} />;
            }
          })}
        </div>
      </center>
    </div>
  );
};

export default ScehduleRightBarPerosnal;
