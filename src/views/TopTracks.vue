<template>
  <main class="w-full mx-auto py-10 px-6 min-w-full">
    <Loader v-if="topTracks === null"></Loader>
    <div v-else class="px-4">
      <BaseHeader :title="'Top tracks'">
        <div slot="buttons">
          <button
            class="p-2 text-sm"
            :class="{ 'period--selected': selectedIndex === 'all' }"
            @click="selectPeriod('all')">All Time</button>
          <button
            class="p-2 text-sm"
            :class="{ 'period--selected': selectedIndex === '6' }"
            @click="selectPeriod('6')">Last 6 months</button>
          <button
            class="p-2 text-sm"
            :class="{ 'period--selected': selectedIndex === '4' }"
            @click="selectPeriod('4')">Last 4 Weeks</button>
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
      selectedIndex: 'all',
    };
  },
  components: {
    BaseHeader,
    TracksList,
    Loader,
  },
  methods: {
    async selectPeriod(period = 'all') {
      this.selectedIndex = period;
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

<style lang="scss">
.period {
  &--selected {
    @apply border-b-2 border-green-500
  }
}
</style>
