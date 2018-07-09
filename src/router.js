import Ours from './views/ours.vue';
import Home from './views/home.vue';
const routers = [
    {
        path: '/',
        meta: {
            title: '中兴金融科技'
        },
        // component: Index
        redirect: '/home',
        component: (resolve) => require(['./views/index.vue'], resolve)
    },{
        path: '/ours',
        meta: {
            title: '关于我们'
        },
        component: Ours
    },{
        path: '/home',
        meta: {
            title: '中兴金融科技'
        },
        component: Home
    }
];
export default routers;