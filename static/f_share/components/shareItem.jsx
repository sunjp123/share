import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/core
import Button from "@material-ui/core/Button";
// @material-ui/icons
// import Cloud from "@material-ui/icons/Cloud";

// core components
import DialogComponent from "../../f_common/components/Dialog/Dialog";
import DialogTitleComponent from "../../f_common/components/Dialog/DialogTitle";
import DialogContent from "../../f_common/components/Dialog/DialogContent";
import DialogActionComponent from "../../f_common/components/Dialog/DialogAction";
import CustomInput from "../../f_common/components/CustomInput/CustomInput";
const dialogStyle = {
    paper:{
      width:"500px"
    }
}

class ShareItem extends React.Component {
  constructor(props){
    super(props)
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onLinkChange = this.onLinkChange.bind(this)
    this.onDescriptionChange = this.onDescriptionChange.bind(this)
    this.onItemConfirm = this.onItemConfirm.bind(this)
    this.onItemCancel = this.onItemCancel.bind(this)
    this.onIconChange = this.onIconChange.bind(this)
    this.state = {
        title:'标题',
        link:'',
        description:''
    }
  }
  onTitleChange(ev) {
     this.setState({
       title:ev.target.value
     })
  }
  onLinkChange(ev) {
    this.setState({
        link:ev.target.value
    })
 }
 onDescriptionChange(ev) {
    this.setState({
      description:ev.target.value
    })
  }
  onIconChange(ev){
    this.setState({
      icon:ev.target.files[0]
    })
  }
  onItemConfirm(){
     let formData = new FormData(),params = {
      category:this.props.category,
      _id:this.props.item?this.props.item._id:'',
      title:this.state.title,
      link:this.state.link,
      icon:this.state.icon,
      description:this.state.description,
      target:'_blank',
    };

    Object.entries(params).map(item=>{
      // formData.append(item[0],item[1])
      formData.append.apply(formData,item)
    })

    this.props.saveItem(formData)
  }
  onItemCancel(){
    this.props.cancelItem()
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.item){
       this.setState({
         ...nextProps.item
       })
    }
  }
  render() {
    const { classes ,title , open} = this.props;
    const customInput = {
      formControlProps:{
          className:'item-form'
      },
      inputProps:{
        placeholder: "category",
        inputProps: {
          "aria-label": "category"
        }
      },
      labelText:'标题',
      success:false,
      error:false
    }
    return (
      <DialogComponent muiClasses={classes} open={open}>
        <DialogTitleComponent>
            {title}
        </DialogTitleComponent>
        <DialogContent>
            <CustomInput id={'share-item-dialog-title'}  
                {...customInput} 
                labelText={'标题'} 
                inputProps={{...customInput.inputProps,
                placeholder:'标题',
                onChange:this.onTitleChange,
                value:this.state.title
              }}/>
            <CustomInput id={'share-item-dialog-link'} 
                {...customInput} 
                labelText={'链接'}  
                inputProps={{...customInput.inputProps,
                placeholder:'链接',
                onChange:this.onLinkChange,
                value:this.state.link
                }}/>
            <CustomInput id={'share-item-dialog-description'} 
                {...customInput} 
                labelText={'描述'}  
                inputProps={{...customInput.inputProps,
                placeholder:'描述',
                onChange:this.onDescriptionChange,
                value:this.state.description
              }}/>
            <CustomInput id={'share-item-dialog-image'} 
                {...customInput} 
                labelText={'图标'}  
                inputProps={{...customInput.inputProps,
                placeholder:'图标',
                type:'file',
                inputProps:{
                  accept:'image/*'
                },
                onChange:this.onIconChange
              }}/>
        </DialogContent>
        <DialogActionComponent>
          <Button onClick={this.onItemConfirm} >确定</Button>
          <Button onClick={this.onItemCancel} >取消</Button>
        </DialogActionComponent>
      </DialogComponent>
    );
  }
}

export default withStyles(dialogStyle)(ShareItem);
