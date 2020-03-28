<template>
  <div class="w-1/2 bg-gray-900 mx-auto">
    <loader v-if="isLoading"></loader>
    <div class="content" v-else>
      <p>Recent</p>
    </div>
    <div>
      <TracksList :tracksList="tracks"></TracksList>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue';
import { getRecentlyPlayed } from '@/service/spotify';
import TracksList from '@/components/TracksList.vue';

export default {
  data() {
    return {
      isLoading: true,
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
  },
  async mounted() {
    const res = await getRecentlyPlayed();
    this.recentPlayed = res.data;
    this.isLoading = false;
  },
};

</script>
