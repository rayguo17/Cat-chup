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
import { useEffect } from "react";
import GoBackButton from "../components/GoBackButton";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { PostImgShowcase } from "../components/PostComponents/PostImgShowcase";
import { LikeListCard } from "../components/PostComponents/LikeListCard";
import { CommentSection } from "../components/PostComponents/CommentSection";

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




export const PostPage = (props)=>{
    const classes = useStyles();
  const [comment, setComment] = useState("");
  const [modal, setModal] = useState(false);
  const [Info,setPostInfo] = useState(null);
  const [comments,setComments] = useState(null);
  const [likes,setLikes] = useState(null);

  const toggle = () => setModal(!modal);

  const postComment = (e) => {
    e.preventDefault();
    async function submitCommentFunc(){
        try {
            let token = localStorage.getItem('token');
            let decode = jwtDecode(token);
            let user = decode.username;

            let commentData = {
                user:user,
                comment:comment,
                postId:Info.id,
            }
            let submitCommentReq = await axios({
                url:process.env.REACT_APP_API_SERVER+'/api/post/comment',
                headers: { Authorization: `Bearer ${token}` },
                data:commentData,
                method:'post',
            })
            console.log('submit Comment Res',submitCommentReq);
            setComments([...comments,submitCommentReq.data.commentId]);
        } catch (error) {
            console.log('submit comment function error',error)
        }
        

    }
    submitCommentFunc();
    
  };
  const handleChange = (e)=>{
    setComment(e.target.value);
  }
  
  useEffect(()=>{
    console.log("window", window.location.pathname);
    console.log("path", props.match.params.postid);
    let postId = props.match.params.postid;
    async function getPostDetail(){
        let token = localStorage.getItem('token');
        let decode = jwtDecode(token);
        let getPostReq = await axios({
            url:process.env.REACT_APP_API_SERVER+'/api/post/'+postId+'/user/'+decode.username,
            headers: { Authorization: `Bearer ${token}` },
        })
        console.log('get post res',getPostReq);
        setPostInfo(getPostReq.data);
        setLikes(getPostReq.data.content.likes);
        setComments(getPostReq.data.content.comments);
    }
    getPostDetail();
  },[])
  const handleLiked = async ()=>{
    console.log('liked process');
    let token = localStorage.getItem('token');
    let decode = jwtDecode(token);
    let username = decode.username;
    let match = false;
    match = likes.find(obj=>obj.user==username)
    if(match){
      //cancel like
    }else{
      let sendLikedReq = await axios({
        url:process.env.REACT_APP_API_SERVER+'/api/post/like',
        data:{user:username,postId:Info.id},
        headers: { Authorization: `Bearer ${token}` },
        method:'post'
      })
      console.log('sendLike req',sendLikedReq);
      if(sendLikedReq.status==200){
        setLikes([...likes,sendLikedReq.data])
      }
      

    }
  }
  const handleRedProfile = (e)=>{
    e.stopPropagation();
    window.location.href = '/'+Info.username
  }
  return (
    <div className="col-9 px-0 comment-part">
        <div >
            <div className='back-btn-container'>
            <GoBackButton/>
            </div>
        </div>
        <div className="comment-card">
        <Card>
                <img
                  onClick={handleRedProfile}
                  className="userIcon"
                  src={Info?process.env.REACT_APP_API_SERVER+Info.imgPath:null}
                  alt="icon"
                  style={{ width: "50px", height: "50px",cursor:'pointer' }}
                />
                <span className="userName">
                  <p>{Info?Info.username:null}</p>
                </span>
                <div className="mood"></div>
                <CardBody></CardBody>
                <CardBody>
                  <div className="card-content">
                    <CardText style={{ marginTop: "30px" }}>
                      {Info?Info.content.caption:null}
                    </CardText>
                    <PostImgShowcase
                        imageList={Info?Info.content.attachPic:null}
                        height='500px'
                    />
                  </div>
                </CardBody>

                <div className="like-comment-button">
                  <div>
                    <button style={{ cursor: "context-menu" }}>
                      <p>{comments?comments.length:null}</p>
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
                      <p>{likes?likes.length:null}</p>
                      <p>Like</p>
                    </button>
                    <Modal isOpen={modal} toggle={toggle}>
                      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                      <ModalBody>
                        <List className={classes.root}>
                          {likes?likes.map((like, index) => {
                            return (
                                <LikeListCard
                                    like={like}
                                    key={like.likeId}
                                />
                            );
                          }):null}

                          
                        </List>
                      </ModalBody>
                    </Modal>

                    <img
                      style={{ cursor: "pointer" }}
                      src={LikeIcon}
                      className="like-icon"
                      alt="Like"
                      onClick={handleLiked}
                    />
                  </div>
                </div>

                

                <form style={{ display: "flex" }} onSubmit={postComment}>
                  <TextField
                    // label="Size"
                    variant="outlined"
                    size="small"
                    placeholder="add comment"
                    value={comment}
                    onChange={handleChange}
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
                <div className="post-comments">
                  {/* <Comments Info={Info} /> */}
                          <CommentSection
                            comments={comments}
                          />
                </div>
              </Card>
      </div>

        
        
      
        
      

      
    </div>
  );
}