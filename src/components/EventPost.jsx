import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import MailIcon from '../img/mail-icon.png'

const EventPost = (props) => {
  return (
    <div className="eventcard-container" >
      <Card>
      <img className="userIcon" src="https://image.flaticon.com/icons/png/512/146/146005.png" alt="icon" />
      <span className="userName"><p>Username</p></span>
      <div className="mood"></div>
        <CardBody>
          <CardTitle tag="h5">POST</CardTitle>
          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
        </CardBody>
        <CardBody>
          <div className="card-content">
            <CardText>Running in humans is associated with improved health and life expectancy.I plan to run every morning.Would you join me?</CardText>
            <img width="100%" src="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/1036780592-1280x720.jpg?itok=k4u7CDBb" alt="Card image cap" />
          </div>
          <div className="event-info">
            <p>Date:</p>
            <input type="date" value="2021-01-01" disabled />
            <p>Time:</p>
            <input type="time" value="11:00" disabled />
          </div>
          <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"5px"}}>
                    <p className="event-tag">#tag A</p>
                    <p className="event-tag">#tag B</p>
                    <p className="event-tag">#tag C</p>
          </div>
          <CardLink href="#"> <img src={MailIcon} alt="mail-icon" /> </CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default EventPost;