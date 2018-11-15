import * as types from '../constants/share.jsx'

const reducerMap = new Map();

reducerMap.set(types.UPDATE_EXTEND_INFO, (state, action) => {
    return {
        ...state
    }
})

reducerMap.set(types.INIT_DATA, (state, action) => {
    return state.update('categories',(categories)=>categories.concat(action.categories))
})

reducerMap.set(types.SAVE_SHARE_CATEGORY, (state, action) => {
    return state.update('categories',(categories)=>categories.push(action.category))
})

reducerMap.set(types.SAVE_SHARE_ITEM, (state, action) => {
    return state.update('categories',(categories)=>{
        return categories.map(category=>{
            if(category._id == action.item.category){
                category.children.push(action.item)
            }
            return category
        })
    })
})


export default (state, action) => {
    if (reducerMap.has(action.type)) {
        return (reducerMap.get(action.type))(state, action);
    }
    return state?state:null;
}