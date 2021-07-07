
import { useEffect } from "react";
import { useState } from "react";
import { Container,Row,Col } from "reactstrap";
import { PersonalProfile } from "../components/profile/PersonalProfile";
import jwtDecode from "jwt-decode";
import axios from "axios";

//check the route name, normally we just dive in by clicking own name
export const ProfilePage = (props)=>{
    
    const [userInfo,setUserInfo] = useState({});
    const [infoChanged,setChanged] = useState(false);
    const [isOwner,setIsOwner] = useState(false);
    
    
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
            let profileReq = await axios({
                url:process.env.REACT_APP_API_SERVER+'/api/user/profile/'+pageOwnerName,
                headers:{Authorization:`Bearer ${jwt}`},
            })
            console.log('get profile result',profileReq.data)
            let userProfile = profileReq.data
;            setUserInfo(userProfile);
            
        }
        //and then check if they are friend?

    },[infoChanged])
    return (
        <div>
            <Container>
                <Row>
                    <Col xs='3'></Col>
                    <Col xs='6'>
                        <PersonalProfile
                            isOwner={isOwner}
                            userInfo={userInfo}
                            infoChangedState={[infoChanged,setChanged]}

                        />

                    </Col>
                    <Col xs='3'></Col>
                </Row>
            </Container>
        </div>
    )
}