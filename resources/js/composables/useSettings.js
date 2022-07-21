import { useStore } from "vuex";
import useAlerts from "./useAlerts";

export default () => {
    const store = useStore();
    const alerts = useAlerts();

    const update = async () => {
        store.commit("ready", false);
        alerts.warning("Loading site settings");
        await axios.get("/api/v1/settings").then((response) => {
            store.commit("settings", response.data);
            settings = response.data;
            alerts.clear();
        }).catch((error) => {
            alerts.error(error.message);
        });
        store.commit("ready", true);
    }

    const get = (setting) => {
        if(typeof store.state.settings[setting] == "undefined") {
            return null;
        }
        return store.state.settings[setting];
    }

    const getAll = () => {
        return store.state.settings;
    }

    return {
        get,
        getAll,
        update,
    }
}
