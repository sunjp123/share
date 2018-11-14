



const storeList = (()=>{
    let cache = {};

    function importAll (r) {
        r.keys().forEach(key => cache[key] = r(key).default);
    }

    importAll(require.context('../',true,/f_.*\/stores?\/index.jsx/))

    return  Object.assign.apply(null,Object.values(cache))
})()

const reducerList = (()=>{
    let cache = {};

    function importAll (r) {
        r.keys().forEach(key => cache[key] = r(key).default);
    }

    importAll(require.context('../',true,/f_.*\/reducers?\/index.jsx/))

    return Object.assign.apply(null,Object.values(cache))
})()

import { createStore } from "redux"
import { combineReducers } from 'redux-immutable'
import Immutable from 'immutable'
import base from './base.jsx'

const defaultReducers = combineReducers(reducerList);

const defaultStore = Immutable.fromJS(storeList);



const store = createStore(
    defaultReducers,
    defaultStore,
    base.devTool
)
export default store