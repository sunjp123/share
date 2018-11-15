import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/core
import Input from "@material-ui/core/Input";
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
  onItemConfirm(){
     this.props.saveItem({
       category:this.props.category,
       title:this.state.title,
       link:this.state.link,
       description:this.state.description,
       target:'_blank',
     })
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
                abelText={'标题'} 
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
        </DialogContent>
        <DialogActionComponent>
          <Button onClick={this.onItemConfirm} >确定</Button>
        </DialogActionComponent>
      </DialogComponent>
    );
  }
}

export default withStyles(dialogStyle)(ShareItem);
