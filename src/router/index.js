import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ClassicView from "../views/ClassicView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/classic",
    name: "Classic",
    component: ClassicView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
