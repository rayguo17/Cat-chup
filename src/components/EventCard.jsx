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
                  <div style={{ textAlign: "end" }}>
                    <p className="time">{Info.content.startTime}</p>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <CardTitle tag="h6">{Info.content.caption}</CardTitle>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    {/* {postInfo.map((Info, index) => {
                  Info.content.tags.map((tag, index) => (
                    <p className="event-tag">{tag}</p>
                  ));
                })} */}
                  </div>
                  <div style={{ float: "right" }}>
                    <a href="#">
                      <img
                        src={MailIcon}
                        alt="mail-icon"
                        style={{ width: "20px", height: "20px" }}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
            </Card>
          );
        }
      })}
    </div>
  );
};

export default EventCard;
