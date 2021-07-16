import "../stylesheet/postArea.css";
import EventPost from "./EventPost";
import Post from "./Post";

const PostArea = (props) => {
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
          {
            name: "pic2",
            data_url:
              "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/1036780592-1280x720.jpg?itok=k4u7CDBb",
          },
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
    <div className="postContainer">
      {postInfo.map(
        (info, index) => {
          if (info.type === "event") {
            return <EventPost postInfo={info} Key={info.id} />;
          }
          return <Post postInfo={info} Key={info.id} />;
        }
        //     (info.type === “event”)?
        //     <EventPost />
        //    : <Post postInfo={info} Key={info.id} />
      )}
    </div>

    // <div className="postContainer">
    //   {postInfo.map((info, index) => (
    //     <Post postInfo={info} Key={info.id} />
    //   ))}
    //   <EventPost />
    // </div>

    // {imageList.map((image, index) => (
    //     <div key={index} className="image-item">
    //         <img src={image.data_url} alt="" width="100%" />
    //         <div className="image-item__btn-wrapper">
    //             <button onClick={() => onImageUpdate(index)}>Update</button>
    //             <button onClick={() => onImageRemove(index)}>Remove</button>
    //         </div>
    //     </div>
    // ))} }
  );
};

export default PostArea;
