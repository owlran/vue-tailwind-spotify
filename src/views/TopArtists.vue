<template>
  <main class="mx-auto py-10">
    <div class="w-full bg-black-500">
      <header class="flex justify-between">
        <h2 class="text-white text-2xl">Top Artists</h2>
        <div class="rangs text-white flex justify-around">
          <button class="px-5" @click="selectPeriod('all')">All Time</button>
          <button class="px-5" @click="selectPeriod('6')">Last 6 months</button>
          <button class="px-5" @click="selectPeriod('4')">Last 4 Weeks</button>
        </div>
      </header>
      <div v-if="topArtistsList" class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
        <div class="flex flex-col justify-center items-center" v-for="(artist, index) in topArtistsList" :key="index">
          <img class=" w-40 rounded-full" :src="artist.images[1].url"/>>
          <p class="text-white">{{ artist.name }}</p>
          <P>{{ index }}</P>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {
  getTopArtistsShort,
  getTopArtistsMedium,
  getTopArtistsLong,
} from '@/service/spotify';

export default {
  name: 'TopArtists',
  data() {
    return {
      topArtistsList: [],
    };
  },
  methods: {
    async selectPeriod(period = 'all') {
      const callback = {
        all: getTopArtistsLong,
        6: getTopArtistsMedium,
        4: getTopArtistsShort,
      };
      const res = await callback[period]();
      this.topArtistsList = res.data.items;
    },
  },
  mounted() {
    this.selectPeriod();
  },
};
</script>
