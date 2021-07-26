import { ADD_NEW_NOTI_ACTION, CLEAR_ALL_NOTI_ACTION } from "./action"


const initialState = {
    notiList:[]
}

const realTimeNotiReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADD_NEW_NOTI_ACTION:
            return {
                notiList:[...state.notiList,action.newNoti]
            }
        case CLEAR_ALL_NOTI_ACTION:
            return {
                notiList:[]
            }
        default:
            return state
    }

}

export default realTimeNotiReducer;