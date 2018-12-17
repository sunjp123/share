import { isArray } from "../../../util/validate"
export default class InputItem {
    constructor(value, validate) {
        this.setValidate = this.setValidate.bind(this)
        this.realValue = value
        this.validates = []
        this.setValidate(validate)
        this.error = false
        this.success = false
        this.readOnly = false
        this.disabled = false
    }
    setValidate(validate) {
        if (!validate) return
        if (typeof validate == 'function') {
            this.validates.push(validate.bind(this))
        }
        if (isArray(validate)) {
            this.validates = this.validates.concat(validate)
        }
    }
    removeValidate(validate) {
        this.validates = this.validates.filter(v => v != validate)
    }
    set value(value) {
        this.realValue = value;
    }
    get value() {
        return this.realValue
    }
    check() {
        const success = this.validates.every(validate => validate(this.value))
        return success
    }
}