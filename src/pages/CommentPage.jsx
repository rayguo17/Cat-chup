import { Container, Row, Col } from 'reactstrap';
import PostArea from "../components/PostArea";
import '../stylesheet/commentPage.css'
import backButton from '../svg/backButton.svg'
import Comments from '../components/Comments';
import { useState } from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button, 
  Modal, ModalHeader, ModalBody, ModalFooter 
} from 'reactstrap';
import { TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import LikeIcon from '../img/like-icon.png'
import CommentIcon from '../img/comment-icon.png'

const CommentPage = () => {

    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const [modal, setModal] = useState(false);

    const postComment = (e) => 
    {
    e.preventDefault();
    setComment = ""
    }

    return (
        <div className="col-9 px-0 mx-0 row comment-part">
            <a href="/home">
                <div className="back-btn-container" >
                    <img src={backButton} alt="back" className="back-btn" />
                </div>
            </a>

            <div className="comment-card">
            <Card>
                  <img className="userIcon" src="https://image.flaticon.com/icons/png/512/146/146005.png" alt="icon" style={{width:"50px", height:"50px"}}/>
                  <span className="userName"><p>Username</p></span>
                  <div className="mood"></div>
                    <CardBody>
                      {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                    </CardBody>
                    <CardBody>
                      <div className="card-content" >
                        <CardText style={{marginTop:"30px"}}>It is a good day.</CardText>
                        <img width="100%" src="https://img.huffingtonpost.com/asset/5e0f68ec2500003b1998fb2e.jpeg?cache=YqiWjN9UVt&ops=crop_34_446_5966_3406%2Cscalefit_720_noupscale" alt="Card image cap" />
                      </div>

                      
                    </CardBody>

                    <div className="like-comment-button">

                      <div>
                      <button >
                          <p>{"1"}</p>
                          <p>Comment</p>
                          <img src={CommentIcon} className="comment-icon" alt="Comment" />
                        </button>
                      </div>

                      <div>
                        <button>
                          <p>{"1"}</p>
                          <p>Like</p>
                          <img src={LikeIcon} className="like-icon" alt="Like" />
                        </button>
                      </div>

                    </div>

                    <div className="post-comments">
                      <Comments />
                    </div>

                    <form style={{display:"flex" }}>
                      <TextField
                        // label="Size"
                        variant="outlined"
                        size="small"
                        placeholder="add comment"
                        defaultValue={comment}
                        style={{flex:"1"}}
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
            </div>
        

        </div>
    )
}


export default CommentPage;