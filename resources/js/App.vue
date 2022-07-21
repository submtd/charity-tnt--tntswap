<template>
    <div>
        <Navbar/>
        <Alerts/>
        <div class="container my-5">
            <div v-if="!store.state.ready" class="text-center my-5 py-5">
                <div class="spinner-border" style="width: 6rem; height: 6rem;" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <router-view v-if="store.state.ready"/>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { onMounted } from "vue";
import { useStore } from "vuex";
import useAlerts from "./composables/useAlerts";
// Components
import Alerts from "./components/Alerts.vue";
import Navbar from "./components/Navbar.vue";
export default {
    components: {
        Alerts,
        Navbar,
    },
    setup () {
        const store = useStore();
        const alerts = useAlerts();

        onMounted(async () => {
            store.commit("ready", false);
            // Get site settings.
            try {
                await axios.get("/api/v1/settings").then((response) => {
                    store.commit("settings", response.data);
                }).catch((error) => {
                    alerts.danger(error.message);
                });
            } catch (error) {
                alerts.danger(error.message);
            }
            store.commit("ready", true);
        });

        return {
            store,
        }
    }
}
</script>
