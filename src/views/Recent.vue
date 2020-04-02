<template>
  <div class="mx-auto py-10 w-full">
    <loader v-if="recentPlayed === null"></loader>
    <div class="content" v-else>
      <BaseHeader :title="'Recent played'"></BaseHeader>
    </div>
    <div class="p-6">
      <TracksList :tracksList="tracks"></TracksList>
    </div>
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue';
import Loader from '@/components/Loader.vue';
import { getRecentlyPlayed } from '@/service/spotify';
import TracksList from '@/components/TracksList.vue';

export default {
  data() {
    return {
      recentPlayed: null,
    };
  },
  computed: {
    tracks() {
      return this.recentPlayed && this.recentPlayed.items.map((item) => item.track);
    },
  },
  components: {
    TracksList,
    Loader,
    BaseHeader,
  },
  async mounted() {
    const res = await getRecentlyPlayed();
    this.recentPlayed = res.data;
  },
};

</script>
