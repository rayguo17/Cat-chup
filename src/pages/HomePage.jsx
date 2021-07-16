
import SideBar from "../components/SideBar";
import { Container, Row, Col } from 'reactstrap';
import PostArea from "../components/PostArea";
import ScheduleRightBar from "../components/ScheduleRightBar"
import '../stylesheet/navBar.css'
import WhatsOnYourMind from "../components/WhatsOnYourMind";
import { CreatePostModal } from "../components/WhatsOnYourMindComponents/CreatePostModal";
import { CreatePostBtnContainer } from "../components/WhatsOnYourMindComponents/CreatePostBtnContainer";
import { useState } from "react";

const HomePage = () => {
    const [postModal,setPostModal] = useState(false);
    const toggleModal = ()=>{
        setPostModal(!postModal);
    }
    return (
        <div className="col-9 px-0 mx-0 row">

            <div className="col-9 px-0">
                <CreatePostBtnContainer
                    toggle={toggleModal}
                />
                {/* <WhatsOnYourMind /> */}
                <PostArea />
            </div>

            <div className="col-3 px-0">
                <ScheduleRightBar 
                
                />
            </div>
            <CreatePostModal
                toggle={toggleModal}
                modal={postModal}
            />
        </div>
    )
}


export default HomePage;