import React from 'react'
import { connect } from 'react-redux'

import HeaderLinks from '../../components/Header/HeaderLinks'
import * as userAction from '../../actions/User/userInfo'


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
    }  
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLinksContainer);