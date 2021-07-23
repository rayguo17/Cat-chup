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
  const Info = props.Info;
  return (
    <div>
      <Card body>
        <Row>
          <Col xs="3">
            <img
              src={Info.userInfo.userIcon_url}
              alt="icon"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <p className="username" style={{ width: "100px" }}>
              {Info.userInfo.userName}
            </p>
          </Col>
          <Col xs="9">
            <div>
              <div style={{ textAlign: "start" }}>
                <p className="time">
                  {Info.content.eventDateWeek} &nbsp;
                  {Info.content.eventDate}
                </p>
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
          {/* <div>
                  {Info.content.tags.map((tag, index) => (
                    <p className="event-tag">{tag}</p>
                  ))}
                </div> */}
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
    </div>
  );
};

export default EventCard;
