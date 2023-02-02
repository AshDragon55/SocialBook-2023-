import * as bootstrap from 'bootstrap'

Template.addProfile.events({
    'click .js-addModal'() {
        const addModal = new bootstrap.Modal('#addModal', {
            keyboard: false
        })
        addModal.show()
    }
})