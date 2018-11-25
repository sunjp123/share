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
import SwitchLabels from "../../f_common/components/Selection/switchLabels"
const dialogStyle = {
    paper:{
      width:"400px"
    }
}

class ShareCategory extends React.Component {
  constructor(props){
    super(props)
    this.onCategoryChange = this.onCategoryChange.bind(this)
    this.onCategoryConfirm = this.onCategoryConfirm.bind(this)
    this.onChangeSwitchLabel = this.onChangeSwitchLabel.bind(this)
    this.state = {
        category:'',
        switchLabels:[{
          label:'公共分享',
          checked:true,
          value:'public',
          color:'primary'
        }]
    }
  }
  onCategoryChange(ev) {
     this.setState({
        category:ev.target.value
     })
  }
  onCategoryConfirm(){
     this.props.saveCategory({name:this.state.category||this.props.defaultValue,
      _id:this.props._id,
      publicFlag:this.state.switchLabels[0].checked
    })
  }
  componentWillReceiveProps(nextProps){
    if(this.state.category!=nextProps.defaultValue){
      this.setState({
        category:nextProps.defaultValue
      })
    }  
  }
  onChangeSwitchLabel(changeSwitchIndex,event){
    this.setState({
      switchLabels:this.state.switchLabels.map((switchLabel,index)=>{
          if(index == changeSwitchIndex){
            switchLabel.checked = event.target.checked
            switchLabel.label = switchLabel.checked?'公共分享':'我的收藏'
          }
          return switchLabel
      })
    })
  }
  render() {
    const { classes ,title , open} = this.props;
    const customInput = {
      formControlProps:{
          className:'category-form'
      },
      inputProps:{
        placeholder: "category",
        inputProps: {
          "aria-label": "category"
        },
        onChange:this.onCategoryChange,
        value:this.state.category
      },
      labelText:'',
      id:"share-category-input",
      success:false,
      error:false
    }
    return (
      <DialogComponent muiClasses={classes} open={open}>
        <DialogTitleComponent>
            {title}
        </DialogTitleComponent>
        <DialogContent>
            <CustomInput {...customInput} />
            <SwitchLabels switchLabels = {this.state.switchLabels} onChange={this.onChangeSwitchLabel}/>
        </DialogContent>
        <DialogActionComponent>
          <Button onClick={this.onCategoryConfirm} >确定</Button>
        </DialogActionComponent>
      </DialogComponent>
    );
  }
}

export default withStyles(dialogStyle)(ShareCategory);
