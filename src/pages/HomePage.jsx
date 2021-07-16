import SideBar from "../components/SideBar";
import { Container, Row, Col } from "reactstrap";
import PostArea from "../components/PostArea";
import ScheduleRightBar from "../components/ScheduleRightBar";
import "../stylesheet/navBar.css";
import WhatsOnYourMind from "../components/WhatsOnYourMind";

const HomePage = () => {
  const postInfo = [
    {
      id: 1,
      type: "post",
      userInfo: {
        userName: "Username1",
        userIcon_url: "https://image.flaticon.com/icons/png/512/146/146005.png",
      },
      content: {
        caption: "Nice to create a post",
        text: "It is a good day.",
        pictures: [
          {
            name: "pic1",
            data_url:
              "https://img.huffingtonpost.com/asset/5e0f68ec2500003b1998fb2e.jpeg?cache=YqiWjN9UVt&ops=crop_34_446_5966_3406%2Cscalefit_720_noupscale",
          },
          //   {
          //     name: "pic2",
          //     data_url:
          //       "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/1036780592-1280x720.jpg?itok=k4u7CDBb",
          //   },
        ],
        postTime: "2020-07-01 15:00:00",
        likeNumber: 5,
        commentsNumber: 1,
      },
    },

    {
      id: 2,
      type: "event",
      userInfo: {
        userName: "Username2",
        userIcon_url:
          "https://cdn.iconscout.com/icon/free/png-512/boy-avatar-4-1129037.png",
      },
      content: {
        caption: "Running together",
        text:
          "Running in humans is associated with improved health and life expectancy.I plan to run every morning.Would you join me?",
        pictures: [
          {
            name: "pic2",
            data_url:
              "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/1036780592-1280x720.jpg?itok=k4u7CDBb",
          },
        ],
        eventDate: "2020-07-01",
        startTime: "05:00",
        endTime: "07:00",
        tags: ["running", "morning", "stronger"],
        postTime: "2020-07-01 15:00:00",
      },
    },
  ];

  return (
    <div className="col-9 px-0 mx-0 row">
      <div className="col-9 px-0">
        <WhatsOnYourMind />
        <PostArea postInfo={postInfo} />
      </div>

      <div className="col-3 px-0">
        <ScheduleRightBar postInfo={postInfo} />
      </div>
    </div>
  );
};

export default HomePage;
