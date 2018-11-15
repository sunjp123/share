import * as types from '../constants/share'
import { fetchGet, fetchPost } from '../../public/http'

const F_SHARE_SAVE_SHARE_CATEGORY = (category)=>({
    type:types.SAVE_SHARE_CATEGORY,
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
export const F_SHARE_FETCH_SHARE_INIT_ACTION = ()=>{
    return (dispatch/*, getState*/) => {
        // let state = getState();
        fetchGet('/share/list').then(res => res.data).then((json) => {
            dispatch(F_SHARE_INIT_DATA_ACTION(json.res));
        });
    }
}

export const F_SHARE_FETCH_SAVE_SHARE_CATEGORY = (name,resolve,reject)=>{
    return (dispatch) => { 
        fetchPost('/share/save/category',{name}).then(res => res.data).then(json =>{
            dispatch(F_SHARE_SAVE_SHARE_CATEGORY(json.res))
            resolve(json)
        }).catch(e => {
            reject(e)
        })
    }
}
export const F_SHARE_FETCH_SAVE_SHARE_ITEM = (item,resolve,reject)=>{
    return (dispatch) => { 
        fetchPost('/share/save/item',item).then(res => res.data).then(json =>{
            json.res&&dispatch(F_SHARE_SAVE_SHARE_ITEM(json.res))
            resolve(json)
        }).catch(e => {
            reject(e)
        })
    }
}