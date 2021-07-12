
import SideBar from "../components/SideBar";
import { Container, Row, Col } from 'reactstrap';
import PostArea from "../components/PostArea";
import ScheduleRightBar from "../components/ScheduleRightBar"
import '../stylesheet/navBar.css'
import WhatsOnYourMind from "../components/WhatsOnYourMind";

const HomePage = () => {
    return (
        <div className="col-9 px-0 mx-0 row">

            <div className="col-9 px-0">
                <WhatsOnYourMind /><PostArea />
            </div>

            <div className="col-3 px-0">
                <ScheduleRightBar />
            </div>

        </div>
    )
}


export default HomePage;