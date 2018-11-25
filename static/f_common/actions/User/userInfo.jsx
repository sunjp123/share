import * as types from '../../constants/User/userInfo'
import { fetchPost } from '../../../public/http'
import { API } from '../../constants/api'

export const F_COMMON_FETCH_LOGIN_USER_ACTION = (params)=>{
    return (dispatch/*, getState*/) => {
        // let state = getState();
        fetchPost(API.loginUser,params).then(res => res.data).then((json) => {
            if(json.status){
                window.location.reload()
            }
        });
    }
}

export const F_COMMON_FETCH_ADD_USER_ACTION = (params,callback)=>{
    return (dispatch/*, getState*/) => {
        // let state = getState();
        fetchPost(API.addUser,params).then(res => res.data).then((json) => {
            if(json.status){
                window.location.reload()
            }else{
                callback(json.type)
            }
        });
    }
}
export const F_COMMON_FETCH_MODIFY_USER_ACTION = (params,callback)=>{
    return (dispatch/*, getState*/) => {
        // let state = getState();
        fetchPost(API.modifyUser,params).then(res => res.data).then((json) => {
            if(json.status){
                window.location.reload()
            }else{
                callback(json.type)
            }
        });
    }
}
export const F_COMMON_FETCH_LOGOUT_USER_ACTION = (params)=>{
    return (dispatch/*, getState*/) => {
        // let state = getState();
        fetchPost(API.logoutUser,params).then(res => res.data).then((json) => {
            if(json.status){
                window.location.reload()
            }
        });
    }
}

