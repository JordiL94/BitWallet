import { createStore } from 'vuex';
import contactModule from '@/store/modules/contact.module.js';
import userModule from '@/store/modules/user.module.js';

const store = createStore({
    strict: true,
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {},
    modules: {
        contactModule,
        userModule
    }
});

export default store;