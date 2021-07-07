
import SideBar from "../components/SideBar";
import { Container, Row, Col } from 'reactstrap';

import FriendsHeader from "../components/FriendsComponents/FriendsHeader"
import ScehduleRightBar from "../components/ScehduleRightBar"
import '../stylesheet/navBar.css'
import '../stylesheet/friendsPage.css'
import { useState } from "react";
import FriendsArea from "../components/FriendsComponents/FriendsArea";
import { useEffect } from "react";



const FriendsPage = () => {

    const [activeTab, setActiveTab] = useState('All Friends');
    const [friendsList,setFriendsList] = useState({});
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    useEffect(()=>{
        let dummyFriends={
            "All Friends":[1,2,3,4],
            "Family":[4,6,3,9],
            "Work":[5,2,4],
            "School":[3,2,45,45],
            "Close Friends":[1,33,45,42,34],
        }
        setFriendsList(dummyFriends);
        let key = Object.keys(dummyFriends);
        console.log('friends',key);
        setActiveTab(key[0]);
    },[])
    return (
        <center>
            <Container className="containerSize">
                <Row className="mx-0">
                    <Col className="left-col px-0" xs="3"></Col>
                    <Col className="px-0" xs="5" style={{ backgroundColor: 'grey' }}>
                        <FriendsHeader 
                            toggle={toggle}
                            activeTab={activeTab}
                            friendsList={friendsList}
                        />
                        <FriendsArea
                            activeTab={activeTab}
                            friendsList={friendsList}
                        style={{ backgroundColor: 'grey' }} />
                        </Col>
                    <Col className="px-0" xs="3"><ScehduleRightBar /></Col>
                </Row>
            </Container>
        </center>
    )
}


export default FriendsPage;