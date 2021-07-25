import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { PersonalProfile } from "../components/profile/PersonalProfile";
import jwtDecode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import ScehduleRightBar from "../components/ScheduleRightBar";
import WeekIcon from "../components/WeekIcon";
import ProfilePost from "../components/profile/ProfilePost";
import { MyscheduleButton } from "../components/ScheduleComponents/MyScheduleButton";
import { NotFriendBlackBlock } from "../components/NotFriendsComponents/NotFriendBlackBlock"
import { loadAllUsersThunk } from "../redux/allUsersInfo/action"
import NotExistingUserBlackBlock from "../components/NotFriendsComponents/NotExistingUserBlackBlock"

//check the route name, normally we just dive in by clicking own name
export const ProfilePage = (props) => {
    const [isOwner, setIsOwner] = useState(false);
    const [areFriends, setareFriends] = useState(false);
    const userStore = useSelector(state => state.userInfoStore);
    const friendListStore = useSelector(state => state.friendListStore);
    const allUsersStore = useSelector(state => state.allUsersListStore);
    console.log('in profile page',userStore);
    const [userInfo,setUserInfo] = useState({}); 
    const [usersList, setUsersList] = useState([])
    
    console.log("ALL USERS STORE", allUsersStore)
    console.log("owner",isOwner)
    console.log("friends",areFriends)

    //set up post area
    
    const postListStore = useSelector(state=>state.postListStore);
    const postList = postListStore.postList;
    const [postInfo,setPostInfo] = useState([]);

        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(loadAllUsersThunk())
        }, [])

        // useEffect(() => {
        //     setUsersList(allUsersStore)
        // }, [allUsersStore])
        
    //need to check whether this user is friend with him
    useEffect(() => {
        console.log('params', props.match.params.username);
        let pageOwnerName = props.match.params.username
        //first check is the user own this page;
        let jwt = localStorage.getItem('token');
        let decode = jwtDecode(jwt);
        let currentUserName = decode.username
        //check if it is owner
        if (pageOwnerName == currentUserName) {
            setIsOwner(true);
            setareFriends(false);
            setUserInfo(userStore.userInfo);
        }
        //check if they are friends
        if (friendListStore.friendList["All Friends"]) {
            async function FetchFriend() {
                let friendInfo = await axios({
                    url: process.env.REACT_APP_API_SERVER + '/api/user/profile/' + pageOwnerName,
                    headers: { Authorization: `Bearer ${jwt}` }
                });
                console.log('friendInfo', friendInfo);
                setUserInfo(friendInfo.data);
                let allFriend = friendListStore.friendList["All Friends"];
                console.log('friendList', friendListStore.friendList, allFriend);
                if (allFriend.find(e => e === pageOwnerName)) {
                    console.log('are friends');
                    setareFriends(true);
                    setIsOwner(false)

                }
            }
            FetchFriend();

        }

        //and then check if they are friend?

    }, [userStore, friendListStore])
   

  
    return (
        <div className='col-9 px-0 row mx-0'>
            <div className='col-9 px-0' style={{borderLeft:'1px solid #c4c4c4',borderRight:'1px solid #c4c4c4'}}>
            <PersonalProfile
                            isOwner={isOwner}
                            userInfo={userInfo}
                            areFriends={areFriends}
                        />
            {(isOwner === true || areFriends === true) ? (

                <ProfilePost
                postList={postList}
                isOwner={isOwner}
                areFriends={areFriends}
                postInfo={postInfo}
                pageOwner={props.match.params.username}
                />
                                
                                    
            //replace null with users posts
            ) :(usersList.find((obj) => obj.username === props.match.params.username) ? (
            <NotFriendBlackBlock
            pageOwnerName={props.match.params.username}
            areFriends={areFriends}
            />): <NotExistingUserBlackBlock 
            pageOwnerName={props.match.params.username}
            areFriends={areFriends}/>)  
            }
          
            </div>
            <div className='col-3 px-0'>
                <MyscheduleButton />
                <WeekIcon />
                
            </div>
            


            

        </div>
    )
}