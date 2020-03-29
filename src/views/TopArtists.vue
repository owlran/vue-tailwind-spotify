<template>
  <main class="mx-auto py-10">
    <Loader v-if="topArtistsList === null"></Loader>
    <div class="w-full bg-black-500" v-else>
      <BaseHeader :title="'Top Artists'">
        <div slot="buttons">
          <button class="px-5" @click="selectPeriod('all')">All Time</button>
          <button class="px-5" @click="selectPeriod('6')">Last 6 months</button>
          <button class="px-5" @click="selectPeriod('4')">Last 4 Weeks</button>
        </div>
      </BaseHeader>
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
import BaseHeader from '@/components/BaseHeader.vue';
import Loader from '@/components/Loader.vue';
import {
  getTopArtistsShort,
  getTopArtistsMedium,
  getTopArtistsLong,
} from '@/service/spotify';

export default {
  name: 'TopArtists',
  data() {
    return {
      topArtistsList: null,
    };
  },
  components: {
    BaseHeader,
    Loader,
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
