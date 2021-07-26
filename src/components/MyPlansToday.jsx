import PlanTodayLabel from "./PlanTodayLabel";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const MyPlansToday = (props) => {
  const postListStore = useSelector((state) => state.postListStore);
  const postList = postListStore.postList;
  const postInfo = props.postInfo;
  const today = new Date();
  console.log("today", today);
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

  // console.log("today_date", today_date);

  const routeChange = () => {
    // let path = "/schedule";
    // const history = useHistory();
    // history.pushState(path);
    window.location.href = "/schedule";
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
        <div className="plansTodayBox">
          {postList.map((event, index) => {
            console.log(
              new Date(Date(event.content.start)).toISOString().slice(0, -14)
            );
            if (
              (event.type === "event" || event.type === "schedule") &&
              new Date(Date(event.content.start))
                .toISOString()
                .slice(0, -14) === today_date
            ) {
              return <PlanTodayLabel Info={event} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default MyPlansToday;
