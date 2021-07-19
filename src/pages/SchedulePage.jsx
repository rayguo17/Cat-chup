import { Container, Row, Col } from "reactstrap";
import WeekIcon from "../components/WeekIcon";

const SchedulePage = (props) => {
  const postInfo = props.postInfo;

  return (
    <div className="col-9 px-0 mx-0 row">
      <div className="col-9 px-0">
        <div>
          <div
            className="myschedule-header"
            style={{ backgroundColor: "aquamarine", marginBottom: "10px" }}
          >
            <span style={{ fontSize: "50px" }}>Schedule</span>
          </div>
          <WeekIcon />
          <div
            className="myschedule-body"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              padding: "10px 0",
              margin: "20px 0",
            }}
          >
            <div className="">
              <button>left</button>
              <button>right</button>
              <button>today</button>
            </div>
            <div className="">{"Jun 27 - Jul 3,2021"}</div>
            <div className="">
              <button>month</button>
              <button>week</button>
              <button>day</button>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px 0",
            }}
          >
            <p>Sunday</p>
            <p>June 27,2021</p>
          </div>

          <div
            style={{
              display: "flex",
              margin: "10px 0",
            }}
          >
            <div
              style={{ width: "20%,", textAlign: "start", marginLeft: "10px" }}
            >
              {"07:00am ~ 07:00pm"}
            </div>
            <div
              style={{ width: "80%", textAlign: "start", marginLeft: "30px" }}
            >
              {"Running in the morning"}
              <button style={{ float: "right" }} onclick={{}}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-3 px-0">
        <div style={{ fontSize: "50px", backgroundColor: "antiquewhite" }}>
          Details
        </div>
        <div style={{ textAlign: "center", backgroundColor: "grey" }}>
          {"Running in the morning"}
        </div>
        <div>
          <div style={{ textAlign: "start" }}>{"Date:2021-07-01"}</div>
          <div style={{ textAlign: "start" }}>{"Time: 07:00am ~ 07:00pm"}</div>
          <div style={{ textAlign: "start", marginTop: "30px" }}>
            {
              "Running in humans is associated with improved health and life expectancy.I plan to run every morning.Would you join me?"
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
