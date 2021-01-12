import Vue from "vue";
import VueRouter from "vue-router";
// require("./bootstrap");
import "bootstrap";
import RoundList from "./RoundList";
import Round from "./Round";
window.Vue = Vue.default;

Vue.use(VueRouter);

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

const routes = [
    {
        path: "/",
        name: "index",
        component: RoundList
    },
    {
        path: "/rounds",
        name: "rounds",
        component: {}
    },
    {
        path: "/round/:id",
        name: "round",
        component: Round
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

const app = new Vue({
    el: "#app",
    router
});
