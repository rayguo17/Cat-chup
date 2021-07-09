
import { useEffect } from "react";
import { useState } from "react";
import { Container,Row,Col } from "reactstrap";
import { PersonalProfile } from "../components/profile/PersonalProfile";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useSelector } from "react-redux";

//check the route name, normally we just dive in by clicking own name
export const ProfilePage = (props)=>{
    const [isOwner,setIsOwner] = useState(false);
    const [areFriends,setareFriends] = useState(false);
    const userStore = useSelector(state=>state.userInfoStore);
    const friendListStore = useSelector(state=>state.friendListStore);
    console.log('in profile page',userStore);
    const [userInfo,setUserInfo] = useState({});    
    //need to check whether this user is friend with him
    useEffect(async ()=>{
        console.log('params',props.match.params.username);
        let pageOwnerName = props.match.params.username
        //first check is the user own this page;
        let jwt = localStorage.getItem('token');
        let decode = jwtDecode(jwt);
        let currentUserName= decode.username
        //check if it is owner
        if(pageOwnerName==currentUserName){
            setIsOwner(true);
            setareFriends(false);
            setUserInfo(userStore.userInfo);
        }
        //check if they are friends
        if(friendListStore.friendList["All Friends"]){
            let friendInfo = await axios({
                url:process.env.REACT_APP_API_SERVER+'/api/user/profile/'+pageOwnerName,
                headers:{Authorization:`Bearer ${jwt}`}
            });
            console.log('friendInfo',friendInfo);
            setUserInfo(friendInfo.data);
            let allFriend = friendListStore.friendList["All Friends"];
            if(allFriend.find(e=>e===pageOwnerName)){
                setareFriends(true);
                setIsOwner(false)
                
            }
        }
        
        //and then check if they are friend?

    },[userStore,friendListStore])
    return (
        <div className='col-9 px-0'>
            <PersonalProfile
                            isOwner={isOwner}
                            userInfo={userInfo}
                            areFriends={areFriends}
                        />
            {/* <Container>
                <Row>
                    <Col xs='3'></Col>
                    <Col xs='6'>
                        <PersonalProfile
                            isOwner={isOwner}
                            userInfo={userInfo}
                            areFriends={areFriends}
                        />

                    </Col>
                    <Col xs='3'></Col>
                </Row>
            </Container> */}

        </div>
    )
}