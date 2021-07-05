import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SideBar from "../components/SideBar";
import { Container, Row, Col } from 'reactstrap';
import PostArea from "../components/PostArea";
import ScehduleRightBar from "../components/ScehduleRightBar"
import '../stylesheet/navBar.css'

const HomePage = () => {
    return (
        <Container className="containerSize">
            <Row>
                <Col xs="3"><SideBar /></Col>
                <Col xs="6" style={{ backgroundColor: 'grey' }}><p>search bar component</p><PostArea style={{ backgroundColor: 'grey' }} /></Col>
                <Col xs="3"><ScehduleRightBar /></Col>
            </Row>
        </Container>
    )
}


export default HomePage;