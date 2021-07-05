import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SideBar from "../components/SideBar";
import { Container, Row, Col } from 'reactstrap';
import PostArea from "../components/PostArea";
import ScehduleRightBar from "../components/ScehduleRightBar"
import '../stylesheet/navBar.css'
<<<<<<< HEAD
import WhatsOnYourMind from "../components/WhatsOnYourMind";
=======
import HomePage from "./HomePage";
>>>>>>> 6766035599448adb20ad613fda7cc5a30270b65f

export const ContentPage = () => {
    return (
        <div>
            <BrowserRouter>
                <Container>
                    <Row>
                        <Col xs="3"><SideBar /></Col>
<<<<<<< HEAD
                        <Col xs="6" style={{ backgroundColor: 'grey' }}><WhatsOnYourMind /><PostArea style={{ backgroundColor: 'grey' }} /></Col>
                        <Col xs="3"><ScehduleRightBar /></Col>
                    </Row>
                </Container>
                <Switch>
                    <Route path='/home' render={() => <p></p>} />
=======
                        {/* <Col xs="6" style={{ backgroundColor: 'grey' }}><p>search bar component</p><PostArea style={{ backgroundColor: 'grey' }} /></Col>
                        <Col xs="3"><ScehduleRightBar /></Col> */}
                    
                <Switch className='col-9'>
                    <Route path='/home' component={HomePage} />
>>>>>>> 6766035599448adb20ad613fda7cc5a30270b65f
                    <Route path='/messages' render={() => <p></p>} />
                    <Route path='/friends' render={() => <p></p>} />
                    <Route path='/:username' render={() => <p></p>} />
                </Switch>

                </Row>
                </Container>
            </BrowserRouter>
        </div>
    )

}

