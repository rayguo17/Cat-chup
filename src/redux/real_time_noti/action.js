

export const ADD_NEW_NOTI_ACTION = "ADD_NEW_NOTI_ACTION";
export const CLEAR_ALL_NOTI_ACTION='CLEAR_ALL_NOTI_ACTION';

export function addNewNotiAction(newNoti){
    return {
        type:ADD_NEW_NOTI_ACTION,
        newNoti:newNoti
    }
}
export function clearAllNotiAction(){
    return {
        type:CLEAR_ALL_NOTI_ACTION,
    }
}