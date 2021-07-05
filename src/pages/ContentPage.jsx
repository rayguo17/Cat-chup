import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SideBar from "../components/SideBar";
import { Container, Row, Col } from 'reactstrap';
import PostArea from "../components/PostArea";
import ScehduleRightBar from "../components/ScehduleRightBar"
import '../stylesheet/navBar.css'
import WhatsOnYourMind from "../components/WhatsOnYourMind";

export const ContentPage = () => {
    return (
        <div>
            <BrowserRouter>
                <Container>
                    <Row>
                        <Col xs="3"><SideBar /></Col>
                        <Col xs="6" style={{ backgroundColor: 'grey' }}><WhatsOnYourMind /><PostArea style={{ backgroundColor: 'grey' }} /></Col>
                        <Col xs="3"><ScehduleRightBar /></Col>
                    </Row>
                </Container>
                <Switch>
                    <Route path='/home' render={() => <p></p>} />
                    <Route path='/messages' render={() => <p></p>} />
                    <Route path='/friends' render={() => <p></p>} />
                    <Route path='/:username' render={() => <p></p>} />
                </Switch>


            </BrowserRouter>
        </div>
    )

}

