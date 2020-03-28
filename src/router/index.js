import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
  },
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
];

const router = new VueRouter({
  routes,
});

export default router;
