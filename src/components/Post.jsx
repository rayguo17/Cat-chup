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
import LikeIcon from "../img/like-icon.png";
import CommentIcon from "../img/comment-icon.png";
import PostImgBox from "./PostImgBox";

const Post = (props) => {
  const {
    id,
    userInfo,
    content,
    postTime,
    likeNumber,
    commentsNumber,
  } = props.postInfo;

  const changeToCommentPage = (postInfo) => {
    window.location.href = `/comment/${id}`;
  };

  return (
    <div className="postcard-container" onClick={changeToCommentPage}>
      <Card>
        <img className="userIcon" src={userInfo.userIcon_url} alt="icon" />
        <span className="userName">
          <p> {userInfo.userName} </p>
        </span>
        <div className="mood"></div>
        <CardBody>
          <CardTitle tag="h5"> {content.caption} </CardTitle>
        </CardBody>
        <CardText>{content.text}</CardText>
        <CardBody>
          <div className="card-content">
            <PostImgBox Picture={content.pictures} />
            {/* {content.pictures.map((picture, index) => (
              <PostImgBox Picture={content.pictures} />
              // <img width="100%" src={picture.data_url} alt="Card image cap" />
            ))} */}
          </div>
        </CardBody>
        <p className="create-date"> {content.postTime} </p>

        <div className="post-like-comment-button">
          <div>
            <Button color="secondary">
              <p>{likeNumber} Like</p>
              <img src={LikeIcon} className="post-like-btn" alt="Like" />
            </Button>
          </div>

          <div>
            <Button color="secondary" onclick={changeToCommentPage}>
              <p>{commentsNumber} Comment</p>
              <img
                src={CommentIcon}
                className="post-comment-btn"
                alt="Comment"
              />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Post;
