<template>
  <div id="app" class="max-w-full w-full h-screen bg-gray-900">
    <app-navigator></app-navigator>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    <!-- </div> -->
    <router-view/>
  </div>
</template>
<script>
import AppNavigator from '@/components/AppNavigator.vue';

export default {
  components: {
    AppNavigator,
  },
};
</script>

<style lang="scss" scoped>

</style>
