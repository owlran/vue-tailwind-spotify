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
      <div class="stat-info flex justify-around items-center w-1/2 mx-auto mt-10 text-white lg:max-w-lg">
        <div class="text-center">
          <p>
            {{ followers }}
          </p>
          <p>
            Followers
          </p>
        </div>
        <div class="text-center">
          <p>{{ following }}</p>
          <p>Following</p>
        </div>
        <div class="text-center">
          <p>{{ totaolPlaylists }}</p>
          <p>play lists</p>
        </div>
      </div>
      <div class="mt-10 flex justify-center">
        <div class="text-white px-5 py-1 border rounded-full">Logout</div>
      </div>
      <div class="flex flex-col lg:flex-row lg:justify-around mt-10">
        <div class="top-artists flex flex-col">
          <div v-for="(artist, index) in slicedTopAritsts" :key="index" class="flex items-center text-white justify-start p-2">
            <img :src="artist.images[1].url" alt="artist-img" class="max-w-lg w-12 rounded-full mr-5">
            <p class="text-center mr-10">{{ artist.name }}</p>
          </div>
        </div>
        <TracksList :tracksList="slicedTopTracks"/>
      </div>
      <div class="text-white my-0 mx-auto text-center">
        <a  class="button" :href="loginURL">Login</a>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue';
import TracksList from '@/components/TracksList.vue';
import {
  getUserInfo,
} from '@/service/spotify';

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
  },
  computed: {
    loginURL() {
      return 'http://localhost:8890/login';
    },
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
