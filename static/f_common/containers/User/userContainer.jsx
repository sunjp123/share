import React from 'react'
import { connect } from 'react-redux'
import withStyles from "@material-ui/core/styles/withStyles";

import * as userAction from '../../actions/User/userInfo'

import CustomTabs from '../../components/CustomTabs/CustomTabs'
import UserInfoComponent from '../../components/User/userInfo'
import UserLoginComponent from '../../components/User/userLogin'
import UserModifyComponent from '../../components/User/userModify'
import DialogComponent from '../../components/Dialog/Dialog'
import DialogTitle from '../../components/Dialog/DialogTitle'

const dialogStyle = {
    paper:{
      width:"400px"
    }
}
class UserInfoContainer extends React.Component{
    constructor(props){
        super(props)
        this.onCancel = this.onCancel.bind(this)
    }
    onCancel() {
        this.props.onCancel()
    }

    render(){
        let { classes ,open } = this.props;
        return (
            <DialogComponent open={open} muiClasses={classes}>
                {
                    window.__USER_INFO__&&window.__USER_INFO__._id?(
                        <React.Fragment>
                        <DialogTitle>
                            修改用户信息
                        </DialogTitle>
                        <UserModifyComponent {...this.props} onCancel={this.onCancel} userInfo={window.__USER_INFO__}/>
                        </React.Fragment>
                    ):(
                        <CustomTabs tabs={[
                            {
                                tabName: "用户登录",
                                tabContent: <UserLoginComponent {...this.props} onCancel={this.onCancel}/>
                            }
                            ,
                            {
                                tabName: "用户注册",
                                tabContent: <UserInfoComponent {...this.props} onCancel={this.onCancel}/>
                            }
                        ]} plainTabs = {true} rtlActive = {false} headerColor={'info'}/>
                    )
                }
                

            </DialogComponent>
            
            
        )
    }
}

const mapStateToProps = (state,props) => {
    return {
        ...props
    }   
}

const mapDispatchToProps = (dispatch) => ({
    fetchLoginUser:(params)=>{
        dispatch(userAction.F_COMMON_FETCH_LOGIN_USER_ACTION(params))
    },
    fetchRegisterUser: (params,callback) => {
        dispatch(userAction.F_COMMON_FETCH_ADD_USER_ACTION(params,callback))
    },
    fetchModifyUser: (params,callback) => {
        dispatch(userAction.F_COMMON_FETCH_MODIFY_USER_ACTION(params,callback))
    }  
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(dialogStyle)(UserInfoContainer));