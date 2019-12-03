<template>
  <figure class="post-cover image is-16by9">
    <img :src="imageSrc">
  </figure>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .post-cover {
    border-radius: 5px;
    overflow: hidden;

    img {
      object-fit: cover;
    }
  }
</style>
