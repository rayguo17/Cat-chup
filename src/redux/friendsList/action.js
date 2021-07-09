import axios from "axios";

export const LOAD_FRIEND_SUCCESS_ACTION = 'LOAD_FRIEND_SUCCESS_ACTION';
export const LOAD_FRIEND_FAILURE_ACTION = 'LOAD_FRIEND_FAILURE_ACTION';
export const ADD_FRIEND_SUCCESS_ACTION = 'ADD_FRIEND_SUCCESS_ACTION';
export const ADD_FRIEND_FAILURE_ACTION = 'ADD_FRIEND_FAILURE_ACTION';


export function loadFriendSuccessAction(friendList){
    return {
        type:LOAD_FRIEND_SUCCESS_ACTION,
        friendList:friendList
    }
}

export function loadFriendFailureAction(){
    return {
        type:LOAD_FRIEND_FAILURE_ACTION
    }
}

export function addFriendSuccessAction(){

}
export function addFriendFailureAction(){

}

export function loadFriendThunk(user_id){
    return async (dispatch)=>{
        let token = localStorage.getItem('token');
        try {
            let friendReq = await axios({
                url:process.env.REACT_APP_API_SERVER+'/api/user/friends/'+user_id,
                headers:{Authorization:`Bearer ${token}`}
            })
            console.log('load friend req',typeof friendReq.data.friends_list);
            if(friendReq.data){
                if(friendReq.data.friends_list){
                    dispatch(loadFriendSuccessAction(friendReq.data.friends_list));
                }else{
                    dispatch(loadFriendFailureAction())
                }
            }else{
                dispatch(loadFriendFailureAction())
            }
            
        } catch (error) {
            console.log(LOAD_FRIEND_FAILURE_ACTION,error);
            dispatch(loadFriendFailureAction());
        }
    }
}