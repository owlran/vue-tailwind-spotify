<template>
  <div class="recommendations">
    {{ recommendations }}
  </div>
</template>

<script>
import {
  getPlaylist,
  getRecommendationsForTracks,
  getUser,
  createPlaylist,
  addTracksToPlaylist,
  followPlaylist,
  doesUserFollowPlaylist,
} from '@/service/spotify';

export default {
  data() {
    return {
      playlist: null,
      recommendations: null,
      userId: null,
      isFollowingState: false,
    };
  },
  methods: {
    async getData() {
      const { data } = await getPlaylist(this.playlistId);
      this.playlist = data;

      if (data) {
        const { data: recommendations } = await getRecommendationsForTracks(this.playlist.tracks.items);
        this.recommendations = recommendations;
      }
    },
    getTrackUris(recommendations) {
      return recommendations.tracks.map(({ uri }) => uri);
    },
    async createPlaylist() {
      const name = `Recommended Tracks Based on ${this.playlist.name}`;
      const { data } = await getUser();

      this.userId = data.id;

      if (this.userId) {
        const playlist = await createPlaylist(this.userId, name);
        const recPlaylistId = playlist.data.id;
        this.recPlaylistId = recPlaylistId;

        if (data) {
          this.addTracksAndFollow(recPlaylistId);
        }
      }
    },
    async addTracksAndFollow(playlistId) {
      const uris = this.getTrackUris(this.recommendations).join(',');
      const { data } = await addTracksToPlaylist(playlistId, uris);

      if (data) {
        await followPlaylist(playlistId);
        this.isFollowing(playlistId);
      }
    },
    async isFollowing(playlistId) {
      const { data } = await doesUserFollowPlaylist(playlistId, this.userId);
      [this.isFollowingState] = data;
    },
  },
  computed: {
    playlistId() {
      return this.$route.params.id;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
