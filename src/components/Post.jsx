import { useState } from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button, 
  Modal, ModalHeader, ModalBody, ModalFooter 
} from 'reactstrap';
import LikeIcon from '../img/like-icon.png'
import CommentIcon from '../img/comment-icon.png'

const Post = (props) => {

  return (
    <div className="postcard-container">
      <Card >
      <img className="userIcon" src="https://image.flaticon.com/icons/png/512/146/146005.png" alt="icon" />
      <span className="userName"><p>Username</p></span>
      <div className="mood"></div>
        <CardBody>
          <CardTitle tag="h5">POST</CardTitle>
        </CardBody>
        <CardBody>
          <div className="card-content">
            <CardText>It is a good day.</CardText>
            <img width="100%" src="https://img.huffingtonpost.com/asset/5e0f68ec2500003b1998fb2e.jpeg?cache=YqiWjN9UVt&ops=crop_34_446_5966_3406%2Cscalefit_720_noupscale" alt="Card image cap" />
          </div>

          
        </CardBody>

        <div className="post-like-comment-button">
          <div>
            <Button color="secondary">
              <p>{1} Like</p>
              <img src={LikeIcon} className="post-like-btn" alt="Like" />
            </Button>
          </div>

          <div>
          <a href="/comment">
            <Button color="secondary" >
                <p>{1} Comment</p>
                <img src={CommentIcon} className="post-comment-btn" alt="Comment" />
            </Button>
          </a>
            

          </div>
        </div>
      </Card>
    </div>
  );
};

export default Post;