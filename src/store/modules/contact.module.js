import contactService from '@/services/contact.service.js';

export default {
    state: {
        contacts: null,
        contact: null
    },
    getters: {
        contacts(state) {
            return state.contacts;
        },
        contact(state) {
            return state.contact;
        }
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts;
        },
        setContact(state, { contact }) {
            state.contact = contact;
        },
        removeContact(state, { id }) {
            const idx = state.contacts.findIndex(contact => contact._id === id);
            state.contacts.splice(idx, 1);
        },
        saveContact(state, { contact }) {
            const idx = state.contacts.findIndex(currContact => currContact._id === contact._id);
            if (idx !== -1) state.contacts.splice(idx, 1, contact);
            else state.contacts.push(contact);
        }
    },
    actions: {
        async loadContacts({ commit }) {
            const contacts = await contactService.query();
            commit({ type: 'setContacts', contacts });
        },
        async getContact({ commit }, { id }) {
            const contact = await contactService.get(id);
            commit({ type: 'setContact', contact });
        },
        async removeContact({ commit }, { id }) {
            await contactService.remove(id);
            commit({ type: 'removeContact', id });
        },
        async saveContact({ commit }, { contactToSave }) {
            const updatedContact = await contactService.save(contactToSave);
            commit({ type: 'saveContact', contact: updatedContact });
        },
        async getEmptyContact({ commit }) {
            const contact = await contactService.getEmptyContact();
            commit({ type: 'setContact', contact });
        }
    }
};