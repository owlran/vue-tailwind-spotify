<template>
  <div class="profile bg-black-500 w-full">
    <Loader v-if="user === null"></Loader>
    <div class="p-10 flex flex-col justify-center items-center" v-else>
      <p>Profile</p>
      <div class="user-avatar flex justify-center flex-col items-center">
        <div class="h-16 w-16">
          <img class="rounded-full" :src="userImg" alt="">
        </div>
        <div>
          <p class="text-xl text-white">{{ userName }}</p>
        </div>
      </div>
      <div class="stat-info flex justify-around items-center mx-auto mt-10 text-white lg:max-w-lg">
        <div class="text-center px-4">
          <p>
            {{ followers }}
          </p>
          <p>
            Followers
          </p>
        </div>
        <div class="text-center px-4">
          <p>{{ following }}</p>
          <p>Following</p>
        </div>
        <div class="text-center px-4">
          <p>{{ totaolPlaylists }}</p>
          <p>play lists</p>
        </div>
      </div>
      <div class="mt-10 flex justify-center">
        <BaseButton
          @click="logoutHandler"
          :text="'Logout'"></BaseButton>
      </div>
      <div class="flex flex-col lg:flex-row lg:justify-between mt-10">
        <div>
          <div class="flex justify-between items-center align-middle py-3">
            <BaseHeader :title="'Top artists'"></BaseHeader>
            <BaseButton
              class="lg:my-5 uppercase"
              :text="'More'"
              @click="$router.push('/topArtists')"
            ></BaseButton>
          </div>
          <div class="top-artists flex flex-col">
            <div v-for="(artist, index) in slicedTopAritsts" :key="index" class="flex items-center text-white justify-start p-2">
              <img :src="artist.images[1].url" alt="artist-img" class="max-w-lg w-12 rounded-full mr-5">
              <p class="text-center mr-10">{{ artist.name }}</p>
            </div>
          </div>
        </div>
        <div class="lg:ml-10">
          <div class="flex absolute-center items-center justify-between py-3">
            <BaseHeader :title="'Top tracks'"></BaseHeader>
            <BaseButton
              class="lg:my-5 uppercase"
              :text="'More'"
              @click="$router.push('/topTracks')"
              ></BaseButton>
          </div>
          <TracksList :tracksList="slicedTopTracks"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue';
import TracksList from '@/components/TracksList.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseHeader from '@/components/BaseHeader.vue';

import {
  getUserInfo,
} from '@/service/spotify';
import { logout } from '@/utils/auth';

export default {
  data() {
    return {
      user: null,
      followedArtists: null,
      playlists: null,
      topArtists: null,
      topTracks: null,
    };
  },
  components: {
    TracksList,
    Loader,
    BaseButton,
    BaseHeader,
  },
  computed: {
    userImg() {
      return this.user && this.user.images[0].url;
    },
    userName() {
      return this.user && this.user.display_name;
    },
    followers() {
      return this.user && this.user.followers.total;
    },
    following() {
      return this.followedArtists && this.followedArtists.artists.total;
    },
    totaolPlaylists() {
      return this.playlists && this.playlists.total;
    },
    slicedTopAritsts() {
      return this.topArtists && this.topArtists.items.slice(0, 10);
    },
    slicedTopTracks() {
      return this.topTracks && this.topTracks.items.slice(0, 10);
    },
  },
  filters: {
    formatDuration(millis) {
      const minutes = Math.floor(millis / 60000);
      const seconds = ((millis % 60000) / 1000).toFixed(0);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    },
  },
  methods: {
    logoutHandler() {
      logout();
    },
  },
  async mounted() {
    const {
      user,
      followedArtists,
      playlists,
      topArtists,
      topTracks,
    } = await getUserInfo();
    this.user = user;
    this.followedArtists = followedArtists;
    this.playlists = playlists;
    this.topArtists = topArtists;
    this.topTracks = topTracks;
  },
};

</script>

<style lang="scss">
  .profile {
    &__artist-name {
      &::after {
        content: ' ·  ';
      }
    }
  }
</style>
