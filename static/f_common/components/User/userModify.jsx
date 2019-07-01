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
import CustomButton from "../CustomButtons/Button"
import validate from "../../../../util/validate"
import InputValue from "./user"
const dialogStyle = {
    paper:{
      width:"500px"
    },
    captchaBox:{
       display:"flex"
    },
    captchaImg:{
      width:'70px',
    },
    captchaBtn:{
      width:'60px',
      marginLeft:'10px'
    },
    captchaBtnEnAble:{
      background:'#26c6da',
      "&:hover":{
        background:'#00acc1',
      }
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

    this.onItemConfirm = this.onItemConfirm.bind(this)
    this.onItemCancel = this.onItemCancel.bind(this)
    const userInfo = props.userInfo;
    this.state = {
        name:new InputValue('姓名','请填写真实姓名',userInfo.name,this.onNameChange,this.onCheck),
        nickname:new InputValue('昵称','昵称',userInfo.nickname,this.onNicknameChange,this.onCheck),
        avator:new InputValue('头像','头像','',this.onAvatorChange,'file'),
        contact:new InputValue('联系方式','请输入有效手机或邮箱',userInfo.email||userInfo.phone,this.onContactChange,this.onCheck),
        captcha:Object.assign(new InputValue('验证码','请输入验证码',this.onCaptchaChange),{sent:false,btname:'发送',count:60}),
        phoneCaptcha:new InputValue('手机验证码','请输手机入验证码',this.onPhoneCaptchaChange,this.onCheck),
        password:new InputValue('密码','6位以上，字母+数字+特殊字符如sun@123','',this.onPasswordChange,this.onCheck),
        captchaRandom:Math.random(),
        canregister:false
    }
  }
  onCheck(){
    let {name,nickname,contact,password,phoneCaptcha} = this.state;
    if(name.success && nickname.success && contact.success && password.success && phoneCaptcha.success){
      this.setState({
        canregister:true
      })
    }else{
      this.setState({
        canregister:false
      })
    }
  }
  onNameChange(ev,check = ()=>{}) {
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
     },check)
  }
  onNicknameChange(ev,check = ()=>{}) {
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
    },check)
 }
 onContactChange(ev,check=()=>{}) {
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
    },check)
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
  onPasswordChange(ev,check = ()=>{}){
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
    },check)
  }
  onCaptchaChange(ev,check = ()=>{}){
    const value = ev.target.value
    const success = validate.isCaptcha(value)

    const captcha = {
        ...this.state.captcha,
      inputProps:{
          ...this.state.captcha.inputProps,
          value:ev.target.value
      },
      error:!success,
      success
    }
    this.setState({
      captcha
    },()=>{
      check()
    })
  }
  refreshCaptcha(){
    this.setState({
      captchaRandom:Math.random()
    })
  }
  onSendPhoneCaptcha(){
    let { captcha ,contact} = this.state
    const params = {
       phone:contact.inputProps.value,
       captcha:captcha.inputProps.value
    }
    
    fetchPost(API.sendPhoneCaptcha,params).then(json=>json.data).then(json=>{
      if(json.status){
         this.setState({
            captcha:{
              ...captcha,
              sent:true
            }
         },()=>{
          this.timer = setInterval(()=>{
              this.setState({
                  captcha:{
                    ...captcha,
                    sent:true,
                    btname:`${this.count--}s`
                  }
              })
            if(this.count == 0){
              clearInterval(this.timer)
              this.count = 60;
              this.setState({
                  captcha:{
                    ...captcha,
                    btname:'发送',
                    sent:false
                  },
                  captchaRandom:Math.random()
              })
            }
          },1000)
         })
         
      }else{
        console.log(json.msg)
      }
    })
  }
  onPhoneCaptchaChange(ev){
    const value = ev.target.value
    const success = validate.isPhoneCaptcha(value)

    const phoneCaptcha = {
        ...this.state.phoneCaptcha,
      inputProps:{
          ...this.state.phoneCaptcha.inputProps,
          value:ev.target.value
      },
      error:!success,
      success
    }
    this.setState({
      phoneCaptcha
    })
  }
  onItemConfirm(){

     let formData = new FormData();
     let params = {
      _id:this.props.userInfo._id,
      name:this.state.name.inputProps.value,
      nickname:this.state.nickname.inputProps.value,
      contact:this.state.contact.inputProps.value,
      phoneCaptcha:this.state.phoneCaptcha.inputProps.value,
      avator:this.state.avator.inputProps.file,
      password:this.state.password.inputProps.value,
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
    this.props.fetchModifyUser(formData,(type)=>{
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
  render() {
    const { userInfo , classes} = this.props;
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
             <div className={classes.captchaBox} >
                  
                  <CustomButton className={classes.captchaImg} justIcon color="transparent" onClick={this.refreshCaptcha} ><img width="70px" src={'/share/api/user/captcha?v='+this.state.captchaRandom} /></CustomButton>
                  <CustomInput id={'user-item-dialog-captcha'}
                  formControlProps={
                    {className:'item-form'}
                  }  
                  {...this.state.captcha}/>
                  <CustomButton disabled={!(this.state.captcha.success&&this.state.contact.success&&!this.state.captcha.sent)}  className={classes.captchaBtn +' '+ (this.state.captcha.success&&this.state.contact.success&&!this.state.captcha.sent?classes.captchaBtnEnAble:'')} onClick={this.onSendPhoneCaptcha} >{this.state.captcha.btname}</CustomButton>
              </div>
            <CustomInput id={'user-item-dialog-captcha'}
                formControlProps={
                  {className:'item-form'}
                }  
                {...this.state.captcha}/>
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
          <Button onClick={this.onItemConfirm} disabled={!this.state.canregister}>{userInfo?'确定':'注册'}</Button>
          <Button onClick={this.onItemCancel} >取消</Button>
        </DialogActionComponent>
      </React.Fragment>
      
    );
  }
}

export default withStyles(dialogStyle)(UserInfo);
