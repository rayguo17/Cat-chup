import "../stylesheet/postArea.css";
import EventPost from "./EventPost";
import BackToTopButton from "./BackToTopButton";
import Post from "./Post";
import PostCard from "./PostComponents/PostCard";

const PostArea = (props) => {
  const {postList,postInfo} = props
  
  const changeToCommentPage = () => {
    window.location.href = "/comment";
  };

  return (
    <div className="postContainer">
      {postInfo.map((info, index) => {
        if (info.type === "event") {
          return <EventPost postInfo={info} Key={info.id} />;
        }
        return <Post postInfo={info} Key={info.id} />;
      })}
      {postList.map((post,index)=>{
        return (
          <PostCard
            postInfo={post}
            key={post.id}
          />
        )
      })}
      <BackToTopButton />
    </div>

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
