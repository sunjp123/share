import {
  primaryColor,
  dangerColor,
  successColor,
  defaultFont
} from "../../material-dashboard-react.jsx";
const placeholderHidden = {
  opacity: 0
};
const placeholderVisible = {
  opacity:  0.5
};
const customInputStyle = {
  disabled: {
    "&:before": {
      backgroundColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important"
    },
    "&:after": {
      borderColor: primaryColor
    }
  },
  underlineError: {
    "&:after": {
      borderColor: dangerColor
    }
  },
  underlineSuccess: {
    "&:after": {
      borderColor: successColor
    }
  },
  labelRoot: {
    ...defaultFont,
    color: "#AAAAAA !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857"
  },
  labelRootError: {
    color: dangerColor
  },
  labelRootSuccess: {
    color: successColor
  },
  feedback: {
    position: "absolute",
    top: "18px",
    right: "0",
    zIndex: "2",
    display: "block",
    width: "24px",
    height: "24px",
    textAlign: "center",
    pointerEvents: "none"
  },
  marginTop: {
    marginTop: "16px"
  },
  formControl: {
    flex: "1 1 auto",
    paddingBottom: "10px",
    margin: "0 0 0 0",
    position: "relative"
  }
  ,textIndentFile:{
    visibility:'hidden'
  },
  commonInput:{
    'label[data-shrink=false] + label &': {
      '&::-webkit-input-placeholder': placeholderHidden,
      '&::-moz-placeholder': placeholderHidden,
      // Firefox 19+
      '&:-ms-input-placeholder': placeholderHidden,
      // IE 11
      '&::-ms-input-placeholder': placeholderHidden,
      // Edge
      '&:focus::-webkit-input-placeholder': placeholderVisible,
      '&:focus::-moz-placeholder': placeholderVisible,
      // Firefox 19+
      '&:focus:-ms-input-placeholder': placeholderVisible,
      // IE 11
      '&:focus::-ms-input-placeholder': placeholderVisible // Edge

    }
  },
  inputWrapLabel:{
    position:'relative',
    flex:'1 1 auto',
    marginTop:'16px',
    display:'inline-flex',
    flexDirection:'column',
    whiteSpace:'nowrap',
    overflow:'hidden',
    textOverflow:'ellipsis',
    '& input':{
      paddingRight:'40px'
    }
  },
  inputText:{
    position:'absolute',
    bottom:'0',
    top:'0',
    left:0,
    lineHeight:'2.42857',
    right:'40px',
    whiteSpace:'nowrap',
    overflow:'hidden',
    textOverflow:'ellipsis',
  }
};

export default customInputStyle;
