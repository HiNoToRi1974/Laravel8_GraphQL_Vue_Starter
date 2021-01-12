import Vue from "vue";
import VueRouter from "vue-router";
import "bootstrap";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";
import moment from "moment";

import RoundList from "./RoundList";
import Round from "./Round";
window.Vue = Vue.default;

Vue.use(VueRouter);

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

Vue.use(VueApollo);
const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: "http://127.0.0.1:8000/graphql"
});

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

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
});

const router = new VueRouter({
    mode: "history",
    routes
});

const app = new Vue({
    el: "#app",
    apolloProvider,
    router
});
