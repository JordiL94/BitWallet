import userService from '@/services/user.service.js';

export default {
    state: {
        user: null
    },
    getters: {
        user(state) {
            return state.user;
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user;
        },
    },
    actions: {
        async loadUser({ commit }) {
            const user = await userService.getUser();
            commit({ type: 'setUser', user });
        },
        async signup({ commit, name }) {
            const user = await userService.signup(name);
            commit({ type: 'setUser', user });
        },
        logout({ commit }) {
            userService.logout();
            commit({ type: 'setUser', user: null });
        },
        async addMove({ commit }, { contact, amount }) {
            const user = await userService.addMove(contact, amount);
            commit({ type: 'setUser', user });
        },
    }
}