import Vue from "vue";
import VueRouter from "vue-router";
// require("./bootstrap");
import "bootstrap";
import RoundList from "./RoundList";

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
        component: {}
    }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    el: "#app",
    router
});
