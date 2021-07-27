import axios from "axios";



export const LOAD_SCHEDULE_SUCCESS_ACTION = 'LOAD_SCHEDULE_SUCCESS_ACTION';
export const LOAD_SCHEDULE_FAILURE_ACTION = 'LOAD_SCHEDUEL_FAILURE_ACTION';
export const ADD_NEW_SCHEDULE_SUCCESS_ACTION = 'ADD_NEW_SCHEDULE_SUCCESS_ACTION';
export const ADD_NEW_SCHEDULE_FAILURE_ACTION = 'ADD_NEW_SCHEDULE_FAILURE_ACTION';

export function loadScheduleSuccessAction(scheduleList){
    return {
        type:LOAD_SCHEDULE_SUCCESS_ACTION,
        scheduleList:scheduleList
    }
}

export function loadScheduleFailureAction(){
    return {
        type:LOAD_SCHEDULE_FAILURE_ACTION
    }
}

export function addNewScheduleSuccessAction(newSchedule){
    return {
        type:ADD_NEW_SCHEDULE_SUCCESS_ACTION,
        newSchedule:newSchedule
    }
}

export function addNewScheduleFailureAction(){
    return {
        type:ADD_NEW_SCHEDULE_FAILURE_ACTION
    }
}

export function loadScheduleThunk(username){
    return async (dispatch)=>{
        try {
            let token = localStorage.getItem('token');
            let getScheduleReq = await axios({
                url:process.env.REACT_APP_API_SERVER+'/api/schedule/'+username,
                headers: { Authorization: `Bearer ${token}` },
            })
            //console.log('load schedule req',getScheduleReq);
            dispatch(loadScheduleSuccessAction(getScheduleReq.data));
        } catch (error) {
            console.log('load schedule thunk error',error)
            dispatch(loadScheduleFailureAction())
        }
    }
}