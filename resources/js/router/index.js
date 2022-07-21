import { createRouter, createWebHistory } from "vue-router";

import Buy from "../views/Buy.vue";
import BuyUsdc from "../views/BuyUsdc.vue";
import Marketplace from "../views/Marketplace.vue";
import Sell from "../views/Sell.vue";
import Stake from "../views/Stake.vue";

const routes = [
    {
        path: "/",
        name: "Buy",
        component: Buy,
    },
    {
        path: "/buy-usdc",
        name: "BuyUsdc",
        component: BuyUsdc,
    },
    {
        path: "/marketplace",
        name: "Marketplace",
        component: Marketplace,
    },
    {
        path: "/sell",
        name: "Sell",
        component: Sell,
    },
    {
        path: "/stake",
        name: "Stake",
        component: Stake,
    },
    {
        path: "/:catchAll(.*)",
        beforeEnter (to) {
            window.location.replace("/404");
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
