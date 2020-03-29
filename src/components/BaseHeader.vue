<template>
  <header class="flex flex-col md:flex-row justify-between">
    <h2 class="text-center text-white text-2xl">{{ title }}</h2>
    <div class="text-white flex justify-around mt-10" v-if="hasSlot">
      <slot name="buttons">
      </slot>
    </div>
  </header>
</template>

<script>
export default {
  props: ['title'],
  computed: {
    hasSlot() {
      return !!this.$slots.buttons;
    },
  },
};
</script>
