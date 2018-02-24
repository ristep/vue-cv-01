import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Resime from "./views/Resime.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/cv",
      name: "resime",
      component: Resime
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
