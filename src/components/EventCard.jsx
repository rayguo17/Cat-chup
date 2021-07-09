import React from 'react';
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';
import MailIcon from '../img/mail-icon.png'

const EventCard = (props) => {
  return (
    <div>
      <Card body>
          <Row>
              <Col xs="3">
              <img src="https://image.flaticon.com/icons/png/512/146/146005.png" alt="icon" style={{width:"50px", height:"50px"}}/>
              </Col>
              <Col xs="9">
                <div style={{textAlign:"end"}}>
                <p className="time" >Time</p>
                </div>
                <div style={{textAlign:"center"}}>
                  <CardTitle tag="h6">Special Title Treatment</CardTitle>
                </div>
                <div style={{display:"flex",justifyContent:"space-evenly"}}>
                    <p className="">tag A</p>
                    <p className="">tag B</p>
                    <p className="">tag C</p>
                </div>
                <div style={{float:"right"}}>
                    <a href="#">
                        <img src={MailIcon} alt="mail-icon" style={{width:"20px", height:"20px"}}/>  
                    </a>
                </div>
               
              </Col>
          </Row>

      </Card>
    </div>
  );
};

export default EventCard;