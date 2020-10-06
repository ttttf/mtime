<template>
  <div class="slideshow">
      <img :src="ImgUrl.img" alt="" class="slideshow-img">
  </div>
</template>

<script>
export default {
  props: ['ImgUrl']
}
</script>

<style>
.slideshow{
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
}
.slideshow-img{
  width: 100%;
  height: 100%;
}
</style>