import { useEffect } from "react";
import { useState } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  Button,
} from "reactstrap";
import { PostImgShowcase } from "./PostImgShowcase";
import axios from "axios";
import LikeIcon from "../../img/like-icon.png";
import CommentIcon from "../../img/comment-icon.png";
import jwtDecode from "jwt-decode";
import MailIcon from "../../img/mail-icon.png";
import { makeStyles, TextField } from '@material-ui/core';
import {store} from 'react-notifications-component';

const useStyles = makeStyles((theme)=>({
    TextField:{
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
        marginBottom:10
    }
}))

export const EventCardPostArea = (props)=>{
    const classes = useStyles()
    const {eventInfo} = props;
    const [likeNumber,setLikeNumber] = useState(null);
    let time = new Date(eventInfo.created_at);
    let postTime = time.toLocaleDateString()+' '+time.toLocaleTimeString();
    useEffect(()=>{
        console.log('event info in card',eventInfo);
        setLikeNumber(eventInfo.content.likes.length);
    },[])

    const handleRedirect = ()=>{
        window.location.href = `/event/${eventInfo.id}`
    }
    const handleRedProfile = ()=>{
        window.location.href = `/${eventInfo.username}`
    }
    const handleLiked=async (e)=>{
      e.stopPropagation();
      console.log('liked process');
      let token = localStorage.getItem('token');
      let decode = jwtDecode(token);
      let username = decode.username;
      let match = false;
      match = eventInfo.content.likes.find(obj=>obj.user==username)
      if(match){
        //cancel like
      }else{
        let sendLikedReq = await axios({
          url:process.env.REACT_APP_API_SERVER+'/api/post/like',
          data:{user:username,postId:eventInfo.id},
          headers: { Authorization: `Bearer ${token}` },
          method:'post'
        })
        console.log('sendLike req',sendLikedReq);
        if(sendLikedReq.status==200){
          setLikeNumber(likeNumber+1);
        }
        
  
      }
    }
    const handleJoin = async ()=>{
      console.log('i want to join');
      let token = localStorage.getItem('token');
      let decode = jwtDecode(token);
      //check if people want to join is themself

      let newNoti = {
        recipient:eventInfo.username,
        donor:decode.username,
        type:'join_event',

      }
      let content = {
        postId:eventInfo.id,
      }
      newNoti.content = content;
      try {
        let sendNotiReq = await axios({
          url:process.env.REACT_APP_API_SERVER+'/api/post/eventNoti',
          method:'post',
          headers:{Authorization:`Bearer ${token}`},
          data:newNoti
        })
        //console.log('send Noti res',sendNotiReq);
        if(sendNotiReq.status===200){
          store.addNotification({
            title:'Join event request sent!',
            message:'Please wait for other people to confirmed your request',
            type:'success',
            insert:'top',
            container:'top-right',
            // animationIn:['animate__animated','animate__fadeIn'],
            // animationOut:['animate__animated','animate_fadeOut'],
            dismiss:{
                duration:2000,
                onScreen:true
            }
          })
        }else{
          store.addNotification({
            title:'Internal error',
            message:'Please try again later',
            type:'warning',
            insert:'top',
            container:'top-right',
            // animationIn:['animate__animated','animate__fadeIn'],
            // animationOut:['animate__animated','animate_fadeOut'],
            dismiss:{
                duration:2000,
                onScreen:true
            }
        })
        }
      } catch (error) {
        console.log('join event error',error);
      }
      
    }

    return (
        <div className='eventcard-container' onClick={handleRedirect}>
            <Card>
        <img onClick={handleRedProfile} className="userIcon" src={`${process.env.REACT_APP_API_SERVER+eventInfo.imgPath}`} alt="icon" />
        <span className="userName">
          <p> {eventInfo.username} </p>
        </span>
        <div className="mood"></div>
        <CardBody>
          <CardTitle tag="h5"> {eventInfo.content.title} </CardTitle>
          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
        </CardBody>
        <CardBody>
          <div className="card-content">
            <CardText className='mt-0'>{eventInfo.content.caption}</CardText>
            <div style={{marginBottom:'7px',display:'flex',flexDirection:'row','justifyContent':'space-around'}}>
            <TextField
              className={classes.textField}
              label='start time'
              type='datetime-local'
              value={eventInfo.content.start}
              disabled={true}
            />
            <TextField
            className={classes.textField}
            label='end time'
            type='datetime-local'
            value={eventInfo.content.end}
            disabled={true}
            />
            </div>
            
            {/* picture showcase */}
            <PostImgShowcase
                imageList={eventInfo.content.attachPic}
                height='300px'
            />
          </div>
          <CardLink onClick={handleJoin} style={{cursor:'pointer'}}>
            {" "}
            <img src={MailIcon} alt="mail-icon" />{" "}
          </CardLink>
          <p className="create-date"> {postTime} </p>
        </CardBody>
        <div className="post-like-comment-button">
          <div>
            <Button color="secondary" onClick={handleLiked}>
              <p>{likeNumber } Like</p>
              <img src={LikeIcon} className="post-like-btn" alt="Like" />
            </Button>
          </div>

          <div>
            <a href={"/post/"+eventInfo.id}>
              <Button color="secondary">
                <p>{eventInfo.content.comments.length} Comment</p>
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
    )
}