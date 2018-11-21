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
    return state.update('categories',(categories)=>{
        if(categories.some(category=>category._id==action.category._id)){
            return categories.map(category=>{
                if(category._id==action.category._id){
                    category = action.category
                }
                return category
            })
        }else{
            return categories.push(action.category)
        }
        
    })
})
reducerMap.set(types.DELETE_SHARE_CATEGORY,(state,action) => {

    return state.update('categories',(categories)=>categories.filter(category => category._id != action.category))
})
reducerMap.set(types.SAVE_SHARE_ITEM, (state, action) => {
    return state.update('categories',(categories)=>{
        return categories.map(category=>{
            if(category._id == action.item.category){
                if(category.children.some(item => item._id == action.item._id)){
                    category.children = category.children.map(item => {
                        if(item._id == action.item._id){
                            item = action.item
                        }
                        return item
                    })
                }else{
                    category.children.push(action.item)
                }
            }
            return category
        })
    })
})

reducerMap.set(types.DELETE_SHARE_ITEM,(state,action) => {

    return state.update('categories',(categories)=>{
        return categories.map(category => {
            console.error(category)
            if(category._id == action.category){
                category.children = category.children.filter(item=>item._id!=action._id)
            }
            console.error(category)
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