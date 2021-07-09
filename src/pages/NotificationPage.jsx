
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
        <div className="col-9 px-0 mx-0 row">
            <div className="col-3 px-0">
                <NotificationHeader />
                <NotificationBody />
            </div>

        </div>
    )
}


export default NotificationPage;