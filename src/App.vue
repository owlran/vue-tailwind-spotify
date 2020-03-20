<template>
  <div id="app" class="max-w-full w-full h-screen overflow-hidden bg-gray-300">
    <div class="flex flex-wrap h-full w-full">
      <div class='h-full w-1/4 xl:w-1/6 bg-gray-900 text-gray-200'>
      </div>
      <main class='flex flex-col h-full w-3/4 xl:w-5/6 bg-gray-800 text-gray-200'>
      </main>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
