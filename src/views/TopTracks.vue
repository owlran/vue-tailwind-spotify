<template>
  <main class="mx-auto py-10">
    <Loader v-if="topTracks === null"></Loader>
    <div v-else>
      <BaseHeader :title="'Top tracks'">
        <div slot="buttons">
          <button class="px-5" @click="selectPeriod('all')">All Time</button>
          <button class="px-5" @click="selectPeriod('6')">Last 6 months</button>
          <button class="px-5" @click="selectPeriod('4')">Last 4 Weeks</button>
        </div>
      </BaseHeader>
      <div class="text-white mt-10">
        <TracksList :tracksList="topTracks"/>
      </div>
    </div>
  </main>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue';
import Loader from '@/components/Loader.vue';
import TracksList from '@/components/TracksList.vue';
import {
  getTopTracksShort,
  getTopTracksMedium,
  getTopTracksLong,
} from '@/service/spotify';

export default {
  name: 'TopTracks',
  data() {
    return {
      topTracks: null,
    };
  },
  components: {
    BaseHeader,
    TracksList,
    Loader,
  },
  methods: {
    async selectPeriod(period = 'all') {
      const callback = {
        all: getTopTracksLong,
        6: getTopTracksMedium,
        4: getTopTracksShort,
      };
      const res = await callback[period]();
      this.topTracks = res.data.items;
    },
  },
  mounted() {
    this.selectPeriod();
  },
};
</script>
