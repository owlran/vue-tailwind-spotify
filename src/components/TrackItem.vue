<template>
  <div class="w-full flex items-center text-white justify-between py-2 truncate">
    <div class="flex items-start">
      <img :src="track.album.images[1].url" alt="" class="w-12 mr-5">
      <div class="flex flex-col w-15 truncate max-w-xs lg:max-w-xl">
        <p class="truncate">{{ track.name }}</p>
        <div class="flex">
          <div class="truncate">
            <span v-for="(artist, index) in track.artists" :key="index" class="profile__artist-name truncate">
              {{ artist.name }}
            </span>
            <span class="truncate">
              {{ track.album.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="ml-4">
      <p>
        {{ track.duration_ms | formatDuration }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['track'],
  filters: {
    formatDuration(millis) {
      const minutes = Math.floor(millis / 60000);
      const seconds = ((millis % 60000) / 1000).toFixed(0);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    },
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
