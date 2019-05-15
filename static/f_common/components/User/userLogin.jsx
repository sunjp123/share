import React from "react";
import { JSEncrypt } from "jsencrypt"

import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/core
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
// @material-ui/icons
// import Cloud from "@material-ui/icons/Cloud";

// core components
import DialogComponent from "../Dialog/Dialog";
import DialogTitleComponent from "../Dialog/DialogTitle";
import DialogContent from "../Dialog/DialogContent";
import DialogActionComponent from "../Dialog/DialogAction";
import CustomInput from "../CustomInput/CustomInput";

const dialogStyle = {
    paper:{
      width:"500px"
    }
}

class UserInfo extends React.Component {
  constructor(props){
    super(props)
    this.onContactChange = this.onContactChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)

    this.onItemConfirm = this.onItemConfirm.bind(this)
    this.onItemCancel = this.onItemCancel.bind(this)

    this.state = {
        contact:{
            labelText:'手机、邮箱或昵称',
            inputProps:{
                placeholder:'请填写有效的手机、邮箱或昵称',
                onChange:this.onContactChange,
                value:'',
            },
            error:false,
            success:false,
        },
        password:{
            labelText:'密码',
            inputProps:{
                placeholder:'请填写密码',
                type:'password',
                onChange:this.onPasswordChange,
                value:'',
            },
            error:false,
            success:false,
        }
    }
  }
  onContactChange(ev) {
     const success = !!ev.target.value
     const contact = {
         ...this.state.contact,
        inputProps:{
            ...this.state.contact.inputProps,
            value:ev.target.value
        },
        error:!success,
        success
     }
     this.setState({
        contact
     })
  }
  onPasswordChange(ev) {
    const success = !!ev.target.value
    const password = {
        ...this.state.password,
       inputProps:{
           ...this.state.password.inputProps,
           value:ev.target.value
       },
       error:!success,
       success
    }
    this.setState({
        password
    })
  }

  onItemConfirm(){
    let params = {
        contact:this.state.contact.inputProps.value,
        password:this.state.password.inputProps.value
    };
    this.props.fetchLoginUser(params)
  }
  onItemCancel(){
    this.props.onCancel()
  }

  render() {
    return (
      <React.Fragment>
        <DialogContent>
            <CustomInput id={'user-item-dialog-contact'}
                formControlProps={
                  {className:'item-form'}
                }  
                {...this.state.contact}
              />
            <CustomInput id={'user-item-dialog-password'}
                formControlProps={
                  {className:'item-form'}
                }  
                {...this.state.password}    
            />
        </DialogContent>
        <DialogActionComponent>
          <Button onClick={this.onItemConfirm} >登录</Button>
          <Button onClick={this.onItemCancel} >取消</Button>
        </DialogActionComponent>
      </React.Fragment>
      
    );
  }
}

export default withStyles(dialogStyle)(UserInfo);
