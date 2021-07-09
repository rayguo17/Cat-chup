import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SideBar from "../components/SideBar";
import { Container, Row, Col } from 'reactstrap';
import '../stylesheet/navBar.css'

import HomePage from "./HomePage";
import jwtDecode from "jwt-decode";
import { ProfilePage } from "./ProfilePage";
import { useEffect,useState } from "react";
import FriendsPage from "./FriendsPage";
import { useDispatch } from "react-redux";
import { loadProfileThunk } from "../redux/userInfo/action";
import { loadFriendThunk } from "../redux/friendsList/action";

export const ContentPage = () => {
    const [username,setUsername] = useState(null);
    const dispatch = useDispatch();
    useEffect(()=>{
        //check the username here! need to send the username in backend 
    //if have multiple things to check in multiple page, put this into redux
    let jwt = localStorage.getItem('token');
    let decode = jwtDecode(jwt);
    setUsername(decode.username)
    console.log('jwt',decode);
        dispatch(loadProfileThunk(decode.username));
        dispatch(loadFriendThunk(decode.id));
    },[])
    return (
        <center>
            <BrowserRouter>
                <Container>
                    <Row>
                        <Col xs="3"><SideBar
                            username={username}
                        /></Col>
                        {/* <Col xs="6" style={{ backgroundColor: 'grey' }}><p>search bar component</p><PostArea style={{ backgroundColor: 'grey' }} /></Col>
                        <Col xs="3"><ScehduleRightBar /></Col> */}

                        <Switch className='col-9'>
                            <Route path='/home' component={HomePage} />
                            <Route path='/messages' render={() => <p></p>} />
                            <Route path='/friends' component={FriendsPage} />
                            <Route path='/:username' component={ProfilePage} />
                        </Switch>

                    </Row>
                </Container>
            </BrowserRouter>
        </center>
    )

}

