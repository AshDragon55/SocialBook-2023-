import * as bootstrap from 'bootstrap'

Template.listProfiles.helpers({
    profiles() {
        return socialdb.find()
    }
})

Template.listProfiles.events({
    'click .js-view'(){
        let that = this
        const viewModal = new bootstrap.Modal('#viewModal', {})
        console.warn("viewing", that._id)
        viewModal.show()
    },

})
