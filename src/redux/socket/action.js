import jwtDecode from 'jwt-decode'
import { store } from 'react-notifications-component'
import webSocket from 'socket.io-client'
import { loadNotiThunk } from '../notification/action'
import { addNewNotiAction } from '../real_time_noti/action'

export const SOCKET_CONNECT_SUCCESS_ACTION = "SOCKET_CONNECT_SUCCESS_ACTION"
export const SOCKET_CONNECT_FAILURE_ACTION = 'SOCKET_CONNECT_FAILURE_ACTION'

export function socketConnectSuccessAction(webSocket){
    return {
        type:SOCKET_CONNECT_SUCCESS_ACTION,
        webSocket:webSocket
    }
}
export function socketConnectFailureAction(){
    return {
        type:SOCKET_CONNECT_FAILURE_ACTION
    }
}

export function socketConnectThunk(){
    let token = localStorage.getItem('token');
    return (dispatch)=>{
        let newWebSocket = webSocket(process.env.REACT_APP_API_SERVER+'/noti',{
            query:{token},
            forceNew:true
        });
        console.log('inside thunk', newWebSocket);
        if(newWebSocket){
            setupSocket(newWebSocket,dispatch);
            dispatch(socketConnectSuccessAction(newWebSocket));
        }else{
            dispatch(socketConnectFailureAction());
        }
    }
}
const setupSocket = (ws,dispatch)=>{
    let token = localStorage.getItem('token');
    let decode = jwtDecode(token);
    let username = decode.username;

    ws.on('like',(data)=>{
        console.log('i have been liked',data);
        if(data.recipient===username){
            store.addNotification({
                title:'new like',
                message:'you got a like from '+data.donor,
                insert:'top',
                container:'bottom-right',
                type:'default',
                dismiss:{
                    duration:2000,
                    onScreen:true,
                }
            })
            dispatch(loadNotiThunk(username));
            dispatch(addNewNotiAction(data));

        }
    });
    ws.on('comment',(data)=>{
        console.log('i am commented',data);
        if(data.recipient===username){
            store.addNotification({
                title:'new comment',
                message:'you got a comment from '+data.donor,
                insert:'top',
                container:'bottom-right',
                type:'default',
                dismiss:{
                    duration:2000,
                    onScreen:true,
                }
            })
            dispatch(loadNotiThunk(username));
            dispatch(addNewNotiAction(data));

        }
    });
    ws.on('join_event',(data)=>{
        console.log('join my event',data);
        if(data.recipient===username){
            store.addNotification({
                title:'new join request',
                message:data.donor+' want to join your event ',
                insert:'top',
                container:'bottom-right',
                type:'default',
                dismiss:{
                    duration:2000,
                    onScreen:true,
                }
            })
            dispatch(loadNotiThunk(username));
            dispatch(addNewNotiAction(data));
        }
    });
    ws.on('friend_request',(data)=>{
        console.log('friend request',data);
        if(data.recipient===username){
            store.addNotification({
                title:'new friend request',
                message:data.donor+' want to be your friend ',
                insert:'top',
                container:'bottom-right',
                type:'default',
                dismiss:{
                    duration:2000,
                    onScreen:true,
                }
            })
            dispatch(loadNotiThunk(username));
            dispatch(addNewNotiAction(data));
        }
    })
    
}