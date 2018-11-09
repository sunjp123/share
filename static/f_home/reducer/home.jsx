import * as types from '../constant/actionTypes'

const reducerMap = new Map();

reducerMap.set(types.UPDATE_EXTEND_INFO, (state, action) => {
    return {
        ...state,
        ...action.data
    }
})

export default (state, action) => {
    if (reducerMap.has(action.type)) {
        return (reducerMap.get(action.type))(state, action);
    }
    return state?state:null;
}