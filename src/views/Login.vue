<template>
  <div class="mx-auto py-10 flex justify-center items-center">
    <div class="text-white my-0 mx-auto text-center text-white">
      <BaseButton
        class="border border-white"
        :text="'Login with Spotify account'"
        @click="clickHandler"/>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  components: {
    BaseButton,
  },
  methods: {
    clickHandler() {
      window.location.href = this.loginURL;
    },
  },
  computed: {
    loginURL() {
      return 'https://vue-tailwind-css-spotify-serve.herokuapp.com/login';
    },
  },
};

</script>
