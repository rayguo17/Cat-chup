import { useState } from "react";
import { useEffect } from "react";
import {
    Card, CardImg, CardText, CardBody, Button,
    Container, Row, Col
} from 'reactstrap';

import '../../stylesheet/friendsPage.css'
import DeleteFriend from "./DeleteFriend";
import { FriendCard } from "./FriendCard";
import FriendSearchBar from "./FriendSearchBar";





const FriendsArea = (props) => {


    const [modal, setModal] = useState(false);

    const toggle = (e) => {
        
        setModal(!modal)
    };
    const deleteBtnToggle = (e)=>{
        toggle();
        console.log('trigger',e.target.getAttribute('name'));
        setOnDeleteUser(e.target.getAttribute('name'));
    }

    const { friendsList, activeTab } = props
    //console.log('friendsList', friendsList);
    const [localFriendsList, setLocalFriendsList] = useState(friendsList);
    const [onDeleteUser,setOnDeleteUser] = useState(null);
    useEffect(() => {
        //console.log(friendsList);
        setLocalFriendsList(friendsList);

    }, [friendsList])
    return (
        <div className="FriendsContentContainer">
            <Container>
                <Row className="mx-0">
                    <center>
                        <FriendSearchBar />
                    </center>

                    <DeleteFriend toggle={toggle} modal={modal}
                        username={onDeleteUser}
                    />
                    {
                        localFriendsList[activeTab] ? localFriendsList[activeTab].map((friend, index) => {
                            return (
                                // <Col xs="6">


                                //     <Card className="friendsAreaComponent">

                                //         <CardBody className="friendCardBody">
                                //             <CardImg top width="100%" src="../assets/318x180.svg" alt="Card image cap" />
                                //             < CardText>{localFriendsList[activeTab][index]}</CardText>
                                //             <button className="deleteFriendBtn" onClick={toggle}></button>


                                //         </CardBody>
                                //     </Card>
                                // </Col>
                                <FriendCard
                                    username={friend}
                                    key={friend}
                                    toggle={deleteBtnToggle}
                                />

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
            <div ><p>FriendsArea</p></div>
            <div ><p>FriendsArea</p></div>
            <div ><p>FriendsArea</p></div>
            <div ><p>FriendsArea</p></div>
            <div ><p>FriendsArea</p></div>
            <div ><p>FriendsArea</p></div>





        </div >)
}


export default FriendsArea;