<template>
  <div class="w-1/2 bg-gray-500 mx-auto">
    <p>Play lists</p>
    <div v-if="lists">
      <p v-for="(list, index) in lists" :key="index">
        {{ list.name }}
      </p>
    </div>
  </div>
</template>

<script>
import {
  getPlaylists,
} from '@/service/spotify';

export default {
  data() {
    return {
      playLists: null,
    };
  },
  computed: {
    lists() {
      return this.playLists && this.playLists.items.map(({
        id, images, name, tracks,
      }, i) => ({
        id,
        images,
        name,
        tracks,
        i,
      }));
    },
  },
  async mounted() {
    const { data } = await getPlaylists();
    this.playLists = data;
  },
};
</script>
