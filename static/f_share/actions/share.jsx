import { fetchGet, fetchPost } from '../../public/http'

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

export const F_SHARE_FETCH_SAVE_SHARE_CATEGORY = (name)=>{
    return (dispatch) =>{
        fetchPost('/share/save/category',{name}).then(res => res.data).then(json =>{
            console.log(json)
        })
    }
}