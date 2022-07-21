<template>
    <div class="container mt-2">
        <div v-if="store.state.alert" class="alert alert-dismissible fade show" :class="store.state.alert.type" role="alert">
            {{ store.state.alert.message }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex";
import useAlerts from "../composables/useAlerts";
export default {
    setup () {
        const store = useStore();
        const alerts = useAlerts();
        return {
            alerts,
            store,
        }
    }
}
</script>
