import { GIT_USER_LOADING, GIT_USER_SUCCESS, GIT_USER_ERR } from "./actionTypes";

const handleGitUserLoading=()=>{
    return{
        type:GIT_USER_LOADING
    }
}
const handleGitUserErr=()=>{
    return{
        type:GIT_USER_ERR
    }
}
const handleGitUserSuccess=(payload)=>{
    return{
        type:GIT_USER_SUCCESS,
        payload
    }
}


export const handleGitUserFetch=(data)=>(dispatch)=>{
dispatch(handleGitUserLoading())
fetch(``)
.then(res=>res.json())
.then(data=>dispatch(handleGitUserSuccess(data)))
.catch(err=>dispatch(handleGitUserErr()))
}

