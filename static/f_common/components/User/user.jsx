export default class InputValue {
    constructor(labelText,placeholder,value,onChange,type='text'){
      this.labelText = labelText
      this.inputProps = {
        placeholder:placeholder,
        onChange:onChange,
        value:value,
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