<template>
  <div class="bg-gray-900 w-full h-screen flex justify-center items-center">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
};

</script>

<style lang="scss">
$green: #41b883;
.loader {
  border-top: 5px solid lighten($green, 35%);
  border-right: 5px solid lighten($green, 35%);
  border-bottom: 5px solid lighten($green, 35%);
  border-left: 5px solid $green;

  transform: translateZ(0);
  animation: loaderSpinner 1.1s infinite linear;

  border-radius: 50%;
  width: 40px;
  height: 40px
}

@keyframes loaderSpinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
