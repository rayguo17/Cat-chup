
import SideBar from "../components/SideBar";
import { Container, Row, Col } from 'reactstrap';
import NotificationHeader from "../components/NotificationComponents/NotificationHeader";


import ScehduleRightBar from "../components/ScehduleRightBar"
import '../stylesheet/navBar.css'
import '../stylesheet/notificationPage.css'
import NotificationDetailsHeader from "../components/NotificationComponents/NotificationDetailsHeader";
import NotificationBody from "../components/NotificationComponents/NotificationBody";
import { useState } from "react";
// import FriendsArea from "../components/FriendsComponents/FriendsArea";
// import { useEffect } from "react";



const NotificationPage = () => {

    return (
        <center>
            <Container className="containerSize">
                <Row className="mx-0">
                    <Col className="left-col" xs="3"><SideBar /></Col>
                    <Col className="px-0" xs="3">
                        <NotificationHeader />
                        <NotificationBody />
                    </Col>
                    <Col className="px-0 notificationDetailMainContainer" xs="5"><NotificationDetailsHeader /></Col>
                </Row>
            </Container>
        </center>
    )
}


export default NotificationPage;