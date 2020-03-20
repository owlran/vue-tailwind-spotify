<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <a :href="loginURL">Login</a>
    <h2>Location</h2>
    <span>{{ userData.country }}</span>
    <h2>name</h2>
    <span>{{ userData.display_name }}</span>
    <h2>image</h2>
    <img :src="userData.images[0].url"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import {
  getUser,
  getNewUser,
  getNewRelease,
} from '@/service/spotify';

export default {
  name: 'Home',
  data() {
    return {
      userData: null,
    };
  },
  components: {
    HelloWorld,
  },
  computed: {
    loginURL() {
      return 'http://localhost:8890/login';
    },
  },
  async mounted() {
    try {
      const res = await getUser();
      console.log(res.data);
      this.userData = res.data;
      const res2 = await getNewUser();
      console.log(res2);
      const res3 = await getNewRelease();
      console.log(res3);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
