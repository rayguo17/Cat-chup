import "../stylesheet/scheduleArea.css";
import 'bootstrap/dist/css/bootstrap.min.css'


import { MyscheduleButton } from "./ScheduleComponents/MyScheduleButton";
import { useSelector } from "react-redux";
import MyEventCardSchedule from "./PostComponents/MyEventCardSchedule";

const ScehduleRightBarPerosnal = (props) => {
  const scheduleListStore = useSelector((state) => state.scheduleListStore);
  const scheduleList = scheduleListStore.scheduleList;
  // console.log(postInfo, "hihi");
  //console.log("name", username);
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
            //console.log('event card',event);
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
