import { useState } from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button, 
  Modal, ModalHeader, ModalBody, ModalFooter 
} from 'reactstrap';
import MailIcon from '../img/mail-icon.png'

const Post = (props) => {

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;


  return (
    <div>
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
              <img src="https://toppng.com/uploads/preview/like-facebook-115510608767rnvjbpaln.png" style={{width:"20px", height:"20px"}} alt="Like" />
            </Button>
          </div>

          <div>
          <Button color="secondary">
              <p>Comment</p>
              <img src="https://www.vhv.rs/dpng/d/21-215761_twitter-comment-icon-png-transparent-png.png" style={{width:"20px", height:"20px"}} alt="Like" />
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle} close={closeBtn}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
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