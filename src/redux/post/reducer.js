import { ADD_NEW_POST_FAILURE_ACTION, ADD_NEW_POST_SUCCESS_ACTION, LOAD_POST_FAILURE_ACTION, LOAD_POST_SUCCESS_ACTION } from "./action"


const initialState = {
    postList:[]
}

const postListReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADD_NEW_POST_SUCCESS_ACTION:
            return {
                postList:[action.newPost,...state.postList]
            }
        case LOAD_POST_SUCCESS_ACTION:
            return {
                postList:action.postList
            }
        case LOAD_POST_FAILURE_ACTION:
        case ADD_NEW_POST_FAILURE_ACTION:
        default:
            return state
    }
}

export default postListReducer;