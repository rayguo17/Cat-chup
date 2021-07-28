import React from "react";
import {
  Row,
  Col,
  Card,
  CardTitle,
} from "reactstrap";
import MailIcon from "../img/mail-icon.png";

const EventCard = (props) => {
  const Info = props.Info;
  return (
    <div>
      <Card body style={{padding:"0px 10px", margin:"0px", border:"2px solid #79D7F6", backgroundColor:"#D4E9F0" }}>
        <Row>
       
          <Col xs="2">
          
            <img
              src={Info.userInfo.userIcon_url}
              alt="icon"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "10%",
                objectFit: "cover",
                marginTop:"10px"
              }}
            />
            <p className="username" style={{fontSize:"12px",fontWeight:"500",display:"flex", justifyContent:"space-between", width: "100px" }}>{Info.userInfo.userName}
            </p>
          </Col>
          <Col xs="10">
            <div>
              <div style={{fontSize:"12px",fontWeight:"500",display:"flex",justifyContent:"space-between", height:"14px"}}>
                <p className="time" style={{ marginLeft:"20px",justifyContent:"flex-start", display:"flex"}}>
                  {Info.content.eventDateWeek} &nbsp;
                   </p>
                  <p style={{marginBlockEnd:"auto",display:"flex",justifyContent:"flex-end",width:"100px" }}>{Info.content.eventDate}</p>
              </div>

              <div style={{display:"flex",justifyContent:"flex-end",height:"22px"}}
              >
                <p className="time"  style={{marginBlockEnd:"auto",display:"flex", justifyContent:"flex-end", width: "100px",fontSize:"12px",fontWeight:"500" }}>
                  {Info.content.startTime} ~{" "}
                  {Info.content.endTime != false && Info.content.endTime}
                </p>
              </div>



              <div style={{display:"flex",justifyContent:"space-between", textAlign: "center" }}>
          <CardTitle  style={{marginLeft:"14px"}} tag="h6">{Info.content.caption}</CardTitle>
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
                style={{ width: "20px", height: "20px",bottom:"5px" ,position:"relative" }}
              /> 
            </a>
          </div>
        </div>



            
            </div>
          </Col>
        </Row>
       
        <div style={{ display: "flex" }}>
          {/* <div>
                  {Info.content.tags.map((tag, index) => (
                    <p className="event-tag">{tag}</p>
                  ))}
                </div> */}
        
        </div>
      </Card>
    </div>
  );
};

export default EventCard;
