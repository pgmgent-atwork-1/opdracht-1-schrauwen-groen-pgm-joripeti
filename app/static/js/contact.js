(() => {
const app = {
init() {

    console.log('1.init');
    this.cache();
},
cache() { 
    console.log('2.cache');
    this.$fromContact = document.querySelector('#form-contact');
    this.registerListeners();
},
registerListeners() {
    this.$fromContact.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const $elements = ev.currentTarget.elements;
        const data = {
            type: $elements.type.value,
            companyName: $elements.company_name.value,
            province: $elements.province.value,
            lastName: $elements.lastname.value,
            firstName: $elements.firstname.value,
            phone: $elements.phone.value,
            email: $elements.email.value,
            message: $elements.message.value,
            optin: $elements.optin.value,
        }
        const dataJSONStr = JSON.stringify(data);
        console.log(dataJSONStr);
        return false;
});
    this.generate();

},
generate() {
    console.log('3.gen');
}
}; app.init()
})()