import { useStore } from "vuex";
export default () => {
    const store = useStore();
    const primary = (message) => {
        update("alert-primary", message);
    }
    const secondary = (message) => {
        update("alert-secondary", message);
    }
    const success = (message) => {
        update("alert-success", message);
    }
    const danger = (message) => {
        update("alert-danger", message);
    }
    const warning = (message) => {
        update("alert-warning", message);
    }
    const info = (message) => {
        update("alert-info", message);
    }
    const light = (message) => {
        update("alert-light", message);
    }
    const dark = (message) => {
        update("alert-dark", message);
    }
    const update = (type, message) => {
        store.commit("alert", {
            type: type,
            message: message,
        });
    }
    const clear = () => {
        store.commit("alert", null);
    }
    return {
        primary,
        secondary,
        success,
        danger,
        warning,
        info,
        light,
        dark,
        clear,
    }
}
