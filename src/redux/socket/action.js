import webSocket from 'socket.io-client'

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
            query:{token}
        });
        console.log('inside thunk', newWebSocket);
        if(newWebSocket){
            setupSocket(newWebSocket);
            dispatch(socketConnectSuccessAction(newWebSocket));
        }else{
            dispatch(socketConnectFailureAction());
        }
    }
}
const setupSocket = (ws)=>{

}