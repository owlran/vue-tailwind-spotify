import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
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

export default router;
