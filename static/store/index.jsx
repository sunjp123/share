



const storeList = (()=>{
    let cache = {};

    function importAll (r) {
        r.keys().forEach(key => cache[key] = r(key).default);
    }

    importAll(require.context('../',true,/f_.*\/store\/index.jsx/))

    return  Object.assign.apply(null,Object.values(cache))
})()

const reducerList = (()=>{
    let cache = {};

    function importAll (r) {
        r.keys().forEach(key => cache[key] = r(key).default);
    }

    importAll(require.context('../',true,/f_.*\/reducer\/index.jsx/))

    return Object.assign.apply(null,Object.values(cache))
})()

import { createStore } from "redux"
import { persistCombineReducers  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import Immutable from 'immutable'
import base from './base.jsx'

const config = {
    key:"shareAny",
    storage
}

const defaultReducers = persistCombineReducers(config,reducerList);

const defaultStore = Immutable.fromJS(storeList);



const store = createStore(
    defaultReducers,
    storeList,
    base.devTool
)
export default store