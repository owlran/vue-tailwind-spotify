<template>
  <div id="app" class="relative max-w-full w-full bg-gray-900 flex flex-col md:flex-row">
    <!-- </div> -->
    <router-view class="md:order-2 md:pl-24 min-h-screen"/>
    <app-navigator class="block md:order-1 md:w-24"></app-navigator>
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
