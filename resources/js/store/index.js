import { createStore } from "vuex";

export default createStore({
    state () {
        return {
            alert: null,
            ready: false,
            settings: {},
            wallet: {
                connected: false,
            },
        }
    },
    mutations: {
        alert(state, value) {
            state.alert = value;
        },
        ready(state, value) {
            state.ready = value;
        },
        settings(state, value) {
            state.settings = value;
        },
        wallet(state, value) {
            state.wallet = value;
        }
    }
});
