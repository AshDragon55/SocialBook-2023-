import * as bootstrap from 'bootstrap';

Template.navBar.events({
    'click .js-showLogin'() {
        const loginModal = new bootstrap.Modal('#loginModal', {})
        console.warn("show log in form")
    }
})