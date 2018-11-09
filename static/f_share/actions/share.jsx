import { fetchGet } from '../../public/http'

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