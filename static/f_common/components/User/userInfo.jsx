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

import validate from "../../../../util/validate"

const dialogStyle = {
    paper:{
      width:"500px"
    }
}
class InputValue {
  constructor(labelText,placeholder,onChange,type='text'){
    this.labelText = labelText
    this.inputProps = {
      placeholder:placeholder,
      onChange:onChange,
      value:'',
    }
    if(type == 'file'){
      this.inputProps = {
      ...this.inputProps,
      type:'file',
      file:'',
      inputProps:{
        accept:'image/*',
        style:{
          "textIndent":"-200px"
        }
      }}
    }
    this.error = false
    this.success = false
  }
}
class UserInfo extends React.Component {
  constructor(props){
    super(props)
    this.onNameChange = this.onNameChange.bind(this)
    this.onNicknameChange = this.onNicknameChange.bind(this)
    this.onContactChange = this.onContactChange.bind(this)
    this.onAvatorChange = this.onAvatorChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.setFieldValue = this.setFieldValue.bind(this)
    this.onItemConfirm = this.onItemConfirm.bind(this)
    this.onItemCancel = this.onItemCancel.bind(this)

    this.state = {
        name:new InputValue('姓名','请填写真实姓名',this.onNameChange),
        nickname:new InputValue('昵称','昵称',this.onNicknameChange),
        avator:new InputValue('头像','头像',this.onAvatorChange,'file'),
        contact:new InputValue('联系方式','请输入有效手机或邮箱',this.onContactChange),
        password:new InputValue('密码','6位以上，字母+数字+特殊字符如sun@123',this.onPasswordChange)
    }
  }
  onNameChange(ev) {
     const value = ev.target.value
     const success = /^[\u4E00-\u9FA5]+$/.test(value) || /^[a-zA-Z]+$/.test(value)
     const name = {
         ...this.state.name,
        inputProps:{
            ...this.state.name.inputProps,
            value:ev.target.value
        },
        error:!success,
        success
     }
     this.setState({
       name
     })
  }
  onNicknameChange(ev) {
    const success = !!ev.target.value
    const nickname = {
        ...this.state.nickname,
      inputProps:{
          ...this.state.nickname.inputProps,
          value:ev.target.value
      },
      error:!success,
      success
    }
    this.setState({
      nickname
    })
 }
 onContactChange(ev) {
    const value = ev.target.value
    const success = validate.isEmail(value) || validate.isPhone(value)

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
  onAvatorChange(ev){
    const file = ev.target.files[0],success = !!file
    const avator = {
        ...this.state.avator,
      inputProps:{
          ...this.state.avator.inputProps,
          value:ev.target.value,
          file
      },
      error:!success,
      success
    }
    this.setState({
      avator
    })
  }
  onPasswordChange(ev){
    const value = ev.target.value
    const success = validate.isPassword(value)

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

     let formData = new FormData(),encrypt = new JSEncrypt();
     encrypt.setPublicKey(window.__PUBLIC_KEY__);
     let params = {
      name:this.state.name.inputProps.value,
      nickname:this.state.nickname.inputProps.value,
      contact:this.state.contact.inputProps.value,
      avator:this.state.avator.inputProps.file,
      password:encrypt.encrypt(this.state.password.inputProps.value),
    };

    Object.entries(params).map(item=>{
      // formData.append(item[0],item[1])
      formData.append.apply(formData,item)
    })
    const setFieldError = (field)=>{
      this.setState({
        [field]:{
           ...this.state[field],
           error:true,
           success:false
         }
       })
    }
    this.props.fetchRegisterUser(formData,(type)=>{
       switch(type){
         case 'NICKNAME_EXIST':
         setFieldError('nickname')
         break
         case 'EMAIL_EXIST':
         case 'PHONE_EXIST':
         case 'CONTACT':
         setFieldError('contact')
         break
       }
    })
  }
  onItemCancel(){
    this.props.onCancel()
  }
  setFieldValue(field,value){
    if(!this.state[field]) return
    this.setState({
      [field]:{
         ...this.state[field],
         inputProps:{
            ...this.state[field].inputProps,
            value
         },
         error:false,
         success:false
       }
     })
  }
  componentWillReceiveProps(props){
    if(props.userInfo&&props.userInfo._id){
      const userInfo = props.userInfo;
      Object.keys(userInfo).map((key,index)=>{
         if(key!='avator'){
           if((key == 'phone' || key=='email') && userInfo[key]){
              key = 'contact'
           }
           this.setFieldValue(key,userInfo[key])
         }
      })
    }
  }
  render() {
    const { userInfo } = this.props;
    return (

      <React.Fragment>
                <DialogContent>
            <CustomInput id={'user-item-dialog-name'}
                formControlProps={
                  {className:'item-form'}
                }  
                {...this.state.name}
              />
            <CustomInput id={'user-item-dialog-nickname'} 
                formControlProps={
                  {className:'item-form'}
                } 
                {...this.state.nickname}/>
            <CustomInput id={'user-item-dialog-contact'}
                formControlProps={
                  {className:'item-form'}
                }  
                {...this.state.contact}/>
            <CustomInput id={'user-item-dialog-password'}
                formControlProps={
                  {className:'item-form'}
                }  
                {...this.state.password}/>
            <CustomInput id={'user-item-dialog-avator'} 
                formControlProps={
                  {className:'item-form'}
                } 
                {...this.state.avator}/>
        </DialogContent>
        <DialogActionComponent>
          <Button onClick={this.onItemConfirm} >{userInfo?'确定':'注册'}</Button>
          <Button onClick={this.onItemCancel} >取消</Button>
        </DialogActionComponent>
      </React.Fragment>
      
    );
  }
}

export default withStyles(dialogStyle)(UserInfo);
