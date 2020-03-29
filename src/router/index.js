import Vue from 'vue';
import VueRouter from 'vue-router';
import {
  token,
} from '@/service/spotify';

Vue.use(VueRouter);

const routes = [
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Login.vue'),
  },
  {
    path: '/playLists',
    name: 'PlayLists',
    component: () => import(/* webpackChunkName: "playLists" */ '../views/PlayLists.vue'),
  },
  {
    path: '/recent',
    name: 'Recent',
    component: () => import(/* webpackChunkName: "recent" */ '../views/Recent.vue'),
  },
  {
    path: '/topArtists',
    name: 'topArtists',
    component: () => import(/* webpackChunkName: "topArtists" */ '../views/TopArtists.vue'),
  },
  {
    path: '/topTracks',
    name: 'topTracks',
    component: () => import(/* webpackChunkName: "topTracks" */ '../views/TopTracks.vue'),
  },
  {
    path: '/playlists/:id',
    name: 'playlist',
    component: () => import(/* webpackChunkName: "topTracks" */ '../views/PlayList.vue'),
  },
  {
    path: '/recommendations/:id',
    name: 'recommendations',
    component: () => import(/* webpackChunkName: "topTracks" */ '../views/Recommendations.vue'),
  },
  {
    path: '/',
    redirect: '/profile',
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});


router.beforeEach((to, from, next) => {
  if (token) {
    next();
    return;
  }
  if (to.path !== '/login') {
    next('/login');
  } else {
    next();
  }
});

export default router;
