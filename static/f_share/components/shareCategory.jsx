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
      width:"400px"
    }
}

class ShareCategory extends React.Component {
  constructor(props){
    super(props)
    this.onCategoryChange = this.onCategoryChange.bind(this)
    this.onCategoryConfirm = this.onCategoryConfirm.bind(this)
    this.state = {
        category:'test'
    }
  }
  onCategoryChange(ev) {
     this.setState({
        category:ev.target.value
     })
  }
  onCategoryConfirm(){
     this.props.fetchSaveCategory(this.state.category)
  }
  render() {
    const { classes ,title} = this.props;
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
      <DialogComponent muiClasses={classes}>
        <DialogTitleComponent>
            {title}
        </DialogTitleComponent>
        <DialogContent>
            <CustomInput {...customInput} />
        </DialogContent>
        <DialogActionComponent>
          <Button onClick={this.onCategoryConfirm} >确定</Button>
        </DialogActionComponent>
      </DialogComponent>
    );
  }
}

export default withStyles(dialogStyle)(ShareCategory);
