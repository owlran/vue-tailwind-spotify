<template>
  <header class="flex justify-between">
    <h2 class="text-white text-2xl">{{ title }}</h2>
    <div class="rangs text-white flex justify-around">
      <slot name="buttons">
      </slot>
    </div>
  </header>
</template>

<script>
export default {
  props: ['title'],
};
</script>
