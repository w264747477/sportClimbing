import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
const MenBoulderingFinal = () => import("@/views/menBoulderingFinal/index.vue");
const MenBoulderingFinalN = () =>
  import("@/views/menBoulderingFinalN/index.vue");
const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/menBoulderingFinal",
  },
  {
    path: "/",
    redirect: "/menBoulderingFinal",
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
    path: "/menBoulderingFinal",
    name: "MenBoulderingFinal",
    meta: {
      title: "MenBoulderingFinal",
    },
    component: MenBoulderingFinal,
  },
  {
    path: "/menBoulderingFinalN",
    name: "MenBoulderingFinalN",
    meta: {
      title: "MenBoulderingFinalN",
    },
    component: MenBoulderingFinalN,
  },
];
const router = createRouter({
  history: createWebHistory("/sportClimbing"),
  routes,
});
export default router;
