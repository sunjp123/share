import * as types from '../constants/share'
import { fetchGet, fetchPost } from '../../public/http'
import { API } from '../constants/api'
import { rejects } from 'assert';
const F_SHARE_SAVE_SHARE_CATEGORY = (category)=>({
    type:types.SAVE_SHARE_CATEGORY,
    category
})
const F_SHARE_DELETE_SHARE_CATEGORY = (category)=>({
    type:types.DELETE_SHARE_CATEGORY,
    category
})
const F_SHARE_INIT_DATA_ACTION = (categories)=>({
    type:types.INIT_DATA,
    categories
})
const F_SHARE_SAVE_SHARE_ITEM = (item)=>({
    type:types.SAVE_SHARE_ITEM,
    item
})
const F_SHARE_DELETE_SHARE_ITEM = (category,_id)=>({
    type:types.DELETE_SHARE_ITEM,
    category,
    _id
})
export const F_SHARE_FETCH_SHARE_INIT_ACTION = (page)=>{
    return (dispatch/*, getState*/) => {
        fetchPost(`${API.getShareList}${page=='public'?'':('/'+window.__USER_INFO__._id)}`).then(res => res.data).then((json) => {
            dispatch(F_SHARE_INIT_DATA_ACTION(json.res||[]));
        });
    }
}

export const F_SHARE_FETCH_SAVE_SHARE_CATEGORY = (page,category,resolve,reject)=>{
    return (dispatch) => { 
        fetchPost(API.saveShareCategory,category).then(res => res.data).then(json =>{
            if(!(page=='public'&&!category.publicFlag) && json.status){
                dispatch(F_SHARE_SAVE_SHARE_CATEGORY(json.res))
            }
            resolve(json)
        }).catch(e => {
            reject(e)
        })
    }
}
export const F_SHARE_FETCH_DELETE_SHARE_CATEGORY = (category,resolve,reject)=>{
    return (dispatch) => { 
        fetchGet(`/api/share/delete/category/${category}`).then(res => res.data).then(json =>{
            if(json.status){
                dispatch(F_SHARE_DELETE_SHARE_CATEGORY(category))
            }
            resolve(json)
        }).catch(e => {
            reject(e)
        })
    }
}
export const F_SHARE_FETCH_SAVE_SHARE_ITEM = (item,resolve,reject)=>{
    return (dispatch) => { 
        fetchPost('/api/share/save/item',item).then(res => res.data).then(json =>{
            json.status&&dispatch(F_SHARE_SAVE_SHARE_ITEM(json.res))
            resolve(json)
        }).catch(e => {
            reject(e)
        })
    }
}
export const F_SHARE_FETCH_DELETE_SHARE_ITEM = (item,resolve,reject)=>{
    return (dispatch) => {
        fetchGet(`/api/share/delete/category/${item.category}/item/${item._id}`).then(res => res.data).then(json =>{
            dispatch(F_SHARE_DELETE_SHARE_ITEM(item.category,item._id))
            resolve(json)
        }).catch(e => {
            reject(e)
        })
    }
}
export const F_SHARE_FETCH_UPLOAD_FILE = (file,onUploadProgress,resolve,reject)=>{
    return (dispatch) => {
        fetchPost(API.fileUpload,file,{onUploadProgress}).then(res => res.data).then(json =>{
            resolve(json)
        }).catch(e => {
            reject(e)
        })
    }
}

export const F_COMMON_FETCH_SEARCH = (params,resolve,reject)=>{
    return (dispatch/*, getState*/) => {
        fetchPost(`${API.getSearchList}`,params).then(res => res.data).then((json) => {
            dispatch(F_SHARE_INIT_DATA_ACTION(json.res||[]));
            resolve(json)
        }).catch(e=>{
            reject(e)
        })
    }
}