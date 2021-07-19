import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import MailIcon from "../img/mail-icon.png";

const EventPost = (props) => {
  const {
    id,
    userInfo,
    content,
    postTime,
    likeNumber,
    commentsNumber,
  } = props.postInfo;

  const changeToCommentPage = () => {
    window.location.href = "/comment";
  };

  return (
    <div className="eventcard-container" onClick={changeToCommentPage}>
      <Card>
        <img className="userIcon" src={userInfo.userIcon_url} alt="icon" />
        <span className="userName">
          <p> {userInfo.userName} </p>
        </span>
        <div className="mood"></div>
        <CardBody>
          <CardTitle tag="h5"> {content.caption} </CardTitle>
          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
        </CardBody>
        <CardBody>
          <div className="card-content">
            <CardText>{content.text}</CardText>
            <div className="event-info">
              <p>Date:</p>
              <input type="date" value={content.eventDate} disabled />
              <p>Time:</p>
              <input type="time" value={content.startTime} disabled />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "5px",
              }}
            >
              {content.tags.map((tag, index) => (
                <p className="event-tag">{tag}</p>
              ))}
            </div>
            {content.pictures.map((picture, index) => (
              <img width="100%" src={picture.data_url} alt="Card image cap" />
            ))}
          </div>
          <CardLink href="#">
            {" "}
            <img src={MailIcon} alt="mail-icon" />{" "}
          </CardLink>
          <p className="create-date"> {content.postTime} </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default EventPost;
