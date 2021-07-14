import { createWebHistory, createRouter } from "vue-router";

const history = createWebHistory()

import Page from "./views/Page.vue"

// const Page = () => import("./views/Page.vue");

const routeur = createRouter({
    history: history,
    routes: [
        {
            path: '/',
            component: Page,
        },
    ]
});


export default routeur;
