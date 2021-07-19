import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {
    Card, CardImg, CardText, CardBody
} from 'reactstrap';
import userAvatar from '../../img/profileIcon.png';

export const FriendCard = (props) => {
    const { username, toggle } = props
    const [userInfo, setUserInfo] = useState(null);
    useEffect(() => {
        async function getUserInfo() {
            let jwt = localStorage.getItem('token');
            let getUserReq = await axios({
                url: process.env.REACT_APP_API_SERVER + '/api/user/profile/' + username,
                headers: { Authorization: `Bearer ${jwt}` },
            })
            console.log('getUserReq', getUserReq);
            setUserInfo(getUserReq.data);
        }
        getUserInfo();
    }, [username])
    return (
        <div className='col-5 mx-3'>

            <Card className="friendsAreaComponent">

                <CardBody className="friendCardBody row mx-0">
                    <div className='col-3 px-0' style={{ width: '65px', height: '50px', borderRadius: '50%', backgroundPositionY: 'center', backgroundRepeat: 'no-repeat', backgroundImage: `url(${userInfo ? process.env.REACT_APP_API_SERVER + userInfo.imgPath : userAvatar})`, backgroundSize: 'contain' }}>

                    </div>
                    <div className='col-6 px-0' >
                        <a style={{ fontSize: "20px", color: "black", textDecoration: "none" }} href={"/" + username}>{username}</a>
                    </div>
                    <button className="deleteFriendBtn" onClick={toggle} name={username}></button>


                </CardBody>
            </Card>

        </div>
    )
}