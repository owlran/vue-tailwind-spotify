<template>
  <div class="playlist mx-auto p-10 w-full">
    <Loader v-if="playlist === null"></Loader>
    <div v-else class="flex flex-col md:flex-row">
      <div class="text-white">
        <BaseHeader :title="playlist.name"></BaseHeader>
        <p class="pt-5 text-center text-sm text-gray-400 truncate max-w-md">{{ playlist.description }}</p>
        <p class="uppercase text-center pt-5">{{ playlist.tracks.total }} tracks</p>
        <img :src="playlist.images[0].url" alt="" class="hidden md:block md:mx-auto pt-5">
        <BaseButton
          class="mt-5 block mx-auto hidden"
          @click="$router.push(`/recommendations/${playListId}`)"
          :text="'Get Recommendations'"></BaseButton>
        <BaseButton
          class="mt-5 block mx-auto"
          @click="$router.push('/playlists')"
          :text="'Back Playlists'"></BaseButton>
        <div v-if="audioFeaturesForTracks" class="max-w-sm">
          <FeatureChart :features="audioFeaturesForTracks && audioFeaturesForTracks.audio_features"></FeatureChart>
        </div>
      </div>
      <div class="tracklist mt-10 lg:ml-10">
        <div v-for="(item, index) in playlist.tracks.items" :key="index" class="text-white">
          <TrackItem :track="item.track"></TrackItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getPlaylist,
  getAudioFeaturesForTracks,
} from '@/service/spotify';
import Loader from '@/components/Loader.vue';
import BaseHeader from '@/components/BaseHeader.vue';
import BaseButton from '@/components/BaseButton.vue';
import TrackItem from '@/components/TrackItem.vue';
import FeatureChart from '@/components/FeatureChart.vue';

export default {
  data() {
    return {
      playlist: null,
      audioFeaturesForTracks: null,
    };
  },
  components: {
    Loader,
    BaseButton,
    BaseHeader,
    TrackItem,
    FeatureChart,
  },
  computed: {
    playListId() {
      return this.$route.params.id;
    },
  },
  async mounted() {
    const { data: playlist } = await getPlaylist(this.playListId);
    this.playlist = playlist;

    if (playlist) {
      const { data: audioFeatures } = await getAudioFeaturesForTracks(this.playlist.tracks.items);
      this.audioFeaturesForTracks = audioFeatures;
    }
  },
};

</script>
