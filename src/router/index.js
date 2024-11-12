import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import HomePage from '@/views/HomePage.vue';  

const routes = [
    {
        path: '/',
        name: 'Root',
        component: HomePage,
        // beforeEnter: (to, from, next) => {
        //     // Redirect to "/manila" if only "/" is entered
        //     next({ path: '/Manila' });
        // },
    },
    {
        path: '/:city/',
        name: 'Home',
        component: HelloWorld,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;