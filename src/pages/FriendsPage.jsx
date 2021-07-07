
import SideBar from "../components/SideBar";
import { Container, Row, Col } from 'reactstrap';
import PostArea from "../components/PostArea";
import FriendsHeader from "../components/FriendsComponents/FriendsHeader"
import ScehduleRightBar from "../components/ScehduleRightBar"
import '../stylesheet/navBar.css'
import '../stylesheet/friendsPage.css'


const FriendsPage = () => {
    return (
        <center>
            <Container className="containerSize">
                <Row className="mx-0">
                    <Col className="left-col px-0" xs="3"><SideBar /></Col>
                    <Col className="px-0" xs="5" style={{ backgroundColor: 'grey' }}><FriendsHeader /><PostArea style={{ backgroundColor: 'grey' }} /></Col>
                    <Col className="px-0" xs="3"><ScehduleRightBar /></Col>
                </Row>
            </Container>
        </center>
    )
}


export default FriendsPage;