import { useState } from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button, 
  Modal, ModalHeader, ModalBody, ModalFooter 
} from 'reactstrap';
import MailIcon from '../img/mail-icon.png';
import Comments from './Comments';
import { TextField } from '@material-ui/core';
import { setTemplateContent } from 'parse5/lib/tree-adapters/default';
import { setCommentRange } from 'typescript';
import SendIcon from '@material-ui/icons/Send';

const Post = (props) => {

  const {
    buttonLabel,
    className
  } = props;

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const postComment = (e) => {
    e.preventDefault();
    setComment = ""
  }

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;


  return (
    <div style={{width:"90%"}}>
      <Card>
      <img className="userIcon" src="https://image.flaticon.com/icons/png/512/146/146005.png" alt="icon" style={{width:"50px", height:"50px"}}/>
      <span className="userName"><p>Username</p></span>
      <div className="mood"></div>
        <CardBody>
          <CardTitle tag="h5">POST</CardTitle>
          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
        </CardBody>
        <CardBody>
          <div className="card-content">
            <CardText>It is a good day.</CardText>
            <img width="100%" src="https://img.huffingtonpost.com/asset/5e0f68ec2500003b1998fb2e.jpeg?cache=YqiWjN9UVt&ops=crop_34_446_5966_3406%2Cscalefit_720_noupscale" alt="Card image cap" />
          </div>

          
        </CardBody>

        <div className="like-comment-button">
          <div>
            <Button color="secondary">
              <p>Like</p>
              {/* <img src="https://toppng.com/uploads/preview/like-facebook-115510608767rnvjbpaln.png" style={{width:"20px", height:"20px"}} alt="Like" /> */}
            </Button>
          </div>

          <div>
          <Button color="secondary" onClick={toggle}>
              <p>Comment</p>
              {/* <img src="https://www.vhv.rs/dpng/d/21-215761_twitter-comment-icon-png-transparent-png.png" style={{width:"20px", height:"20px"}} alt="Like" /> */}
            </Button>
            
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle} close={closeBtn}>Modal title</ModalHeader>
              <ModalBody>
              
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
                      <Button color="secondary" onClick={toggle}>
                          <p>Comment</p>
                          {/* <img src="https://www.vhv.rs/dpng/d/21-215761_twitter-comment-icon-png-transparent-png.png" style={{width:"20px", height:"20px"}} alt="Like" /> */}
                        </Button>
                      </div>

                      <div>
                        <Button color="secondary">
                          <p>Like</p>
                          {/* <img src="https://toppng.com/uploads/preview/like-facebook-115510608767rnvjbpaln.png" style={{width:"20px", height:"20px"}} alt="Like" /> */}
                        </Button>
                      </div>

                    </div>

                    <div className="post_comments">
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

              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Post;