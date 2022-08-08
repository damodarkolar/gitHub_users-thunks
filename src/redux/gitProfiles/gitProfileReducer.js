import { Action } from "history";
import { GIT_USER_LOADING, GIT_USER_SUCCESS, GIT_USER_ERR } from "./actionTypes";

const initialState={
    gitUserLoading:false,
    gitUserErr:false,
    gitUserData:[]
}
export const gitUserReducer=(store=initialState, action)=>{
    switch (action.type) {
        case GIT_USER_LOADING:
            return{
                gitUserLoading:true,
                gitUserErr:false
            }
        case GIT_USER_ERR:
            return{
                gitUserLoading:false,
                gitUserErr:true
            }
        case GIT_USER_SUCCESS:
            return{
                gitUserLoading:false,
                gitUserErr:false,
                gitUserData:action.payload
            }    
        default:
            return{
                ...store
            }
    }
}