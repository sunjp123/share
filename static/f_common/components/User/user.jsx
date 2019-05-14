export default class InputValue {
  constructor(labelText,placeholder,eventCallback,check,type='text'){
    this.labelText = labelText
    this.inputProps = {
      placeholder:placeholder,
      onChange:this.onChange(eventCallback,check),
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
  onChange(eventCallback,check){
     return (ev)=>{
        eventCallback(ev,check)
     }
  }
}