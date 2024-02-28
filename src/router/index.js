import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
    },
    {
      path: "/tasks",
      name: "about",
      component: () => import("../views/Tasks.vue"),
    },
  ],
});

export default router;
