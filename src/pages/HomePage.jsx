
import SideBar from "../components/SideBar";
import { Container, Row, Col } from 'reactstrap';
import PostArea from "../components/PostArea";
import ScehduleRightBar from "../components/ScehduleRightBar"
import '../stylesheet/navBar.css'
import WhatsOnYourMind from "../components/WhatsOnYourMind";

const HomePage = () => {
    return (
        <center>
            <Container className="containerSize">
                <Row>
                    <Col className="left-col" xs="3"><SideBar /></Col>
                    <Col xs="5" style={{ backgroundColor: 'grey' }}><WhatsOnYourMind /><PostArea style={{ backgroundColor: 'grey' }} /></Col>
                    <Col xs="3"><ScehduleRightBar /></Col>
                </Row>
            </Container>
        </center>
    )
}


export default HomePage;