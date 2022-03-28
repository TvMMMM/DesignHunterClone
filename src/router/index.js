import Vue from "vue";
import VueRouter from "vue-router";
import "animate.css";
import HomeView from "../views/HomeView.vue";
import DesignView from "../views/DesignView.vue";
import LifestyleView from "../views/LifestyleView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/interiors",
    name: "interiors",
    component: () => import("@/views/InteriorsView.vue"),
    // children: [
    //   {
    //     path: "/concrete-plinth-house",
    //     name: "Concrete Plinth House",
    //     component: () => import("@/views/DetailPostView.vue"),
    //   },
    // ],
  },
  {
    path: "/concrete-plinth-house",
    name: "concrete-plinth-house",
    component: () => import("@/views/DetailPostView.vue"),
  },
  {
    path: "/design",
    name: "design",
    component: DesignView,
  },
  {
    path: "/lifestyle",
    name: "lifestyle",
    component: LifestyleView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
