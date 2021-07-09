
import SideBar from "../components/SideBar";
import { Container, Row, Col } from 'reactstrap';
import PostArea from "../components/PostArea";
import ScehduleRightBar from "../components/ScehduleRightBar"
import '../stylesheet/navBar.css'
import WhatsOnYourMind from "../components/WhatsOnYourMind";

const HomePage = () => {
    return (
        <div className="col-9 px-0 mx-0 row">

            <div className="col-6 px-0">
                <WhatsOnYourMind /><PostArea style={{ backgroundColor: 'grey' }} />
            </div>



        </div>
    )
}


export default HomePage;