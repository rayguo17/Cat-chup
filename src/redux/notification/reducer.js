import { LOAD_NOTIFICATION_FAILURE_ACTION, LOAD_NOTIFICATION_SUCCESS_ACTION } from "./action"


const initialState = {
    notiList:[]
}
const notiListReducer = (state=initialState,action)=>{
    switch(action.type){
        case LOAD_NOTIFICATION_SUCCESS_ACTION:
            return {
                notiList:action.notiList
            }
        case LOAD_NOTIFICATION_FAILURE_ACTION:
        default:
            return state;
    }
}
export default notiListReducer;