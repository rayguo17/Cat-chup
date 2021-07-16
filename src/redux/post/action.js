import {store} from 'react-notifications-component';
import axios from "axios";
import imageCompression from "browser-image-compression";

export const LOAD_POST_SUCCESS_ACTION = 'LOAD_POST_SUCCESS_ACTION';
export const LOAD_POST_FAILURE_ACTION = 'LOAD_POST_FAILURE_ACTION';
export const ADD_NEW_POST_SUCCESS_ACTION = 'ADD_NEW_POST_SUCCESS_ACTION';
export const ADD_NEW_POST_FAILURE_ACTION = 'ADD_NEW_POST_FAILURE_ACTION';

export function loadPostSuccessAction(postList){
    return {
        type:LOAD_POST_SUCCESS_ACTION,
        postList:postList
    }
}
export function loadPostFailureAction(){
    return {
        type:LOAD_POST_FAILURE_ACTION,
    }
}

export function addNewPostSuccessAction(newPost){
    return {
        type:ADD_NEW_POST_SUCCESS_ACTION,
        newPost:newPost
    }
}
export function addNewPostFailureAction(){
    return {
        type:ADD_NEW_POST_FAILURE_ACTION
    }
}

export function addNewPostThunk(values){
    return async (dispatch)=>{
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 500,
            useWebWorker: true
        }
        let token = localStorage.getItem('token');
        try {
            console.log('add new post thunk',values);
            let compressImagePromise = [];
            for(let i=0;i<values.attachPic.length;i++){
                compressImagePromise.push(imageCompression(values.attachPic[i].file,options));

            }
            let compressRes = await Promise.all(compressImagePromise);
            console.log('compress res',compressRes);
            let savePicPromises=[];
            for(let i=0;i<compressRes.length;i++){
                let formData = new FormData();
                formData.append('post_pic',compressRes[i]);
                formData.append('pic_name',compressRes[i].name);
                let uploadImg = axios({
                    url: process.env.REACT_APP_API_SERVER + '/api/upload-post-pic',
                    method: 'post',
                    data: formData,
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                savePicPromises.push(uploadImg);
            }
            let savePicRes = await Promise.all(savePicPromises);
            console.log('save picture res', savePicRes);
            let newPost = {};
            newPost.owner_name=values.ownerName;
            let content ={caption:values.caption,attachPic:[]}
            savePicRes.map((imgReq,index)=>{
                content.attachPic.push(imgReq.data);
            })
            newPost.content=content;
            let addNewPost = await axios({
                url:process.env.REACT_APP_API_SERVER+'/api/post',
                method:'post',
                data:newPost,
                headers:{Authorization:`Bearer ${token}`},
            })
            console.log('add new post result',addNewPost);
            if(addNewPost.status===200){
                dispatch(addNewPostSuccessAction(newPost))
                store.addNotification({
                    title:'add post success!',
                    message:'Congratulations!',
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
                dispatch(addNewPostFailureAction());
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
            console.log('add new post thunk error',error);
            dispatch(addNewPostFailureAction());
        }
    }
}

