import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        redirect: '/hello',
    },
    {
        path: '/',
        redirect: '/hello',
    },
    {
        path: '/hello',
        name: 'HelloWorld',
        meta: {
            title: 'hello',
            keepAlive: true,
            requireAuth: false,
        },
        component: HelloWorld,
    },
];
const router = createRouter({
    history: createWebHistory('/sportClimbing'),
    routes,
});
export default router;
