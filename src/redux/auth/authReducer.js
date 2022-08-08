import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERR, USER_PROFILE_LOADING, USER_PROFILE_SUCCESS, USER_PROFILE_ERR, USER_REGISTRATION_LOADING, USER_REGISTRATION_SUCCESS, USER_REGISTRATION_ERR }  from "./actiontypes";
const initialState={
    loginLoading:false,
    loginErr:false,
    token:"",
    userRegistrationLoading:false,
    userRegistrationErr:false,
    userProfileLoading:false,
    userProfileErr:false,
    userProfile:{}
}

export const authReducer=(store=initialState, action)=>{
    switch (action.type) {
        case LOGIN_LOADING:
            return{
                ...store,
                loginLoading:true,
                loginErr:false
            }
        case LOGIN_ERR:
            return{
                ...store,
                loginLoading:false,
                loginErr:true
            }
        case LOGIN_SUCCESS:
            return{
                ...store,
                loginLoading:false,
                loginErr:false,
                token:action.payload
            }
        case USER_REGISTRATION_LOADING:
            return{
                ...store,
                userRegistrationLoading:true,
                userRegistrationErr:false
            }
        case USER_REGISTRATION_ERR:
            return{
                ...store,
                userRegistrationLoading:false,
                userRegistrationErr:true
            }
        case USER_REGISTRATION_SUCCESS:
            return{
                ...store,
                userRegistrationLoading:false,
                userRegistrationErr:false,
                token:action.payload
            }
        case USER_PROFILE_LOADING:
            return{
                ...store,
                userProfileLoading:true,
                userProfileErr:false
            }
        case USER_PROFILE_ERR:
            return{
                ...store,
                userProfileLoading:false,
                userProfileErr:true
            }
        case USER_PROFILE_SUCCESS:
            return{
                ...store,
                userProfileLoading:false,
                userProfileErr:false,
                userProfile:action.payload
            }
            
    
        default:
            return{
                ...store
            }
    }
}