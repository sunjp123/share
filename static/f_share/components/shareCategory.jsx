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

import InputItem from "./inputItem"
import { isNotEmpty } from "../../../util/validate"
const dialogStyle = {
  paper: {
    width: "400px"
  }
}

class ShareCategory extends React.Component {
  constructor(props) {
    super(props)
    this.onCategoryChange = this.onCategoryChange.bind(this)
    this.onCategoryConfirm = this.onCategoryConfirm.bind(this)
    this.onChangeSwitchLabel = this.onChangeSwitchLabel.bind(this)
    this.state = {
      category: new InputItem('', [isNotEmpty]),
      switchLabels: [{
        selects: ['公共分享', '我的收藏'],
        label: '公共分享',
        checked: true,
        value: 'public',
        color: 'primary'
      }, {
        selects: ['允许其他人添加分享', '禁止其他人添加分享'],
        label: '禁止其他人添加分享',
        checked: false,
        value: 'public',
        color: 'primary'
      }]
    }
  }
  onInputBlur(name) {
    let state = this.state[name], success = state.check()
    state.success = success;
    state.error = !success
    this.setState({
      [name]: state
    })
  }
  onCategoryChange(ev) {
    let category = this.state.category;
    category.value = ev.target.value;
    this.setState({
      category
    })
  }
  onCategoryConfirm() {
    let category = this.state.category
    if (!category.check()) {
      this.setState({
        category
      })
      return
    }
    this.props.saveCategory({
      name: this.state.category.value || this.props.defaultValue,
      _id: this.props._id,
      publicFlag: this.state.switchLabels[0].checked,
      shareFlag: this.state.switchLabels[1].checked,
    }).then((json) => {
      if (!json.status) {
        if (json.res.error == 'name') {
          let category = this.state.category
          category.error = true
          category.success = false
          this.setState({
            category
          })
        }
      }
    })
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.category.value != nextProps.defaultValue) {
      this.setState({
        category: new InputItem(nextProps.defaultValue, [isNotEmpty])
      })
    }
  }
  onChangeSwitchLabel(changeSwitchIndex, event) {
    this.setState({
      switchLabels: this.state.switchLabels.map((switchLabel, index) => {
        if (index == changeSwitchIndex) {
          switchLabel.checked = event.target.checked
          switchLabel.label = switchLabel.checked ? switchLabel.selects[0] : switchLabel.selects[1]
        }
        return switchLabel
      })
    })
  }
  render() {
    const { classes, title, open } = this.props;
    const customInput = {
      formControlProps: {
        className: 'category-form'
      },
      inputProps: {
        placeholder: "category",
        inputProps: {
          "aria-label": "category"
        },
        onChange: this.onCategoryChange,
        value: this.state.category.value,
        onBlur: this.onInputBlur.bind(this, 'category')
      },
      labelText: '',
      id: "share-category-input",
      success: this.state.category.success,
      error: this.state.category.error,
    }
    return (
      <DialogComponent muiClasses={classes} open={open}>
        <DialogTitleComponent>
          {title}
        </DialogTitleComponent>
        <DialogContent>
          <CustomInput {...customInput} />
          <SwitchLabels switchLabels={this.state.switchLabels} onChange={this.onChangeSwitchLabel} />
        </DialogContent>
        <DialogActionComponent>
          <Button onClick={this.onCategoryConfirm} >确定</Button>
        </DialogActionComponent>
      </DialogComponent>
    );
  }
}

export default withStyles(dialogStyle)(ShareCategory);
