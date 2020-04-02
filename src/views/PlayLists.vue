<template>
  <div class="mx-auto py-10 px-5 md:ml-10">
    <Loader v-if="playLists === null"></Loader>
    <div v-else>
      <BaseHeader :title="'Play lists'"></BaseHeader>
      <div v-if="lists" class="text-white grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        <div v-for="(list, index) in lists" :key="index" class="flex flex-col justify-center items-center">
          <div class="relative">
            <img :src="list.images[0].url"/>
            <div
              @click="$router.push(`/playlists/${list.id}`)"
              class="w-full h-full opacity-0 absolute top-0 left-0 hover:opacity-50 bg-black cursor-pointer"></div>
          </div>
          <p class="pt-2 text-sm text-center">
            {{ list.name }}
          </p>
          <p class="text-gray-600 text-xs uppercase">
            {{ list.tracks.total }} tracks
          </p>
          <!-- {{ list.id }} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue';
import BaseHeader from '@/components/BaseHeader.vue';
import {
  getPlaylists,
} from '@/service/spotify';

export default {
  data() {
    return {
      playLists: null,
    };
  },
  components: {
    BaseHeader,
    Loader,
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
