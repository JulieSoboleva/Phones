export default class Validator {
    constructor(phone) {
        this.phone = phone;
    }

    formatPhone() {
        let result = this.phone.replace(/[() -]/g, '');
        if (result.startsWith('8')) {
            result = `+7${result.slice(1)}`;
        }
        return result;
    }
}