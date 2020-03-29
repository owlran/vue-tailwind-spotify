<template>
  <button
    class="baseButton text-white px-5 py-1 border hover:p-10 rounded-full"
    @click="$emit('click')"
  >{{ text }}</button>
</template>

<script>
export default {
  props: ['text'],
};
</script>

<style lang="scss">
  .baseButton {
    transition: all .2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
</style>
