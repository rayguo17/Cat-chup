// import SideBar from "../components/SideBar";
// import { Container, Row, Col } from 'reactstrap';

import FriendsHeader from "../components/FriendsComponents/FriendsHeader";
import "../stylesheet/navBar.css";
import "../stylesheet/friendsPage.css";
import { useState } from "react";
import FriendsArea from "../components/FriendsComponents/FriendsArea";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ScheduleRightBar from "../components/ScheduleRightBar";
import "../stylesheet/homePage.css";
import NoFriendsPlaceholder from "../components/FriendsComponents/NoFriendsPlaceholder";

const FriendsPage = (props) => {
  const postInfo = props.postInfo;
  const username = props.username;
  const [activeTab, setActiveTab] = useState("All Friends");
  const friendListStore = useSelector((state) => state.friendListStore);
  const [friendsList, setFriendsList] = useState({});
  // const [friendLength, setFriendLength] = useState(Object.values(friendListStore.friendList)[0].length)
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    // let dummyFriends={
    //     "All Friends":[1,2,3,4],
    //     "Family":[4,6,3,9],
    //     "Work":[5,2,4],
    //     "School":[3,2,45,45],
    //     "Close Friends":[1,33,45,42,34],
    // }
    let friendList = friendListStore.friendList;
    setFriendsList(friendList);
    let key = Object.keys(friendList);
    // let value = Object.values(friendList)[0].length;
    // // console.log('friends', friendList);
    // console.log("this is friendlist**********************",value)
    setActiveTab(key[0]);
  }, [friendListStore]);

  const friendLength = Object.values(friendListStore.friendList)[0].length;

  return (
    <div className="col-9 px-0 row mx-0 " style={{ overflow: "hidden" }}>
      {friendLength > 0 ? (
        <div
          style={{ backgroundColor: "#dfdfdf", maxHeight: "100vh" }}
          className="col-9 px-0 friends-page Scrolllable"
        >
          <FriendsHeader
            toggle={toggle}
            activeTab={activeTab}
            friendsList={friendsList}
          />
          <FriendsArea
            activeTab={activeTab}
            friendsList={friendsList}
            style={{ backgroundColor: "grey" }}
          />
        </div>
      ) : (
        <div
          style={{ backgroundColor: "#dfdfdf", maxHeight: "100vh" }}
          className="col-9 px-0 friends-page Scrolllable"
        >
          <FriendsHeader
            toggle={toggle}
            activeTab={activeTab}
            friendsList={friendsList}
          />

          <NoFriendsPlaceholder />
        </div>
      )}

      <div className="col-3 px-0 schedule-page" style={{ maxHeight: "100vh" }}>
        <ScheduleRightBar postInfo={postInfo} username={username} />
      </div>
    </div>
  );
};

export default FriendsPage;
