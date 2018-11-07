import { createStore } from "redux"
import { combineReducers } from 'redux-immutable'
import shareReducers from "../reducer/index"
import base from '../../f_common/stores/base'
import Immutable from 'immutable'

const reducers = combineReducers(shareReducers);

let defaultStore = Immutable.fromJS({
    common: {
        /**
         * 是否显示整个页面的海豚loading图案
         */
        isShowPageLoading: true,
        /**
         * 是否显示x产品加载图案
         */
        isShowXProductLoading: false,
        /**
         * 国家码
         */
        allCountryAreaCode: [],
        /**
         * 延迟查询
         */
        reservationDelay:{
            info:null,
            promise:null,
            checking:false
        }
    },
    pageStep: "2",
    finishQte: false, // Qte是否结束
    needRetryQte: false, //后续是否还需要重试QTE，即进入页面QTE重试次数到达最大值，finishQte也会标记成 true，用这个字段区分是真正完成QTE还是QTE重试次数达到最大值
    notice: {
        noticeList: [],
        thirdClassShow: true
    },
    orderData: orderData,
    prevCond: prevCond,
    flightInfo: flightInfo,
    price: priceInfo
});


const store = createStore(
    reducers,
    defaultStore,
    base.devTool
)
export default store