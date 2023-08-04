import { createRouter, createWebHistory } from "vue-router";
import store from '../store';
const routes = [
    {
        path: '/',
        component: () => import('../views/home.vue')
    },
    {
        path: '/adsoyad-sorgu',
        component: () => import('../views/AdSoyad.vue')
    },
    {
        path: '/adsoyad-secmen-sorgu',
        component: () => import('../views/AdSoyadSecmen.vue')
    },
    {
        path: '/adres-secmen-sorgu',
        component: () => import('../views/AdresSecmen.vue')
    },
    {
        path: '/tc-sorgu',
        component: () => import('../views/TcSorgu.vue')
    },
    {
        path: '/tcgsm-sorgu',
        component: () => import('../views/TcGsm.vue')
    },
    {
        path: '/gsmtc-sorgu',
        component: () => import('../views/GsmTc.vue')
    },
    {
        path: '/aile-sorgu',
        component: () => import('../views/AileSorgu.vue')
    },
    {
        path: '/tc-pro',
        component: () => import('../views/TcPro.vue')
    },
    {
        path: '/aile-pro',
        component: () => import('../views/AilePro.vue')
    },
    {
        path: '/tcgsm-pro',
        component: () => import('../views/TcGsmPro.vue')
    },
    {
        path: '/tc-sorgu-2015',
        component: () => import('../views/TcSorguSecmen.vue')
    },
    {
        path: '/users',
        component: () => import('../views/AdminDashboard/Users.vue')
    },
    {
        path: '/kayit',
        component: () => import('../views/auth/register.vue')
    },
    {
        path: '/giris',
        component: () => import('../views/auth/login.vue')
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
});

router.beforeEach((to, _, next) => {
    const notAuthReqRoutes = ['/giris', '/kayit'];
    const isAuthenticate = store.getters._isAuthenticate;
    if (notAuthReqRoutes.includes(to.path)) {
        if (isAuthenticate) next('/')
        else next()
    } else {
        if (isAuthenticate) next()
        else next('/giris')
    }
})

export default router;