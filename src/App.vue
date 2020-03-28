<template>
  <div id="app" class="max-w-full w-full bg-gray-900 flex flex-col justify-between md:flex-row md:justify-evenly">
    <!-- </div> -->
    <router-view class="md:order-2"/>
    <app-navigator class="md:order-1 md:w-auto"></app-navigator>
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
