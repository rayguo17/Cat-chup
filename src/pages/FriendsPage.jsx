
// import SideBar from "../components/SideBar";
// import { Container, Row, Col } from 'reactstrap';

import FriendsHeader from "../components/FriendsComponents/FriendsHeader"
// import ScehduleRightBar from "../components/ScehduleRightBar"
import '../stylesheet/navBar.css'
import '../stylesheet/friendsPage.css'
import { useState } from "react";
import FriendsArea from "../components/FriendsComponents/FriendsArea";
import { useEffect } from "react";
import { useSelector } from "react-redux";



const FriendsPage = () => {

    const [activeTab, setActiveTab] = useState('All Friends');
    const friendListStore = useSelector(state => state.friendListStore);
    const [friendsList, setFriendsList] = useState({});
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    useEffect(() => {
        // let dummyFriends={
        //     "All Friends":[1,2,3,4],
        //     "Family":[4,6,3,9],
        //     "Work":[5,2,4],
        //     "School":[3,2,45,45],
        //     "Close Friends":[1,33,45,42,34],
        // }
        let friendList = friendListStore.friendList
        setFriendsList(friendList);
        let key = Object.keys(friendList);
        console.log('friends', key);
        setActiveTab(key[0]);
    }, [friendListStore])
    return (
        <div className='col-9 px-0 row mx-0'>
            <div className='col-6 px-0'>
                <FriendsHeader
                    toggle={toggle}
                    activeTab={activeTab}
                    friendsList={friendsList}
                />
                <FriendsArea
                    activeTab={activeTab}
                    friendsList={friendsList}
                    style={{ backgroundColor: 'grey' }} />
            </div>
            <div className='col-3 px-0' style={{ backgroundColor: 'red' }}>
                schedule at right
            </div>

        </div>
    )
}


export default FriendsPage;

