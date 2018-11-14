import * as types from '../constants/share'
import { fetchGet, fetchPost } from '../../public/http'

const F_SHARE_SAVE_SHARE_CATEGORY = (category)=>({
    type:types.SAVE_SHARE_CATEGORY,
    category
})

export const F_SHARE_FETCH_SHARE_INIT_ACTION = ()=>{
    return (dispatch, getState) => {
        let state = getState();
        fetchGet('/share/list').then(res => res.data).then((data) => {
            console.log(state)
            console.log(data)
            // dispatch(INIT_DATA_ACTION(data));
        });
    }
}

export const F_SHARE_FETCH_SAVE_SHARE_CATEGORY = (name,resolve,reject)=>{
    return (dispatch) => { 
        fetchPost('/share/save/category',{name}).then(res => res.data).then(json =>{
            console.error(json)
            dispatch(F_SHARE_SAVE_SHARE_CATEGORY(json.res))
            resolve(json)
        }).catch(e => {
            reject(e)
        })
    }
}