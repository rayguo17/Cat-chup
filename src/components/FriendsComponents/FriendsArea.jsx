import { useState } from "react";
import { useEffect } from "react";
import {
    Card, CardImg, CardText, CardBody, Button,
    Container, Row, Col
} from 'reactstrap';

import '../../stylesheet/friendsPage.css'
import DeleteFriend from "./DeleteFriend";
import FriendSearchBar from "./FriendSearchBar";





const FriendsArea = (props) => {


    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const { friendsList, activeTab } = props
    console.log('friendsList', friendsList);
    const [localFriendsList, setLocalFriendsList] = useState(friendsList);

    useEffect(() => {
        console.log(friendsList);
        setLocalFriendsList(friendsList);

    }, [friendsList])
    return (
        <div className="FriendsContentContainer">
            <Container>
                <Row className="mx-0">
                    <center>
                        <FriendSearchBar />
                    </center>

                    <DeleteFriend className="deleteFriendBtn" toggle={toggle} modal={modal} />
                    {
                        localFriendsList[activeTab] ? localFriendsList[activeTab].map((friends, index) => {
                            return (
                                <Col xs="6">


                                    <Card className="friendsAreaComponent">

                                        <CardBody className="friendCardBody">
                                            <CardImg top width="100%" src="../assets/318x180.svg" alt="Card image cap" />
                                            < CardText>{localFriendsList[activeTab][index]}</CardText>
                                            <button className="deleteFriendBtn" onClick={toggle}></button>


                                        </CardBody>
                                    </Card>
                                </Col>

                            )
                        }) : null


                    }
                </Row>
            </Container >




            <div ><p>{activeTab}</p></div>
            <div ><p>FriendsArea</p></div>
            <div ><p>FriendsArea</p></div>
            <div ><p>FriendsArea</p></div>
            <div ><p>FriendsArea</p></div>
            <div ><p>FriendsArea</p></div>
            <div ><p>FriendsArea</p></div>
            <div ><p>FriendsArea</p></div>
            <div ><p>FriendsArea</p></div>
            <div ><p>FriendsArea</p></div>





        </div >)
}


export default FriendsArea;