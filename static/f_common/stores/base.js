import { routerMiddleware } from "react-router-redux" //ConnectedRouter as Router,
import { applyMiddleware } from "redux"
import { persistStore, autoRehydrate } from "redux-persist"
import thunk from "redux-thunk"
import createHistory from "history/createBrowserHistory"
import { composeWithDevTools } from "redux-devtools-extension"
import createLogger from "redux-logger"

const history = createHistory()
const middleware = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV !== "production") {
    middleware.push(createLogger({ collapsed: true }))
}

let devTool = composeWithDevTools(applyMiddleware(...middleware), autoRehydrate())

let restorePersist = (store, blacklist, whitelist) => {
    try {
        persistStore(
            store,
            { blacklist: blacklist, whitelist: whitelist },
            () => { }
        )
    } catch (e) {
        throw new Error("persist store error!", e)
    }
}

export default {
    devTool: devTool,
    restorePersist: restorePersist
}
