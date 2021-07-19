import { TextareaAutosize,Button } from '@material-ui/core';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MoodIcon from '../../img/moodIcon.png'
import IncognitoIcon from '../../img/incognitoIcon.png'
import EventsIcon from '../../img/eventsIcon.png'
import PostEmoji from '../../img/post_smile-emoji_icon.png'
import UploadImageIcon from '../../img/upload_imageIcon.png'
import ReactImageUploading from 'react-images-uploading';
import { PostImageShowcase } from './PostImageShowcase';
import { EmojiPopper } from './EmojiPopper';
import { useRef } from 'react';
import { addNewPostThunk } from '../../redux/post/action';
import FriendGroupSelector from './FriendGroupSelector';

export const CreatePostModal = (props)=>{
  const dispatch = useDispatch();
    const {
        className,
        toggle,modal
      } = props;
     const userInfoStore = useSelector(state=>state.userInfoStore) ;
     const userInfo = userInfoStore.userInfo;

     //FOR EMOJI PICKER POPPER
     const [anchorEl,setAnchorEl] = useState(null);
     const showEmojiPicker=(e)=>{
        setAnchorEl(anchorEl?null:e.currentTarget);
     }
     const cursorRef = useRef(null);
     const onEmojiClick = (e,emojiObject)=>{
        const cursor = cursorRef.current.selectionStart;
        const text = formik.values.caption.slice(0,cursor)+emojiObject.emoji+formik.values.caption.slice(cursor);
        formik.setFieldValue('caption',text);
     }
     const open = Boolean(anchorEl);
     const id=open?"transitions-popper":undefined;
     const closeEmojiPicker = ()=>{
       console.log('try to close emoji')
       setAnchorEl(null);
     }

     //FOR VISIBLE FRIEND GROUP SELECTOR
     const friendListStore = useSelector(state=>state.friendListStore);
     const friendList = friendListStore.friendList;
     console.log('friendList',friendList);
     const friendGroup = Object.keys(friendList);
     

     //FOR FORMIK FORM CONTROL
     const formik = useFormik({
       initialValues:{
          caption:"",
          attachPic:[],
          ownerName:userInfo.username,
          visible_group:friendGroup[0],
       },
       onSubmit:values=>{
          console.log(values.caption);
          dispatch(addNewPostThunk(values));
          toggle();
       }

     })
     const setImageChange = (imageList)=>{
       formik.setFieldValue('attachPic',imageList)
     }
    
     useEffect(()=>{
        //setUserInfo(userInfoStore.userInfo);
        console.log('i am reset')
        formik.resetForm({
          values:{
            caption:"",
            attachPic:[],
            ownerName:userInfo.username,
            visible_group:friendGroup[0],
          }
        })
     },[userInfoStore,modal,friendList])
      return (
        <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody className='px-4'>
              <div className='row'>
                <div style={{backgroundImage:`url(${userInfo?process.env.REACT_APP_API_SERVER+userInfo.imgPath:null})`,width:'50px',height:'50px',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center',borderRadius:'50%',backgroundColor:'white'}}  className="col-3">

                </div>
                <div className='col-3'>
                    <h4 className='pt-2'>{userInfo?userInfo.username:null}</h4>
                </div>
              </div>
              <div className='mt-2' >
                  <form id='post-form' onSubmit={formik.handleSubmit}>
                    
                      <TextareaAutosize
                        ref={cursorRef}
                        className='message-textarea'
                        placeholder={`What's on your mind, ${userInfo?userInfo.username:null}?`}
                        id='caption'
                        name='caption'
                        value={formik.values.caption}
                        onChange={formik.handleChange}
                      />
                      {/* TODO:// use a portal tag to wrap it so don't need to put inside */}
                      <ReactImageUploading
                        multiple
                        value={formik.values.attachPic}
                        onChange={setImageChange}
                        maxNumber={4}
                        dataURLKey='data_url'
                      >
                        {
                          ({
                            imageList,
                            onImageUpload,
                            onImageRemoveAll,
                            onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps,
                          }) => {
                            return (
                              <div>
                                <PostImageShowcase
                                  imageList={imageList}
                                  onImageRemove={onImageRemove}
                                />
                                <FriendGroupSelector
                                  friendGroup={friendGroup}
                                  selectedGroup={formik.values.visible_group}
                                  handleSelect={formik.handleChange}
                                />
                                  <hr className='mt-0'/>
                                <div style={{display:'flex',justifyContent:'start',flexDirection:'row'}}>
                                  <div className='add-on-function-post-btn' style={{backgroundImage:`url(${MoodIcon})`}}></div>
                                  <div className='add-on-function-post-btn' style={{backgroundImage:`url(${IncognitoIcon})`}}></div>
                                  <div className='add-on-function-post-btn' style={{backgroundImage:`url(${EventsIcon})`}}></div>
                                  <div className='add-on-function-post-btn add-on-emoji-btn'   onClick={showEmojiPicker} onBlur={closeEmojiPicker} style={{backgroundImage:`url(${PostEmoji})`}}></div>
                                  <div className='add-on-function-post-btn' onClick={onImageUpload} style={{backgroundImage:`url(${UploadImageIcon})`,cursor:'pointer'}}></div>
                                </div>
                              </div>
                            )
                          }
                        }
                      
                      
                      </ReactImageUploading>
                      <EmojiPopper
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        handleClickAway={closeEmojiPicker}
                        onEmojiClick={onEmojiClick}
                      />
                      
                  </form>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button className='mx-2' variant='outlined' type='submit' form='post-form' color="primary">Post</Button>{' '}
              <Button variant='outlined' color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
      );
}