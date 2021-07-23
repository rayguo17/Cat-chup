import { LOAD_ALLUSERS_SUCCESS_ACTION, LOAD_ALLUSERS_FAILURE_ACTION } from "./action"



const initialState = {
    allUsersList: []
}

const allUsersListReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALLUSERS_SUCCESS_ACTION:
            return {
                allUsersList: action.allUsersInfo
            }
        case LOAD_ALLUSERS_FAILURE_ACTION:
            console.log("FAILURE")
        default:
            return state
    }
}

export default allUsersListReducer;