import Vue from "vue";
import VueRouter from "vue-router";
// All the
import HomeView from "../views/HomeView.vue";
import ClassicView from "../views/ClassicView.vue";
import ExtremeView from "../views/ExtremeView.vue";
import ArtsSienceView from "../views/ArtsSienceView.vue";

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
  {
    path: "/extreme",
    name: "Extreme",
    component: ExtremeView,
  },
  {
    path: "/arts&sience",
    name: "Arts&Sience",
    component: ArtsSienceView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
