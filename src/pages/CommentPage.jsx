import { Container, Row, Col } from "reactstrap";
import PostArea from "../components/PostArea";
import "../stylesheet/commentPage.css";
import backButton from "../svg/backButton.svg";
import Comments from "../components/Comments";
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
import { TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import LikeIcon from "../img/like-icon.png";
import CommentIcon from "../img/comment-icon.png";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const CommentPage = (props) => {
  const classes = useStyles();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const postComment = (e) => {
    e.preventDefault();
    setComment = "";
  };

  const postInfo = props.postInfo;
  console.log("commentpage:", postInfo);
  console.log("path", window.location.pathname);
  return (
    <div className="col-9 px-0 mx-0 row comment-part">
      <a href="/home">
        <div className="back-btn-container">
          <img src={backButton} alt="back" className="back-btn" />
        </div>
      </a>

      <div className="comment-card">
        {postInfo.map((Info) => {
          if (`/post/${Info.id}` == window.location.pathname) {
            return (
              <Card>
                <img
                  className="userIcon"
                  src={Info.userInfo.userIcon_url}
                  alt="icon"
                  style={{ width: "50px", height: "50px" }}
                />
                <span className="userName">
                  <p>{Info.userInfo.userName}</p>
                </span>
                <div className="mood"></div>
                <CardBody></CardBody>
                <CardBody>
                  <div className="card-content">
                    <CardText style={{ marginTop: "30px" }}>
                      It is a good day.
                    </CardText>
                    {Info.content.pictures.map((picture, index) => {
                      return (
                        <img
                          width="100%"
                          src={picture.data_url}
                          alt="Card image cap"
                        />
                      );
                    })}
                  </div>
                </CardBody>

                <div className="like-comment-button">
                  <div>
                    <button style={{ cursor: "context-menu" }}>
                      {/* <p>{Info.content.comments.length}</p> */}
                      <p>Comment</p>
                      <img
                        src={CommentIcon}
                        className="comment-icon"
                        alt="Comment"
                      />
                    </button>
                  </div>

                  <div style={{ display: "flex" }}>
                    <button style={{ cursor: "default" }} onClick={toggle}>
                      {/* <p>{Info.content.likes.length}</p> */}
                      <p>Like</p>
                    </button>
                    <Modal isOpen={modal} toggle={toggle}>
                      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                      <ModalBody>
                        <List className={classes.root}>
                          {Info.content.likes.map((like, index) => {
                            return (
                              <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                  <Avatar
                                    alt="Remy Sharp"
                                    src={like.userIcon}
                                  />
                                </ListItemAvatar>
                                <ListItemText
                                  primary={like.userName}
                                  secondary={
                                    <React.Fragment>
                                      <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                      >
                                        <div>
                                          <div style={{ textAlign: "right" }}>
                                            {like.time}
                                          </div>
                                        </div>
                                      </Typography>
                                    </React.Fragment>
                                  }
                                />
                              </ListItem>
                            );
                          })}

                          <Divider variant="inset" component="li" />
                        </List>
                      </ModalBody>
                    </Modal>

                    <img
                      style={{ cursor: "pointer" }}
                      src={LikeIcon}
                      className="like-icon"
                      alt="Like"
                    />
                  </div>
                </div>

                <div className="post-comments">
                  <Comments Info={Info} />
                </div>

                <form style={{ display: "flex" }}>
                  <TextField
                    // label="Size"
                    variant="outlined"
                    size="small"
                    placeholder="add comment"
                    defaultValue={comment}
                    style={{ flex: "1" }}
                  />
                  <Button
                    variant="contained"
                    size="small"
                    endIcon={<SendIcon />}
                    // onClick={postComment}
                    // disabled={!comment}
                    type="submit"
                  >
                    Send
                  </Button>
                </form>
              </Card>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CommentPage;
