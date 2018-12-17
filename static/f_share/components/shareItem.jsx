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
import CustomSelect from "../../f_common/components/Selects/customSelect";
import LinearProgress from "../../f_common/components/Progress/linear";


import { isNotEmpty, isUrl } from "../../../util/validate"
import InputItem from "./inputItem"
const dialogStyle = {
  paper: {
    width: "500px"
  }
}


class ShareItem extends React.Component {
  constructor(props) {
    super(props)
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onLinkChange = this.onLinkChange.bind(this)
    this.onDescriptionChange = this.onDescriptionChange.bind(this)
    this.onItemConfirm = this.onItemConfirm.bind(this)
    this.onItemCancel = this.onItemCancel.bind(this)
    this.onIconChange = this.onIconChange.bind(this)
    this.onTypeChange = this.onTypeChange.bind(this)
    this.state = {
      title: new InputItem('标题', [isNotEmpty]),
      link: new InputItem('', [isNotEmpty, isUrl]),
      description: new InputItem('', [isNotEmpty]),
      type: {
        selected: { value: 0, name: '链接' },
        options: [{ value: 0, name: '链接' }, { value: 1, name: '文件' }]
      }
    }
  }
  onTitleChange(ev) {
    let title = this.state.title
    title.value = ev.target.value
    this.setState({
      title
    })
  }
  onInputBlur(name) {
    let state = this.state[name], success = state.check()
    state.success = success;
    state.error = !success
    this.setState({
      [name]: state
    })
  }
  onLinkChange(ev) {
    if (this.state.type.selected.value == 0) {
      let link = this.state.link
      link.value = ev.target.value
      this.setState({
        link
      })
    } else {
      let file = ev.target.files[0]
      let formData = new FormData()
      formData.append('file', file)
      formData.append('category', this.props.category)
      let type = this.state.type, link = this.state.link
      type.disabled = true
      link.disabled = true
      link.error = false
      this.setState({
        type,
        link
      }, () => {
        new Promise((resolve, reject) => {
          this.props.fetchUploadFile(formData, (progress) => {
            let link = this.state.link
            link.progress = (progress.loaded / progress.total) * 100
            this.setState({
              link
            })
          }, resolve, reject)
        }).then((json) => {
          let link = this.state.link
          link.value = json.link
          link.uploadFinish = true
          link.error = false
          link.success = true
          this.setState({
            link
          })
        }).catch((e) => {

        })
      })


    }

  }
  onDescriptionChange(ev) {
    let description = this.state.description
    description.value = ev.target.value
    this.setState({
      description
    })
  }
  onIconChange(ev) {
    this.setState({
      icon: ev.target.files[0]
    })
  }
  onTypeChange(ev) {
    let { link } = this.state;
    const selected = this.state.type.options.find(option => option.value == ev.target.value)
    if (selected.value == 1) {
      link.removeValidate(isUrl)
    } else {
      link.setValidate(isUrl)
    }
    link.value = '';
    link.error = false
    link.success = false
    this.setState({
      type: {
        ...this.state.type,
        selected
      },
      link
    })
  }
  onItemConfirm() {
    let { title, link } = this.state,
      isTitle = title.check(),
      isLink = link.check()
    if (!isTitle) {
      title.error = true
      title.success = false
      this.setState({
        title
      })
      return
    }
    if (!isLink) {
      link.error = true
      link.success = false
      this.setState({
        link
      })
      return
    }
    let formData = new FormData(), params = {
      category: this.props.category,
      _id: this.props.item ? this.props.item._id : '',
      title: this.state.title.value,
      link: this.state.link.value,
      icon: this.state.icon,
      description: this.state.description.value,
      target: '_blank',
    };

    Object.entries(params).map(item => {
      // formData.append(item[0],item[1])
      formData.append.apply(formData, item)
    })
    this.props.saveItem(formData).then((json) => {
      if (json.status) {
        this.reset()
      } else if (json.res.error === 'title') {
        let title = this.state.title;
        title.error = true
        title.success = false
        this.setState({
          title
        })
      }
    }).catch((e) => {
      console.log(e)
    })


  }
  onItemCancel() {
    this.props.cancelItem()
    this.reset()
  }
  reset() {
    let type = this.state.type, link = this.state.link
    type.disabled = false
    link.disabled = false
    link.uploadFinish = false
    link.error = false
    link.success = false
    link.progress = 0
    this.setState({
      type,
      link
    })
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.item) {
      let { title, link, description } = nextProps.item
      this.setState({
        title: new InputItem(title, [isNotEmpty]),
        link: new InputItem(link, [isNotEmpty, isUrl]),
        description: new InputItem(description, [isNotEmpty]),
      })

    }
  }
  render() {
    const { classes, dialogTitle, open } = this.props, { title, link, description, type } = this.state;
    const customInput = {
      formControlProps: {
        className: 'item-form'
      },
      inputProps: {
        placeholder: "category",
        inputProps: {
          "aria-label": "category"
        }
      },
      labelText: '标题',
      success: false,
      error: false
    }
    return (
      <DialogComponent muiClasses={classes} open={open}>
        <DialogTitleComponent>
          {dialogTitle}
        </DialogTitleComponent>
        <DialogContent>
          <CustomInput id={'share-item-dialog-title'}
            {...customInput}
            labelText={'标题'}
            inputProps={{
              ...customInput.inputProps,
              placeholder: '标题',
              onChange: this.onTitleChange,
              value: title.value,
              onBlur: this.onInputBlur.bind(this, 'title')
            }}
            success={title.success}
            error={title.error}
          />
          <CustomSelect id={'share-item-dialog-type-select'}
            labelText={'类型'}
            disabled={type.disabled}
            selected={type.selected}
            options={type.options}
            onChange={this.onTypeChange}
            disabled={type.disabled}
          />

          <CustomInput id={'share-item-dialog-link'}
            formControlProps={{
              ...customInput.formControlProps,
              disabled: link.disabled
            }}
            labelText={'链接'}
            inputProps={{
              ...customInput.inputProps,
              placeholder: '链接',
              type: (type.selected.value == 0 || link.uploadFinish) ? 'text' : 'file',
              onChange: this.onLinkChange,
              value: (type.selected.value == 0 || link.uploadFinish) ? link.value : "",
              onBlur: this.onInputBlur.bind(this, 'link')
            }}
            success={link.success}
            error={link.error}

          >
            <LinearProgress value={link.progress} hide={type.selected.value == 0 || link.uploadFinish} />
          </CustomInput>

          <CustomInput id={'share-item-dialog-description'}
            {...customInput}
            labelText={'描述'}
            inputProps={{
              ...customInput.inputProps,
              placeholder: '描述',
              onChange: this.onDescriptionChange,
              value: description.value,
              onBlur: this.onInputBlur.bind(this, 'description')
            }}
            success={description.success}
            error={false}
          />
          <CustomInput id={'share-item-dialog-image'}
            {...customInput}
            labelText={'图标'}
            inputProps={{
              ...customInput.inputProps,
              placeholder: '图标',
              type: 'file',
              inputProps: {
                accept: 'image/*'
              },
              onChange: this.onIconChange
            }} />
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
