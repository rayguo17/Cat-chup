import { useState } from "react";
import { useEffect } from "react";
import {
    Card, CardImg, CardText, CardBody, Button,
    Container, Row, Col
} from 'reactstrap';

import '../../stylesheet/friendsPage.css'
import DeleteFriendModal from "./DeleteFriendModal";
import FriendSearchBar from "./FriendSearchBar";
import EditFriendGroup from "./EditFriendGroup";
import BackToTopButton from "../BackToTopButton";






const FriendsArea = (props) => {


    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const { friendsList, activeTab, index } = props
    console.log("Friends List from active tab:", friendsList[activeTab])
    console.log('friendsList from friends area', friendsList, "active tab", activeTab, index);
    const [localFriendsList, setLocalFriendsList] = useState(friendsList);
    const [searchResult, setSearchResult] = useState("");
    console.log("SEARCH RESULT:", typeof searchResult)

    useEffect(() => {
        // console.log("useEffect FriendsList from friendsArea", friendsList);
        setLocalFriendsList(friendsList);

    }, [friendsList])


    return (
        <div className="FriendsContentContainer">
            <Container>
                <Row className="mx-0">

                    <center className="friendAreaTopSection">
                        <FriendSearchBar searched={(value) => setSearchResult(value)} localFriendsList={localFriendsList[activeTab]} />

                        {activeTab !== "All Friends" &&
                            <EditFriendGroup activeTab={activeTab} friendsList={friendsList} />}

                    </center>


                    <DeleteFriendModal className="deleteFriendBtn" toggle={toggle} modal={modal} friendsList={friendsList} />
                    {
                        searchResult === "" || searchResult.length === 0 ? localFriendsList[activeTab] && localFriendsList[activeTab].map((friends, index) => {
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
                        }) : (
                            <Col xs="6">


                                <Card className="friendsAreaComponent">

                                    <CardBody className="friendCardBody">
                                        <CardImg top width="100%" src="../assets/318x180.svg" alt="Card image cap" />
                                        < CardText>{searchResult}</CardText>
                                        <button className="deleteFriendBtn" onClick={toggle}></button>


                                    </CardBody>
                                </Card>
                            </Col>

                        )


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



            <BackToTopButton />





        </div >)
}


export default FriendsArea;