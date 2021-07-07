import { useState,useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt,faJedi, faAt, faHourglassEnd, faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons"
import { BgPicDiv } from "./BgPicDiv";
import { ProfilePicDiv } from "./ProfilePicDiv";
import { UploadImage } from "./UploadImage";
import { useFormik } from "formik";
import imageCompression from "browser-image-compression";
import axios from "axios";



export const ProfileEditModal = (props)=>{
    const {
        buttonLabel,className,toggle,modalIsOpen,userInfo,infoChangedState
    } = props;
    
    const [infoChanged,setChanged] = infoChangedState;
    const formik=useFormik({
      initialValues:{
        profilePic:[],
        bgPic:[],
        email:userInfo.email,
        phone:userInfo.phone,
        city:userInfo.city,
        description:userInfo.description
      },
      onSubmit:async values=>{
        toggle();
        // if(values.profilePic[0]){
        //   values.profilePic=values.profilePic[0].file.name
        // }
        // if(values.bgPic[0]){
        //   values.bgPic=values.bgPic[0].file.name
        // }
        
        setEditingProfile(false);
        formik.resetForm();
        //console.log('formik vlaues after reset', formik.values)
        //alert(JSON.stringify(values,null,2));
        if(formik.values.profilePic[0]||formik.values.bgPic[0]||editingProfile){
          await updateProfile(values,userInfo.imgPath,userInfo.bgImgPath,userInfo.username);
          setChanged(!infoChanged);
        }
        
      },
      
    })
    const [editingProfile,setEditingProfile] = useState(false);
    const setProfilePic = (imageList)=>{
      formik.setFieldValue('profilePic',imageList);
    }
    const setBgPic = (imageList)=>{
      formik.setFieldValue('bgPic',imageList);
    }
    const toggleProfileEdit = ()=>{
      setEditingProfile(true);
    }
    const discardProfileChanges = ()=>{
      let profilePic=formik.values.profilePic;
      let bgPic = formik.values.bgPic;
      formik.resetForm();
      formik.setFieldValue('profilePic',profilePic);
      formik.setFieldValue('bgPic',bgPic);
      setEditingProfile(false);

    }
    const cancelEdit= ()=>{
      if(formik.values.profilePic[0]||formik.values.bgPic[0]||editingProfile){
        let cancel = window.confirm('this will discard all the changes,are u sure?');
        if(cancel){
          formik.resetForm();
          setEditingProfile(false);
          toggle();
        }else{
          return null;
        }
      }else{
        toggle();
      }
      // toggle();
      
    }
    useEffect(()=>{
      //console.log('use effect',userInfo.email)
      console.log('images',formik.values);
      formik.resetForm({
        values:{
          profilePic:[],
          bgPic:[],
          email:userInfo.email,
          phone:userInfo.phone,
          city:userInfo.city,
          description:userInfo.description
        }
      })
  },[userInfo])
    return (
        <div>
            
            <Modal isOpen={modalIsOpen} toggle={toggle} className={className}>
              <ModalHeader  style={{borderBottom:'1px solid black !import'}}>Edit Profile</ModalHeader>
               
              <ModalBody>
                <form onSubmit={formik.handleSubmit} id='update-profile-form'>
                    <UploadImage
                      initialPic={userInfo.imgPath}
                      infoChangedState={infoChangedState}
                      title='Profile picture'
                      PicDiv={ProfilePicDiv}
                      newPic={[formik.values.profilePic,setProfilePic]}

                    />
                    <UploadImage
                      initialPic={userInfo.bgImgPath}
                      infoChangedState={infoChangedState}
                      title='Cover photo'
                      PicDiv={BgPicDiv}
                      newPic={[formik.values.bgPic,setBgPic]}
                    />
                    <div style={{position:'relative'}}>
                      <p>Customize your profile</p>
                      {!editingProfile?(<div style={{paddingLeft:'10px',lineHeight:'1'}}>
                      <button type='button' className='btn btn-primary' style={{position:'absolute',right:'0px',top:'0px'}} onClick={toggleProfileEdit}>Edit</button>
                      <p><FontAwesomeIcon icon={faEnvelope}/> email: {userInfo.email}</p>
                      <p><FontAwesomeIcon icon={faPhone}/> phone: {userInfo.phone}</p>
                      <p><FontAwesomeIcon icon={faMapMarkerAlt}/> lives in {userInfo.city}</p>
                      <p><FontAwesomeIcon icon={faJedi}/> bio: {userInfo.description}</p>
                      </div>):(<div style={{paddingLeft:'10px'}}>
                        <button type='button' className='btn btn-danger' style={{position:'absolute',right:'0px',top:'0px'}} onClick={discardProfileChanges}>Discard</button>
                        <div><FontAwesomeIcon icon={faEnvelope}/> <input style={{marginLeft:'2px'}} type="email" name='email' id='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            placeholder='email'
                        /></div>
                        <div><FontAwesomeIcon icon={faPhone}/> <input style={{marginLeft:'2px'}} type="text" name='phone' id='phone'
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            placeholder='phone'
                        /></div>
                        <div><FontAwesomeIcon icon={faMapMarkerAlt}/> <input style={{marginLeft:'6px'}} type="text" name='city' id='city'
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            placeholder='city'
                        /></div>
                        <div ><FontAwesomeIcon style={{verticalAlign:'top',marginTop:'5px',resize:'none'}} icon={faJedi}/> <textarea cols='23' type="text" name='description' id='description'

                            value={formik.values.description}
                            onChange={formik.handleChange}
                            placeholder='description'
                        /></div>
                      </div>)}
                    </div>
                </form>
                
                
                
              </ModalBody>
              
              <ModalFooter>
                <Button color="primary" type='submit' form='update-profile-form'>Save</Button>{' '}
                <Button color="secondary" onClick={cancelEdit}>Cancel</Button>
              </ModalFooter>
            </Modal>
    </div>
    )
}


const updateProfile = async (values,initialProPath,initialbgPath,username)=>{
  console.log('submit',values,initialProPath,initialbgPath);
  return new Promise( async (resolve,reject)=>{
    const options = {
      maxSizeMB:1,
      maxWidthOrHeight:500,
      useWebWorker:true
  }
  let newProfile = {
    email:values.email,
    phone:values.phone,
    city:values.city,
    description:values.description
  }
  let token = localStorage.getItem('token');
  try {
    if(values.bgPic[0]){
      console.log('try to upload bg',values.bgPic[0])
      let compressedImg = await imageCompression(values.bgPic[0].file,options)
      let  bgFormData = new FormData();
              bgFormData.append('profile_pic',compressedImg);
              bgFormData.append('pic_name',compressedImg.name)
              
              let uploadBgImg = await axios({
                  url:process.env.REACT_APP_API_SERVER+'/api/upload-bg-pic',
                  method:'post',
                  data:bgFormData,
                  headers:{'Content-Type':'multipart/form-data'},
              })
              //console.log('uploadImg respond',uploadImg);
              let bgImgPath = uploadBgImg.data;
              newProfile.bgImgPath=bgImgPath;
    }
    if(values.profilePic[0]){
      console.log('try to upload profile',values.profilePic[0])
      let compressedImg = await imageCompression(values.profilePic[0].file,options)
      let  proFormData = new FormData();
              proFormData.append('profile_pic',compressedImg);
              proFormData.append('pic_name',compressedImg.name)
              
              let uploadImg = await axios({
                  url:process.env.REACT_APP_API_SERVER+'/api/upload-profile-pic',
                  method:'post',
                  data:proFormData,
                  headers:{
                    'Content-Type':'multipart/form-data',
  
                },
              })
              //console.log('uploadImg respond',uploadImg);
              let imgPath = uploadImg.data;
              newProfile.imgPath=imgPath;
    }
    let uploadReq = await axios({
      url:process.env.REACT_APP_API_SERVER+`/api/user/profile/${username}`,
      method:'put',
      data:newProfile,
      headers:{
        Authorization:`Bearer ${token}`
      }

    })
    if(uploadReq){
      resolve('upload success')
    }
  } catch (error) {
    console.log('update profile error',error)
    reject(error);
  }
  })
  
  
}