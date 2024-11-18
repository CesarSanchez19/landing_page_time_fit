import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../components/Home.vue") },
        { path: "/Aboutus", component: () => import("../components/AboutUs.vue") },
        { path: "/Contact", component: () => import("../components/Contact.vue") },
        { path: "/Pricing", component: () => import("../components/Pricing.vue") },
        { path: "/Features", component: () => import("../components/Features.vue") },
        { path: "/SignIn", component: () => import("../components/signin.vue") },
        { path: "/Login", component: () => import("../components/login.vue") },
        { path: "/Condiction", component: () => import("../components/condiction.vue") },
    ]
});

export default router;
