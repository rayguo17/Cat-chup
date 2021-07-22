import { useState } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import LikeIcon from "../../img/like-icon.png";
import CommentIcon from "../../img/comment-icon.png";
import { PostImgShowcase } from "./PostImgShowcase";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";


const PostCard = (props) => {
  const {postInfo} = props
    //console.log('post info',postInfo);
    const [likeNumber,setLikeNumber] = useState(null);
    
    let postTime = new Date(postInfo.created_at).toString();

  const changeToCommentPage = () => {
    window.location.href = "post/"+postInfo.id;
  };
  useEffect(()=>{
    setLikeNumber(postInfo.content.likes.length);
  },[])
  const handleLiked=async (e)=>{
    e.stopPropagation();
    console.log('liked process');
    let token = localStorage.getItem('token');
    let decode = jwtDecode(token);
    let username = decode.username;
    let match = false;
    match = postInfo.content.likes.find(obj=>obj.user==username)
    if(match){
      //cancel like
    }else{
      let sendLikedReq = await axios({
        url:process.env.REACT_APP_API_SERVER+'/api/post/like',
        data:{user:username,postId:postInfo.id},
        headers: { Authorization: `Bearer ${token}` },
        method:'post'
      })
      console.log('sendLike req',sendLikedReq);
      if(sendLikedReq.status==200){
        setLikeNumber(likeNumber+1);
      }
      

    }
  }

  return (
    <div className="postcard-container" onClick={changeToCommentPage}>
      <Card>
        <img className="userIcon" src={`${process.env.REACT_APP_API_SERVER+postInfo.imgPath}`} alt="icon" />
        <span className="userName">
          <p> {postInfo.username} </p>
        </span>
        <div className="mood"></div>
        <CardBody>
          <CardTitle tag="h5"> {'content.caption'} </CardTitle>
        </CardBody>
        <CardText>{postInfo.content.caption}</CardText>
        <CardBody>
          <div className="card-content">
            <PostImgShowcase
                imageList={postInfo.content.attachPic}
                height='300px'
            />
            {/* <PostImgBox Picture={'content.pictures'} /> */}
            {/* {content.pictures.map((picture, index) => (
              <PostImgBox Picture={content.pictures} />
              // <img width="100%" src={picture.data_url} alt="Card image cap" />
            ))} */}
          </div>
        </CardBody>
        <p className="create-date"> {postTime} </p>

        <div className="post-like-comment-button">
          <div>
            <Button color="secondary" onClick={handleLiked}>
              <p>{likeNumber } Like</p>
              <img src={LikeIcon} className="post-like-btn" alt="Like" />
            </Button>
          </div>

          <div>
            <a href={"/post/"+postInfo.id}>
              <Button color="secondary">
                <p>{postInfo.content.comments.length} Comment</p>
                <img
                  src={CommentIcon}
                  className="post-comment-btn"
                  alt="Comment"
                />
              </Button>
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PostCard;