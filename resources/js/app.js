// Bootstrap
import "../sass/app.scss";
import * as bootstrap from "bootstrap";
// Axios
window.axios = require("axios");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// Web3
import Web3 from "web3";
window.web3 = new Web3();
// Vue
import { createApp, provide } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import useSettings from "./composables/useSettings";
const settings = useSettings();
settings.update();
createApp({
    components: {
        App,
    },
    setup() {
        provide("$settings", settings);
    }
}).use(router).use(store).mount("#app");
