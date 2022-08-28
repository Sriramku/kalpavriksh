import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Calculators from "../components/Calculators.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/tools",
    component: () => import("../views/ToolsParent.vue"),
    children: [
      {
        path: "/",
        name: "tools",
        component: () => import("../views/ToolsView.vue"),
      },
      {
        path: "calculators",
        name: "tools.calculators",
        component: Calculators,
      },
    ],
  },
  {
    path: "/games",
    name: "Games",
    component: () => import("../views/GamesView.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/ContactView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
