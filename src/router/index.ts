import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
const Home = () => import("@/views/home.vue");
const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/hello",
  },
  {
    path: "/",
    redirect: "/hello",
  },
  {
    path: "/hello",
    name: "HelloWorld",
    meta: {
      title: "hello",
      keepAlive: true,
      requireAuth: false,
    },
    component: HelloWorld,
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      title: "home",
    },
    component: Home,
  },
];
const router = createRouter({
  history: createWebHistory("/sportClimbing"),
  routes,
});
export default router;
