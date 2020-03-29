<template>
  <div class="top-tracks mt-10 lg:mt-0">
    <div v-for="(track, index) in tracksList" :key="index">
      <TrackItem :track="track"></TrackItem>
    </div>
  </div>
</template>

<script>
import TrackItem from '@/components/TrackItem.vue';

export default {
  props: [
    'tracksList',
  ],
  components: {
    TrackItem,
  },
};
</script>
