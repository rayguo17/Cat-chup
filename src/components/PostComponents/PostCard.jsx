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


const PostCard = (props) => {
  const {postInfo} = props
    //console.log('post info',postInfo);
    let postTime = new Date(postInfo.created_at).toString();

  const changeToCommentPage = () => {
    window.location.href = "/comment";
  };

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
            <Button color="secondary">
              <p>1 Like</p>
              <img src={LikeIcon} className="post-like-btn" alt="Like" />
            </Button>
          </div>

          <div>
            <a href="/comment">
              <Button color="secondary">
                <p>1 Comment</p>
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