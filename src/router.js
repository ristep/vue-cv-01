import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Resume from "./views/Resume.vue";
import resume02 from "./views/resume02.vue";
import cv from "./views/cv.vue";
import cv02 from "./views/cv02.vue";

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
      path: "/resume",
      name: "resume",
      component: Resume
    },
    {
      path: "/resume02",
      name: "resume02",
      component: resume02
    },
    {
      path: "/cv",
      name: "cv",
      component: cv
    },
    {
      path: "/cv02",
      name: "cv02",
      component: cv02
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
