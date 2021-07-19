import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardTitle,
  CardText,
} from "reactstrap";
import MailIcon from "../img/mail-icon.png";

const EventCard = (props) => {
  const postInfo = props.postInfo;
  console.log(postInfo, "hi");
  console.log(postInfo.content, "gi");
  return (
    <div>
      {postInfo.map((Info, index) => {
        if (Info.type === "event") {
          return (
            <Card body>
              <Row>
                <Col xs="3">
                  <img
                    src="https://image.flaticon.com/icons/png/512/146/146005.png"
                    alt="icon"
                    style={{ width: "50px", height: "50px" }}
                  />
                </Col>
                <Col xs="9">
                  <div>
                    <div style={{ textAlign: "start" }}>
                      <p className="time">{Info.content.eventDate}</p>
                    </div>
                    <div style={{ textAlign: "end" }}>
                      <p className="time">
                        {Info.content.startTime} ~{" "}
                        {Info.content.endTime != false && Info.content.endTime}
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <div style={{ textAlign: "left" }}>
                <CardTitle tag="h6">{Info.content.caption}</CardTitle>
              </div>
              <div style={{ display: "flex" }}>
                <div
                // style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  {Info.content.tags.map((tag, index) => (
                    <p className="event-tag">{tag}</p>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <a href="#">
                    <img
                      src={MailIcon}
                      alt="mail-icon"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </a>
                </div>
              </div>
            </Card>
          );
        }
      })}
    </div>
  );
};

export default EventCard;
