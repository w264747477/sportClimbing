import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
const MenBoulderingFinal = () => import("@/views/menBoulderingFinal/index.vue");
const MenBoulderingFinalN = () =>
  import("@/views/menBoulderingFinalN/index.vue");
const MenBoulderingFinalQ = () =>
  import("@/views/menBoulderingFinalQ/index.vue");
const MenBoulderingFinalQW = () =>
  import("@/views/menBoulderingFinalQW/index.vue");
const MenSpeedFinal = () => import("@/views/menSpeedFinal/index.vue");
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
  {
    path: "/menBoulderingFinalQ",
    name: "MenBoulderingFinalQ",
    meta: {
      title: "MenBoulderingFinalQ",
    },
    component: MenBoulderingFinalQ,
  },
  {
    path: "/menBoulderingFinalQW",
    name: "MenBoulderingFinalQW",
    meta: {
      title: "MenBoulderingFinalQW",
    },
    component: MenBoulderingFinalQW,
  },
  {
    path: "/menSpeedFinal",
    name: "MenSpeedFinal",
    meta: {
      title: "MenSpeedFinal",
    },
    component: MenSpeedFinal,
  },
];
const router = createRouter({
  history: createWebHistory("/sportClimbing"),
  routes,
});
export default router;
