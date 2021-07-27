import PlanTodayLabel from "./PlanTodayLabel";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const MyPlansToday = (props) => {
  const scheduleListStore = useSelector((state) => state.scheduleListStore);
  const username = props.username;
  const scheduleList = scheduleListStore.scheduleList;
  const postInfo = props.postInfo;
  const history = useHistory();
  const today = new Date();
  //console.log("today", today);
  
  const today_year = today.getFullYear();
  const today_month = today.getMonth();
  const today_day = today.getDate();
  var today_date;
  if (today_month < 10) {
    if (today_day < 10) {
      today_date = `${today_year}-0${today_month + 1}-0${today_day}`;
    } else {
      today_date = `${today_year}-0${today_month + 1}-${today_day}`;
    }
  } else {
    today_date = `${today_year}-${today_month + 1}-${today_day}`;
  }

  console.log("today_date", today_date);

  const routeChange = () => {
    // let path = "/schedule";
    // const history = useHistory();
    // history.pushState(path);
    history.push("/schedule");
    //window.location.href = "/schedule";
  };

  return (
    <div className="plansTodaySection">
      <p className="myPlansTodayText"> My plans today </p>
      <div
        className="plansTodayContainer"
        onClick={routeChange}
        style={{ cursor: "pointer" }}
      >
        {/* <span placeholder="todays plans">todays plans</span> */}
        <div
          className="plansTodayBox "
          style={{
            borderRadius: "0.2rem",
            overflow: "scroll",
            overflowX: "hidden",
          }}
        >
          {scheduleList.map((event, index) => {
            let startTime = new Date(event.start);
            startTime.setHours(startTime.getHours()+8);
            console.log(
              'plan label',startTime.toISOString()
            ,startTime.toISOString().slice(0, -14) ===
            today_date);
            if (
              props.username === event.executor &&
              (event.type === "event" || event.type === "schedule") &&
              startTime.toISOString().slice(0, -14) ===
                today_date
            ) {
              return <PlanTodayLabel Info={event} 
                  key={event.id}/>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default MyPlansToday;
