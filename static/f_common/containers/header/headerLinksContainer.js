import React from 'react'
import { connect } from 'react-redux'

import HeaderLinks from '../../components/Header/HeaderLinks'
import * as userAction from '../../actions/User/userInfo'
import { F_COMMON_FETCH_SEARCH } from '../../../f_share/actions/share'

class HeaderLinksContainer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <HeaderLinks {...this.props}/>
        )
    }
}

const mapStateToProps = (state,props) => {
    return {
        ...props
    }   
}

const mapDispatchToProps = (dispatch) => ({
    fetchLogoutUser:()=>{
        dispatch(userAction.F_COMMON_FETCH_LOGOUT_USER_ACTION())
    },
    fetchGetUserMessage:()=>{
        return new Promise((resolve,reject)=>{
            dispatch(userAction.F_COMMON_FETCH_USER_MESSAGE_ACTION(resolve,reject))
        })
    },
    fetchReadMessage:(_id)=>{
        return new Promise((resolve,reject)=>{
            dispatch(userAction.F_COMMON_FETCH_USER_READ_MESSAGE_ACTION(_id,resolve,reject))
        })
    },
    fetchSearch:(param)=>{
        return new Promise((resolve,reject)=>{
            dispatch(F_COMMON_FETCH_SEARCH(param,resolve,reject))
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLinksContainer);