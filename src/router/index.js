import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../views/MainPage.vue"),
		},
		{
			path: "/tasks",
			name: "tasks",
			component: () => import("../views/TasksList.vue"),
		},
	],
});

export default router;
