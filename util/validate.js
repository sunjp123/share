const EMAIL_VALIDATE = value => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)
const PHONE_VALIDATE = value => /^[1][3-9][0-9]{9}$/.test(value)
const PASSWORD_VALIDATE = value => /^.*(?=.{7,})(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.test(value)

module.exports = class Validate {
    static isEmail(value){
        return EMAIL_VALIDATE(value)
    }
    static isPhone(value){
        return PHONE_VALIDATE(value)
    }
    static isPassword(value){
        return PASSWORD_VALIDATE(value)
    }
}