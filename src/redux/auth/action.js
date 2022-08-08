import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERR, USER_PROFILE_LOADING, USER_PROFILE_SUCCESS, USER_PROFILE_ERR, USER_REGISTRATION_LOADING, USER_REGISTRATION_SUCCESS, USER_REGISTRATION_ERR }  from "./actiontypes";

export const handleLoginLoading=()=>{
return {
    type:LOGIN_LOADING
}
}

export const handleLoginErr=()=>{
    return {
        type:LOGIN_ERR
    }
    }
export const handleLoginSuccess=(payload)=>{
return {
    type:LOGIN_SUCCESS,
    payload
}
}

export const handleRegistrationLoading=()=>{
return {
    type:USER_PROFILE_SUCCESS
}
}

export const handleRegistrationErr=()=>{
    return {
        type:USER_REGISTRATION_ERR
    }
    }
export const handleRegistrationSuccess=(payload)=>{
return {
    type:USER_REGISTRATION_SUCCESS,
    payload
}
}

export const handleProfileLoading=()=>{
    return {
        type:USER_PROFILE_LOADING
    }
    }
    
    export const handleProfileErr=()=>{
        return {
            type:USER_PROFILE_ERR
        }
        }
    export const handleProfileSuccess=(payload)=>{
    return {
        type:USER_PROFILE_SUCCESS,
        payload
    }
    }


    export const handleLoginFetch=(data)=>(dispatch)=>{
        dispatch(handleLoginLoading())
        fetch(``,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>dispatch(handleLoginSuccess(data.token)))
        .catch(err=>dispatch(handleLoginErr()))
    }

    
    export const handleRegistrationFetch=(data)=>(dispatch)=>{
        dispatch(handleRegistrationLoading())
        fetch(``,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>dispatch(handleRegistrationSuccess(data.token)))
        .catch(err=>dispatch(handleRegistrationErr()))
    }


    export const handleProfileFetch=()=>(dispatch)=>{
        dispatch(handleProfileLoading())
        fetch(``)
        .then(res=>res.json())
        .then(data=>dispatch(handleProfileSuccess(data)))
        .catch(err=>dispatch(handleProfileErr()))
    }

