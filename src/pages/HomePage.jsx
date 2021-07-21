import SideBar from "../components/SideBar";
import { Container, Row, Col } from "reactstrap";
import PostArea from "../components/PostArea";
import ScheduleRightBar from "../components/ScheduleRightBar";
import "../stylesheet/navBar.css";
import WhatsOnYourMind from "../components/WhatsOnYourMind";
import { CreatePostModal } from "../components/WhatsOnYourMindComponents/CreatePostModal";
import { CreatePostBtnContainer } from "../components/WhatsOnYourMindComponents/CreatePostBtnContainer";
import { useState } from "react";
import "../stylesheet/homePage.css";

const HomePage = (props) => {
  const postInfo = props.postInfo;

  const [postModal, setPostModal] = useState(false);
  const toggleModal = () => {
    setPostModal(!postModal);
  };

  return (
    <div
      className="col-9 px-0 mx-0 row post-and-schedule"
      style={{ overflow: "scroll" }}
    >
      <div className="col-9 px-0 post-page Scrolllable" style={{ maxHeight: "100vh" }}>
        <CreatePostBtnContainer toggle={toggleModal} />
        {/* <WhatsOnYourMind /> */}
        <PostArea postInfo={postInfo} />
      </div>
      <div className="col-3 px-0 schedule-page" style={{ maxHeight: "100vh" }}>
        <ScheduleRightBar postInfo={postInfo} />
      </div>
      <CreatePostModal toggle={toggleModal} modal={postModal} />
    </div>
  );
};

export default HomePage;
