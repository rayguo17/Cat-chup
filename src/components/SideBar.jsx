import React from "react";
import { Nav, NavItem, NavLink, Col } from "reactstrap";
import "../stylesheet/navBar.css";
import homeIcon from "../img/homeIcon.png";
import friendsIcon from "../img/friendsIcon.png";
import notificationIcon from "../img/NotificationIcon.png";
import speechIcon from "../img/speechIcon.png";
import profileIcon from "../img/profileIcon.png";
import Logo from "../img/Catchup-Nav-logo.png";
import NavProfileBar from "./NavBarProfileBar";
import MyPlansToday from "./MyPlansToday";

const SideBar = (props) => {
  const postInfo = props.postInfo;

  console.log("sidebar", props.username);
  return (
    <div className="navContainer">
      {/* <Col xs="3" className="navIconLinkContainer px-0"> */}
      <div className="navIconLinkContainer">
        <img className="mainLogo" src={Logo} alt="HomeIcon"></img>
        <br />

        <Nav vertical className="iconContainer">
          <NavItem className="flexIcon">
            <img src={homeIcon} alt="HomeIcon"></img>{" "}
            <NavLink className="NavLink" href="/home">
              HOME
            </NavLink>
          </NavItem>
          <NavItem className="flexIcon">
            <img src={friendsIcon} alt="FriendIcon"></img>{" "}
            <NavLink className="NavLink" href="/friends">
              FRIENDS
            </NavLink>
          </NavItem>
          <NavItem className="flexIcon">
            <img src={notificationIcon} alt="NotitificationIcon"></img>
            <NavLink className="NavLink" href="/notifications">
              NOTIFICATION
            </NavLink>
          </NavItem>
          <NavItem className="flexIcon">
            <img src={speechIcon} alt="SpeechIcon"></img>
            <NavLink className="NavLink" href="#">
              MESSAGES
            </NavLink>
          </NavItem>
          <NavItem className="flexIcon">
            <img src={profileIcon} alt="ProfileIcon"></img>
            <NavLink className="NavLink" href={`/${props.username}`}>
              PROFILE
            </NavLink>
          </NavItem>
        </Nav>
      </div>

      {/* </Col> */}

      <MyPlansToday postInfo={postInfo} />
      <NavProfileBar />
    </div>
  );
};

export default SideBar;

// const SideBar = () => {
//     return (
//         <div>
//

//             <ul>
//                 <li>
//                     <img src="../src/img/Catchup-Nav-logo.png" alt="home"></img><Link to='/home'>Home</Link>
//                 </li>
//                 <li>
//                     <Link to='/friend'>Friends</Link>
//                 </li>
//                 <li>
//                     <Link to='/message'>Notification</Link>
//                 </li>

//                 <li>
//                     <Link to='/message'>Messages</Link>
//                 </li>
//                 <li>
//                     <Link to='/profile'>Profile</Link>
//                 </li>
//             </ul>
//         </div>
//     )
// }

// export default SideBar;
